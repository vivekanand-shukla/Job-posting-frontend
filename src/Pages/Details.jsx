import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react';

import {useParams} from 'react-router-dom' 
import {Url} from '../customHooks/useMainUrl'

const Details = () => {
  const {URL}  = Url()
   const { jobId } = useParams()


      const [job, setJob] = useState(null);
       if(job){
        console.log(job)
       }

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      const response = await fetch(`${URL}/jobs/${jobId}`);
      const data = await response.json();
      setJob(data);
    } catch (error) {
      console.log(error);
    }
  };
    return (

        <div>

            <Navbar />
         <div className="container mt-4">
        <div className="container mt-4 ">
        {job ? ( <div>
            <h2 className="mb-4">{job.jobTitle}</h2>
          <div className='card p-3'>

            <div className="mb-3">
              <strong>Company Name:</strong> {job.companyName}
            </div>

            <div className="mb-3">
              <strong>Location:</strong> {job.location}
            </div>

            <div className="mb-3">
              <strong>Salary:</strong> {job.salary}
            </div>

            <div className="mb-3">
              <strong>Job Type:</strong> {job.jobType}
            </div>

            <div className="mb-3">
              <strong>Description:</strong> {job.jobDescription}
            </div>

            <div className="mb-3">
              <strong>Qualifications:</strong> 
              <ol>
              {job.qualifications.map(i =>
                    <li>{`${i}`}</li>
                )}
                </ol>
            </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
        
      </div>
        </div>
    )
}

export default Details