import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingCart, FaLock, FaSignOutAlt, FaTruck, FaTimes } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);
  const [showTrackOrderPopup, setShowTrackOrderPopup] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Show the profile content after 3 seconds (animation duration)
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleChangePassword = () => {
    setShowChangePasswordPopup(true);
    setPasswordChanged(false); // Reset success message when opening popup
  };

  const handleTrackOrder = () => {
    setShowTrackOrderPopup(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setPasswordChanged(true);
    setOldPassword('');
    setNewPassword('');
  };

  const closeChangePasswordPopup = () => {
    setShowChangePasswordPopup(false);
    setPasswordChanged(false);
  };

  const closeTrackOrderPopup = () => {
    setShowTrackOrderPopup(false);
  };

  // Google Map configuration
  const mapContainerStyle = {
    width: '100%',
    height: '200px',
  };

  const center = {
    lat: 23.5374922,
    lng: 87.2916702,
  };

  return (
    <div className="page-content">
      {!showProfile ? (
        <div className="bouncing-bottle-container">
          <div className="bouncing-bottle">👤</div>
          <div className="bouncing-text">Profile</div>
        </div>
      ) : (
        <div className="profile-container zoom-out">
          <div className="profile-card">
            <div className="profile-header">
              <FaUserCircle className="profile-avatar" />
              <h1 className="profile-name">Alex Johnson</h1>
              <p className="profile-role">Premium Member</p>
            </div>
            <div className="profile-details">
              <div className="detail-card">
                <FaEnvelope className="detail-icon" />
                <div className="detail-content email-box">
                  <FaEnvelope className="email-icon" />
                  <p className="detail-label">Email</p>
                  <p className="detail-value text-center">alex.johnson@example.com</p>
                </div>
              </div>
              <div className="detail-card">
                <FaPhone className="detail-icon" />
                <div className="detail-content">
                  <p className="detail-label">Phone</p>
                  <p className="detail-value">+1-234-567-8901</p>
                </div>
              </div>
              <div className="detail-card">
                <FaMapMarkerAlt className="detail-icon" />
                <div className="detail-content">
                  <p className="detail-label">Address</p>
                  <p className="detail-value">123 Maple Street, Springfield, IL 62704</p>
                </div>
              </div>
              <div className="detail-card">
                <FaShoppingCart className="detail-icon" />
                <div className="detail-content">
                  <p className="detail-label">Total Orders</p>
                  <p className="detail-value">42</p>
                </div>
              </div>
              <div className="detail-card">
                <FaTruck className="detail-icon" />
                <div className="detail-content">
                  <p className="detail-label">Track Order</p>
                  <button className="track-button" onClick={handleTrackOrder}>Track Now</button>
                </div>
              </div>
              <div className="detail-card">
                <FaLock className="detail-icon" />
                <div className="detail-content">
                  <p className="detail-label">Change Password</p>
                  <button className="track-button" onClick={handleChangePassword}>Change Now</button>
                </div>
              </div>
            </div>
            <div className="profile-actions">
              <button className="action-button logout" onClick={handleLogout}>
                <FaSignOutAlt className="action-icon" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Popup */}
      {showChangePasswordPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <FaTimes className="popup-close" onClick={closeChangePasswordPopup} />
            <h2 className="popup-title">Change Password</h2>
            {!passwordChanged ? (
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <div className="form-group">
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            ) : (
              <div className="success-message">
                <p>Your password has been changed successfully</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Track Order Popup */}
      {showTrackOrderPopup && (
        <div className="popup-overlay">
          <div className="popup track-order-popup">
            <FaTimes className="popup-close" onClick={closeTrackOrderPopup} />
            <h2 className="popup-title">Track Your Order</h2>
            <LoadScript googleMapsApiKey="AIzaSyAVUWYtjjTcSppfK-ED0SPfEHrSg5E9pTA">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
            <div className="order-status">
              <p>Status: <span>In Transit</span></p>
              <p>Estimated Arrival: April 30, 2025</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;