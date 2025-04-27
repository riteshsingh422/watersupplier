import React, { useState, useEffect } from 'react';
import { Table, Card, Form, Col, Row, Badge, Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaChartBar, FaFilter, FaSearch, FaDollarSign, FaCheckCircle, FaTimesCircle, FaTachometerAlt, FaUser, FaSignOutAlt, FaBoxOpen, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [totalSales, setTotalSales] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const ordersPerPage = 10;
  const navigate = useNavigate();

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30');
        const mockOrders = response.data.map((item, index) => ({
          id: item.id,
          customerName: `Customer ${item.id}`,
          orderItems: `Item ${index + 1}, Item ${index + 2}`,
          amount: Math.floor(Math.random() * 500) + 100,
          status: ['Pending', 'In Progress', 'Delivered'][Math.floor(Math.random() * 3)],
          date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
        }));
        setOrders(mockOrders);
        setFilteredOrders(mockOrders);

        // Calculate total sales
        const sales = mockOrders.reduce((sum, order) => sum + order.amount, 0);
        setTotalSales(sales);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };
    fetchOrders();
  }, []);

  // Filter, search, and sort orders
  useEffect(() => {
    let updatedOrders = [...orders];

    // Filter by status
    if (statusFilter !== 'All') {
      updatedOrders = updatedOrders.filter((order) => order.status === statusFilter);
    }

    // Search by customer name or order items
    if (searchTerm) {
      updatedOrders = updatedOrders.filter(
        (order) =>
          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.orderItems.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort orders
    updatedOrders.sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      if (sortField === 'amount' || sortField === 'id') {
        return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }
      return sortOrder === 'asc'
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
    });

    setFilteredOrders(updatedOrders);
  }, [searchTerm, statusFilter, orders, sortField, sortOrder]);

  // Handle order actions
  const handleAcceptOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id && order.status === 'Pending' ? { ...order, status: 'In Progress' } : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
  };

  const handleRejectOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id && order.status === 'Pending' ? { ...order, status: 'Rejected' } : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
  };

  const handleOrderClick = (id) => {
    navigate(`/order/${id}`);
  };

  const handleLogout = () => {
    navigate('/', { replace: true });
  };

  // Sorting handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Prepare data for the chart
  const statusCounts = {
    Pending: orders.filter((order) => order.status === 'Pending').length,
    'In Progress': orders.filter((order) => order.status === 'In Progress').length,
    Delivered: orders.filter((order) => order.status === 'Delivered').length,
    Rejected: orders.filter((order) => order.status === 'Rejected').length,
  };

  const chartData = {
    labels: ['Pending', 'In Progress', 'Delivered', 'Rejected'],
    datasets: [
      {
        label: 'Order Status Distribution',
        data: [statusCounts.Pending, statusCounts['In Progress'], statusCounts.Delivered, statusCounts.Rejected],
        backgroundColor: ['#00c4b4', '#ffca28', '#4caf50', '#f44336'],
        borderColor: ['#00a094', '#e0b400', '#388e3c', '#d32f2f'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Order Status Overview',
        color: '#fff',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        title: {
          display: true,
          text: 'Number of Orders',
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Vendor Dashboard</h3>
        </div>
        <ul className="sidebar-menu">
          <li className="active">
            <FaTachometerAlt className="menu-icon" /> Dashboard
          </li>
          <li onClick={() => navigate('/dashboard')}>
            <FaBoxOpen className="menu-icon" /> Orders
          </li>
          <li onClick={() => navigate('/profile')}>
            <FaUser className="menu-icon" /> Profile
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt className="menu-icon" /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-container">
          {/* Overview Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="overview-card">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaDollarSign className="me-2 card-icon" /> Total Sales
                  </Card.Title>
                  <Card.Text className="overview-value">${totalSales.toLocaleString()}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="overview-card">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaChartBar className="me-2 card-icon" /> Pending Orders
                  </Card.Title>
                  <Card.Text className="overview-value">{statusCounts.Pending}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="overview-card">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaChartBar className="me-2 card-icon" /> Delivered Orders
                  </Card.Title>
                  <Card.Text className="overview-value">{statusCounts.Delivered}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Search and Filter */}
          <Row className="mb-4 align-items-center">
            <Col md={6}>
              <Form.Group className="d-flex align-items-center search-group">
                <FaSearch className="me-2 search-icon" />
                <Form.Control
                  type="text"
                  placeholder="Search by customer name or items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="text-md-end mt-3 mt-md-0">
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-status" className="filter-dropdown">
                  <FaFilter className="me-2" /> Filter by Status: {statusFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-dark">
                  <Dropdown.Item onClick={() => setStatusFilter('All')}>All</Dropdown.Item>
                  <Dropdown.Item onClick={() => setStatusFilter('Pending')}>Pending</Dropdown.Item>
                  <Dropdown.Item onClick={() => setStatusFilter('In Progress')}>In Progress</Dropdown.Item>
                  <Dropdown.Item onClick={() => setStatusFilter('Delivered')}>Delivered</Dropdown.Item>
                  <Dropdown.Item onClick={() => setStatusFilter('Rejected')}>Rejected</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {/* Order Table */}
          <div className="dashboard-content mb-4">
            <Table striped hover className="dashboard-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>
                    Order ID {sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => handleSort('customerName')}>
                    Customer Name {sortField === 'customerName' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Order Items</th>
                  <th onClick={() => handleSort('amount')}>
                    Amount {sortField === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Status</th>
                  <th onClick={() => handleSort('date')}>
                    Date {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id} className="table-row">
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.orderItems}</td>
                    <td>${order.amount.toLocaleString()}</td>
                    <td>
                      <Badge
                        bg={
                          order.status === 'Pending'
                            ? 'warning'
                            : order.status === 'In Progress'
                            ? 'info'
                            : order.status === 'Delivered'
                            ? 'success'
                            : 'danger'
                        }
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td>{order.date}</td>
                    <td>
                      {order.status === 'Pending' ? (
                        <>
                          <button
                            className="action-btn accept-btn me-2"
                            onClick={() => handleAcceptOrder(order.id)}
                          >
                            <FaCheckCircle /> Accept
                          </button>
                          <button
                            className="action-btn reject-btn"
                            onClick={() => handleRejectOrder(order.id)}
                          >
                            <FaTimesCircle /> Reject
                          </button>
                        </>
                      ) : (
                        <button className="action-btn view-btn" onClick={() => handleOrderClick(order.id)}>
                          View
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination Controls */}
            <div className="pagination-controls">
              <Button
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                className="pagination-btn"
              >
                <FaChevronLeft />
              </Button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages} (Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} orders)
              </span>
              <Button
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
                className="pagination-btn"
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>

          {/* Chart */}
          <Row>
            <Col>
              <Card className="chart-card">
                <Card.Body>
                  <Bar data={chartData} options={chartOptions} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;