import React from 'react';

function Contact() {
  return (
    <div>
      <h3>📞 ติดต่อเรา</h3>
      <p className="mt-3">
        <strong>ร้านเจ๊นิด มะม่วงสด</strong><br />
        123 ถนนมะม่วงหวาน แขวงข้าวเหนียว เขตกะทิ กรุงเทพฯ 10200
      </p>
      <p>
        โทร: <a href="tel:0812345678">081-234-5678</a><br />
        Facebook: <a href="https://facebook.com/janidmango" target="_blank" rel="noreferrer">facebook.com/janidmango</a><br />
        Line: @janidmango
      </p>

      <div className="mt-4">
        <h5>🗺️ แผนที่ร้าน</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            allowFullScreen
            loading="lazy"
            title="แผนที่ร้านเจ๊นิด"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
