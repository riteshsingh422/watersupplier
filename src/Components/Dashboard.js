// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file here

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const mockOrders = response.data.map((item) => ({
          id: item.id,
          customerName: `Customer ${item.id}`,
          orderDetails: `Order ${item.id} Details`,
          status: ['Pending', 'In Progress', 'Delivered'][Math.floor(Math.random() * 3)],
          date: new Date().toISOString().split('T')[0],
        }));
        setOrders(mockOrders);
      } catch (err) {
        setError('Failed to fetch orders');
      }
    };
    fetchOrders();
  }, []);

  const handleOrderClick = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="mb-4 dashboard-title">Order Management</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="dashboard-content">
          <Table striped bordered hover responsive className="dashboard-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Order Details</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.orderDetails}</td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                  <td>
                    <Button variant="info" onClick={() => handleOrderClick(order.id)}>
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
