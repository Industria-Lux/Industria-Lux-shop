import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: '2rem' }}>{children}</main>
    </div>
  );
};

export default Layout;
