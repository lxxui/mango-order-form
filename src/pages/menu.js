import React, { useState } from 'react';

const products = [
  { id: 1, name: 'ข้าวเหนียวมะม่วง กล่องเล็ก', price: 50, image: '/images/tree-mango.jpg' },
  { id: 2, name: 'ข้าวเหนียวมะม่วง กล่องกลาง', price: 80, image: '/images/rice-mango.jpg' },
  { id: 3, name: 'ข้าวเหนียวมะม่วง กล่องใหญ่', price: 120, image: '/images/green-mango.jpg' },
];

function Menu() {
  const [orders, setOrders] = useState([]);

  const addOrder = (product) => {
    const exists = orders.find((o) => o.id === product.id);
    if (exists) {
      setOrders(orders.map((o) => o.id === product.id ? { ...o, qty: o.qty + 1 } : o));
    } else {
      setOrders([...orders, { ...product, qty: 1 }]);
    }
  };

  const total = orders.reduce((sum, o) => sum + o.price * o.qty, 0);

  return (
    <div>
      <h4>🍚 เมนูสินค้าของเรา</h4>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={p.image}
                alt={p.name}
                className="card-img-top"
                style={{
                  maxHeight: '200px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '2px solid #eee',
                  padding: '0.5rem',
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text fw-semibold">{p.price} บาท</p>
                <button className="btn btn-primary" onClick={() => addOrder(p)}>
                  เพิ่มใส่ตะกร้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ตะกร้า */}
      <div className="mt-5">
        <h4>🧺 ตะกร้าสินค้า</h4>
        {orders.length === 0 ? (
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        ) : (
          <ul className="list-group mb-3">
            {orders.map((o) => (
              <li key={o.id} className="list-group-item d-flex justify-content-between">
                <span>{o.name} x {o.qty}</span>
                <span>{o.price * o.qty} บาท</span>
              </li>
            ))}
          </ul>
        )}
        <h5 className="fw-bold">รวมทั้งหมด: {total} บาท</h5>
      </div>
    </div>
  );
}

export default Menu;
