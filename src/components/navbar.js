import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning px-4 rounded mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-dark" to="/">🥭 เจ๊นิด มะม่วงสด</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">หน้าแรก</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/menu">เมนู</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blog">บทความ</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">ติดต่อ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
