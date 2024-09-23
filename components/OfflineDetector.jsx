import React, { useState, useEffect } from 'react';
import { FaWifi } from 'react-icons/fa'; // Import a Wi-Fi icon for a visual cue

const OfflineDetector = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOnline(false);
    const handleOnline = () => setIsOnline(true);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return null; // Don't show anything if the user is online
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <FaWifi style={styles.icon} />
        <h1 style={styles.heading}>You are offline</h1>
        <p style={styles.message}>
          It seems like you’ve lost your connection. Please check your internet connection and try again.
        </p>
        <button style={styles.button} onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    </div>
  );
};

// Styles for the offline notification component
const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    textAlign: 'center',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '50px',
    color: '#ff5e5e',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default OfflineDetector;
