import React, { useEffect, useState } from 'react';
import ClientDashboard from './ClientDashboard';
import AdminDashboard from './AdminDashboard';

function AnalyticDashboard() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem('user_type');
    setRole(userRole);
  }, []);

  if (role === 'admin') {
    return <AdminDashboard />;
  }
  return <ClientDashboard />;
}

export default AnalyticDashboard;
