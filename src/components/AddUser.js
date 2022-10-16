import axios from "axios";
import React, { useState } from "react";


function AddUser() {

  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    bookedition: "",
    bookissuedon: "",
    returndate: ""

  });

  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:4000/posts", formData);
    if (response) {
      alert("data submitted successfully");
    }
    else {
      alert("something went wrong");
    }

    setFormData({
      fullname: "",
      mobilenumber: "",
      bookedition: "",
      bookissuedon: "",
      returndate: ""
    });
  };




  return (
    <div className="container">
      <div className="row">
        <div div className="col-md-7">
          <h1>Library Data</h1>
          </div>


          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">FullName</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Mobile Number</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={formData.mobilenumber}
              onChange={(e) => setFormData({ ...formData, mobilenumber: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Book edition</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={formData.bookedition}
              onChange={(e) => setFormData({ ...formData, bookedition: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Book issued on</label>
            <input type="date"
              className="form-control"
              id="exampleformControlInput1"
              value={formData.bookissuedon}
              onChange={(e) => setFormData({ ...formData, bookissuedon: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Return date</label>
            <input type="date"
              className="form-control"
              id="exampleformControlInput1"
              value={formData.returndate}
              onChange={(e) => setFormData({ ...formData, returndate: e.target.value })} />
          </div>

          <div className="mb3">
            <button className="btn btn-success" onClick={handleFormSubmit}>Add Data</button>
          </div>


        </div>

      </div>

    
  )
}

export default AddUser