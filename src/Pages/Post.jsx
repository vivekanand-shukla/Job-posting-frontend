import React from 'react'
import Navbar from '../Components/Navbar'
import { Url } from '../customHooks/useMainUrl'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Post = () => {





  const [formData, setFormData] = useState({
    jobTitle: null,
    companyName: null,
    location: null,
    salary: null,
    jobType: null,
    jobDescription: null,
    qualifications: null
  });
  const { URL } = Url()


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

      const updatedData = {
    ...formData,
    qualifications: formData.qualifications
      ? formData.qualifications.split(",").map(item => item.trim())
      : []  
  };
    try {
      const response = await fetch(`${URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Job added successfully!");
        setFormData({
          jobTitle: "",
          companyName: "",
          location: "",
          salary: "",
          jobType: "",
          jobDescription: "",
          qualifications: ""
        });
      } else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      toast.error("Something went wrong");

    }
  }
  return (
    <div>


      <Navbar />

      <div>


        <div className="container mt-4">
          <h2 className="mb-4">Post a Job</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Job Title:</label>
              <input
                type="text"
                className="form-control"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                placeholder='Enter job title...'
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Name:</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                 placeholder='Enter company name...'
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location:</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
                 placeholder='Enter location...'
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary:</label>
              <input
                type="number"
                className="form-control"
                name="salary"
                value={formData.salary}
                 placeholder='Enter salary...'
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Job Type:</label>
              <select
                className="form-select"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                placeholder='Select job type...'
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time (On-site)">Full-time (On-site)</option>
                <option value="Part-time (On-site)">Part-time (On-site)</option>
                <option value="Full-time (Remote)">Full-time (Remote)</option>
                <option value="Part-time (Remote)">Part-time (Remote)</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Job Description:</label>
              <textarea
              placeholder='Enter job discription...'
                className="form-control"
                name="jobDescription"
                rows="3"
                value={formData.jobDescription}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Job Qualifications:</label>
              <textarea
              placeholder='Enter different  job qualification with separated by commas like "," '
                required
                className="form-control"
                name="qualifications"
                rows="3"
                value={formData.qualifications}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type='submit'  className="btn btn-primary mb-5">Post Job</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post