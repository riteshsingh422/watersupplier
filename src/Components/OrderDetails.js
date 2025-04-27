import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Row, Col, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { FaTachometerAlt, FaUser, FaSignOutAlt, FaBoxOpen, FaArrowLeft, FaSave, FaHistory, FaStickyNote } from 'react-icons/fa';
import './OrderDetails.css';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Mock status history (in a real app, this would come from the API)
  const [statusHistory, setStatusHistory] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const mockOrder = {
          id: response.data.id,
          customerName: `Customer ${response.data.id}`,
          orderItems: `Item ${response.data.id}, Item ${parseInt(response.data.id) + 1}`,
          amount: Math.floor(Math.random() * 500) + 100,
          status: ['Pending', 'In Progress', 'Delivered'][Math.floor(Math.random() * 3)],
          date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
        };
        setOrder(mockOrder);
        setStatus(mockOrder.status);

        // Mock status history
        const history = [
          { status: 'Ordered', timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), user: 'System' },
          { status: mockOrder.status, timestamp: new Date().toISOString(), user: 'Vendor' },
        ];
        setStatusHistory(history);

        // Load notes from localStorage (for demo purposes)
        const savedNotes = localStorage.getItem(`order_${id}_notes`);
        if (savedNotes) setNotes(savedNotes);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert('Failed to fetch order details');
      }
    };
    fetchOrder();
  }, [id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    if (status === order.status) {
      alert('Status is already set to ' + status);
      return;
    }
    setShowModal(true);
  };

  const confirmSave = () => {
    // Update status history
    const newHistory = [
      ...statusHistory,
      { status, timestamp: new Date().toISOString(), user: 'Vendor' },
    ];
    setStatusHistory(newHistory);

    // Update order status
    setOrder({ ...order, status });

    // Save notes to localStorage (for demo purposes)
    localStorage.setItem(`order_${id}_notes`, notes);

    setShowModal(false);
    alert(`Status for order ${id} updated to ${status}`);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/', { replace: true });
  };

  if (loading) {
    return (
      <div className="order-loader">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Vendor Dashboard</h3>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => navigate('/dashboard')}>
            <FaTachometerAlt className="menu-icon" /> Dashboard
          </li>
          <li className="active">
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
        <div className="order-details-container">
          <Card className="animated-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <Button
                  variant="outline-light"
                  onClick={() => navigate('/dashboard')}
                  className="back-btn me-3"
                >
                  <FaArrowLeft /> Back
                </Button>
                <h2 className="mb-0 text-primary">Order Details - #{order.id}</h2>
              </div>

              {/* Order Details */}
              <Row className="mb-4">
                <Col md={6}>
                  <p><strong>Customer Name:</strong> {order.customerName}</p>
                  <p><strong>Order Items:</strong> {order.orderItems}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Amount:</strong> ${order.amount.toLocaleString()}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                </Col>
              </Row>

              {/* Status Update */}
              <Form>
                <Form.Group controlId="formStatus" className="mb-3">
                  <Form.Label className="text-white"><strong>Status</strong></Form.Label>
                  <Form.Select
                    value={status}
                    onChange={handleStatusChange}
                    className="status-select"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Rejected">Rejected</option>
                  </Form.Select>
                </Form.Group>

                {/* Notes Section */}
                <Form.Group controlId="formNotes" className="mb-3">
                  <Form.Label className="text-white"><strong>Notes</strong> <FaStickyNote className="ms-1" /></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add notes about this order..."
                    className="notes-input"
                  />
                </Form.Group>

                <Button
                  variant="success"
                  onClick={handleSave}
                  className="w-100 save-btn"
                >
                  <FaSave className="me-2" /> Save Changes
                </Button>
              </Form>

              {/* Status History Timeline */}
              <div className="mt-4">
                <h5 className="text-white"><FaHistory className="me-2" /> Status History</h5>
                <div className="timeline">
                  {statusHistory.map((entry, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <p className="mb-0">
                          <strong>{entry.status}</strong> by {entry.user}
                        </p>
                        <small>{new Date(entry.timestamp).toLocaleString()}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Confirm Status Update</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          Are you sure you want to update the status of Order #{order.id} to <strong>{status}</strong>?
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={confirmSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderDetails;