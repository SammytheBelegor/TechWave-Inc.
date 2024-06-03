import React, { useState } from 'react';
import './OrderForm.css';
import image1 from '../img/image1.jpg';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(`Pre-ordered ${quantity} TechWave XR(s) successfully!`);
      setName('');
      setEmail('');
      setQuantity(1);
      setErrors({});
    }
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <div className="order-image-container">
          <img src={image1} alt="TechWave XR" />
        </div>
        <div className="order-details">
          <h2>Pre-Order TechWave XR</h2>
          <p>Experience the next level of virtual reality with TechWave XR. Our headset offers:</p>
          <ul>
            <li>Immersive 360° view</li>
            <li>High-resolution display</li>
            <li>Advanced motion tracking</li>
            <li>Ergonomic design</li>
            <li>Wireless connectivity</li>
          </ul>
          <p><strong>Price: $399.99</strong></p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
