import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({...prev,[e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:4000/employees/add-emp", formData);
    console.log("✅ Response from server:", res.data);
    alert("Employee added successfully");
    setFormData({
      name: '',
      email:'',
      phone:'',
      city:''
    });

  } catch (err) {
    console.error("❌ Axios error:", err.response?.data || err.message);
    alert("Error adding employee");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br /><br />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br /><br />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /><br /><br />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;

