import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic (e.g., sending data to the server)
    console.log('Registration data:', formData);
    // You can add your registration API call here
    // Example: axios.post('/api/register', formData)
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;

function MyComponent() {
  const [buttonText, setButtonText] = useState('Click me');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    // Change the button text and display a message when clicked
    setButtonText('Clicked!');
    setMessage('Button was clicked.');
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
      <p>{message}</p>
    </div>
  );
}
