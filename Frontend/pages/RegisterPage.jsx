import React, { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Ensure you import toast if you're using it

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    date: '',
    ambulanceNo: '',
    email: '',
    phone: '',
    emrPhone: '',
    certificate: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData({ ...formData, [id]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/v1/auth/', formData);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/sign-in');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  return (
    <Layout>
      <div className="text-center m-0 p-0">
        <div className="row w-100">
          <div className="col-4 logoSection">col-4</div>
          <div className="col-8 wholeForm">
            <form className="m-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6 form1">
                  <div className="mb-3">
                    <input type="text" className="form-control" id="hospitalName" placeholder="Enter Hospital Name" value={formData.hospitalName} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="address" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="city" placeholder="Enter Your City" value={formData.city} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="state" placeholder="Enter Your State" value={formData.state} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control" id="pincode" placeholder="Enter Your Pincode" value={formData.pincode} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="p-2">Enter Registration Date</label>
                    <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control" id="ambulanceNo" placeholder="Enter Ambulance Number" value={formData.ambulanceNo} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-6 form2">
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control" id="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="number" className="form-control" id="emrPhone" placeholder="Enter Emergency Ward Number" value={formData.emrPhone} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="p-2">Upload Your Registration Certificate</label>
                    <input type="file" className="form-control" id="certificate" onChange={handleFileChange} />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Create Password" value={formData.password} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;