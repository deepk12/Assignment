import React, { useState } from 'react';

const ControlledForm = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    password: ''
  });

  // Event handler to update form field values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // You can perform further actions here, such as sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <label>
        Last Name:
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <label>
        Age:
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <label>
        Gender:
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleInputChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
