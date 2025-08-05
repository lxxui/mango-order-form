// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // ไว้ใส่ CSS เพิ่มเติม
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  { id: 1, name: 'ข้าวเหนียวมะม่วง กล่องเล็ก', price: 50, image: '/images/mango-small.png' },
  { id: 2, name: 'ข้าวเหนียวมะม่วง กลาง', price: 80, image: '/images/mango-medium.png' },
  { id: 3, name: 'ข้าวเหนียวมะม่วง กล่องใหญ่', price: 120, image: '/images/mango-large.png' },
];


function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();  // เพิ่มบรรทัดนี้เพื่อรีเฟรช animation
  }, []);


  const addOrder = (product) => {
    setOrders((prev) => {
      const exist = prev.find((o) => o.id === product.id);
      if (exist) {
        return prev.map((o) =>
          o.id === product.id ? { ...o, qty: o.qty + 1 } : o
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, qty } : o))
    );
  };

  const total = orders.reduce((sum, o) => sum + o.price * o.qty, 0);

  return (

    <div className="container my-5">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#fff9e6' }}>
        <div className="container">
          <span className="navbar-brand" style={{ color: '#b565a7', fontWeight: 'bold' }}>
            🥭 เจ๊นิด มะม่วงสด
          </span>
        </div>
      </nav>
      <div className="alert alert-warning text-center">
        🎉 วันนี้สั่ง 3 กล่องขึ้นไป ส่งฟรีถึงหน้าบ้าน!
      </div>



      <div className="row mb-5">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: '16px',
                backgroundColor: '#fff9e6',
                padding: '1rem',
              }}
            >
              <div data-aos="zoom-in" className="card-body d-flex flex-column align-items-center">
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: '80px', marginBottom: '1rem' }}
                />
                <h5 className="card-title text-center" style={{ color: '#5e548e' }}>{p.name}</h5>
                <p className="card-text text-center">{p.price} บาท</p>
                <button
                  className="btn mt-auto"
                  style={{
                    backgroundColor: '#b565a7',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '0.5rem 1rem',
                  }}
                  onClick={() => addOrder(p)}
                >
                  เพิ่มใส่ตะกร้า
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      <h4 className="mb-3" style={{ color: '#5e548e' }}>🧺 ตะกร้าสินค้า</h4>
      {orders.length === 0 ? (
        <p>ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <ul className="list-group mb-4">
          {orders.map((o) => (
            <li
              key={o.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                {o.name} x{' '}
                <input
                  type="number"
                  value={o.qty}
                  min="1"
                  style={{ width: '60px' }}
                  onChange={(e) => updateQty(o.id, parseInt(e.target.value))}
                />
              </div>
              <div>
                {o.price * o.qty} บาท{' '}
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => removeOrder(o.id)}
                >
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h5 className="mb-3">รวมทั้งหมด: {total} บาท</h5>

      <button
        className="btn w-100"
        disabled={orders.length === 0}
        style={{
          backgroundColor: '#ffc107',
          color: '#000',
          borderRadius: '24px',
          boxShadow: '0 4px 8px rgba(255, 193, 7, 0.6)',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          transition: 'transform 0.2s',
        }}
        onClick={() => alert('ระบบส่งออเดอร์ยังไม่พัฒนาค่ะ')}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        🍚 ✅ สั่งซื้อเลย 🥭
      </button>


    </div>
  );
}

export default App;
