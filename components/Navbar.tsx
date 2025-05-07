import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#1f1f1f',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.5rem' }}>
        Industria Lux
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/produkte" style={{ color: '#ccc' }}>Produkte</Link>
        <Link href="/abo" style={{ color: '#ccc' }}>Abo-Modell</Link>
        <Link href="/kontakt" style={{ color: '#ccc' }}>Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
