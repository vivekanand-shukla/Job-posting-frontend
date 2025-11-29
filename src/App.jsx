
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Url} from './customHooks/useMainUrl'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const {URL}  = Url()

    useEffect(() => {
    fetchJobs();
   
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${URL}/jobs`);
      const data = await response.json();
      setJobs(data);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };


   const handleDelete = async (jobId) => {
    try {
     const response =   await fetch(`${URL}/jobs/${jobId}`, {
        method: 'DELETE'
      });
      fetchJobs();
       const data = await response.json();
      if(response.ok){
        toast.success("Job deleted successfully!");

      }
      if(!response.ok){
        toast.error("Something went wrong!");

      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  const filteredJobs = jobs? jobs.filter(job =>
   job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  ):[];

  
//  console.log(URL)
  return (
    <>
      <Navbar />
       <div>
      


          



 <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-6 searchbar">
            <input
              type="text"
              className="form-control"
              placeholder="Search by job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
 
       
<h2 className="mb-4">All Jobs</h2>

        <div className="row g-3">
          { filteredJobs?.length >0 && filteredJobs.map((job) => (
            <div key={job._id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{job.jobTitle}</h5>
                  <p className="card-text mb-1">
                    <strong>Company name:</strong> {job.companyName}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Job Type:</strong> {job.jobType}
                  </p>
                  <div className="btnsdisplay " >
                    <Link className="btn btn-primary flex-grow-1" to={`/details/${job._id}`}>
                      See Details
                    </Link>
                    <button 
                      className="btn btn-danger flex-grow-1"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}


          {filteredJobs.length === 0 && <div> no job yet ...</div>}
        </div> 
 </div> 


 
       </div>
    </>
  )
}

export default App
