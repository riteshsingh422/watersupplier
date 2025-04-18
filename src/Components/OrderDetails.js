// src/components/OrderDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import Layout from './Layout';
import './OrderDetails.css';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const mockOrder = {
          id: response.data.id,
          customerName: `Customer ${response.data.id}`,
          orderDetails: `Order ${response.data.id} Details`,
          status: ['Pending', 'In Progress', 'Delivered'][Math.floor(Math.random() * 3)],
          date: new Date().toISOString().split('T')[0],
        };
        setOrder(mockOrder);
        setStatus(mockOrder.status);
      } catch (err) {
        setError('Failed to fetch order details');
      }
    };
    fetchOrder();
  }, [id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    alert(`Status for order ${id} updated to ${status}`);
    navigate('/dashboard');
  };

  if (!order) return <div className="order-loader">Loading...</div>;

  return (
    <Layout>
      <div className="order-details-container">
        <Card className="p-4 shadow animated-card">
          <h2 className="mb-4 text-center text-primary">Order Details - #{order.id}</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <div className="mb-3">
            <p><strong>Customer Name:</strong> {order.customerName}</p>
            <p><strong>Order Details:</strong> {order.orderDetails}</p>
            <p><strong>Date:</strong> {order.date}</p>
          </div>

          <Form>
            <Form.Group controlId="formStatus" className="mb-3">
              <Form.Label><strong>Status</strong></Form.Label>
              <Form.Select value={status} onChange={handleStatusChange}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Delivered</option>
              </Form.Select>
            </Form.Group>
            <Button variant="success" onClick={handleSave} className="w-100 mt-2">
              Save Changes
            </Button>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default OrderDetails;
