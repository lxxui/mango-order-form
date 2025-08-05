import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning rounded px-4 mb-4">
      <Link className="navbar-brand fw-bold text-dark" to="/">🥭 เจ๊นิด มะม่วงสด</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/">หน้าแรก</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-semibold" to="/menu">เมนู</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-semibold" href="#">บทความ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-semibold" href="#">ติดต่อ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
