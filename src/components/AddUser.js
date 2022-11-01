import axios from "axios";
import React, { useState , useEffect} from "react";
// import {MDBBtnGroup , MDBBtn} from "mdb-react-ui-kit";


function AddUser() {


      // to get the data from db.json file to user dashboard
      const [data, setData ] = useState([{}]);
      const getUser = async (e) => {
      let response = await axios.get("http://localhost:4000/posts").then((res) => setData(res.data));                 
      };
  
      // it is a function used to set the form colums value back to default
      useEffect( () => {
          getUser();
          console.log(data);
      },[]);
  
      // this function is to delete the data from the dashboard
      const handleDelete = async(id)=>{
          await axios.delete("http://localhost:4000/posts/" + id).then((res)=> alert("deleted successfully") )
          getUser();
      };


                                       // the above functions are from UserDashboard 

  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    bookedition: "",
    bookissuedon: "",
    returndate: ""

  });


  const [updateData, setUpdateData] = useState({
    fullname: "",
    mobilenumber: "",                              // state for modal 
    bookedition: "",
    bookissuedon: "",
    returndate: "",
    id:""

  });

  const handleUpdate = async ()=>{
     await axios.put(`http://localhost:4000/posts/${updateData.id}`, updateData).then((res)=>{alert("Data updated successfully");
    getUser();
  });
  }

  // to post the data from form to db.json file using axios
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
    getUser();
  };


  // const [value, setValue ] = useState("");

  // // const loadUserData = async()=>{
  // //   return await axios.get("http://localhost:4000/posts").then((res)=>setData(res.data)).catch((err)=>console.log(err))
  // // }

  // const handleReset = () =>{
  //   getUser();
  // };


  // const handleSearch = async(e) =>{
  //   e.preventDefault();
  //   return await axios.get(`http://localhost:4000/posts?q${value}`).then((response) => {
  //     setData(response.data);
  //     setValue("");
  //   })
  //   // setData();

  // };

  

return (
  <>
  {/* <div>
    <form style={{
      margin:"auto",
      padding:"10px",
      maxWidth:"400px",
      alignContent:"center",
    }}

    className="d-flex input-group w-auto"
    onSubmit={handleSearch}
    >

    <input 
      type="text"
      className="form-control"
      placeholder="Search Name ..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />

    
      <MDBBtn type = "submit" color="dark" >
        Search
      </MDBBtn>

      <MDBBtn className="mx-2" color = "info" onClick={()=> handleReset()}>
        Reset
      </MDBBtn>
    



    </form>
  </div> */}
  
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
          </div>{" "}

        {/*the below code is taken from UserDashboard*/ }

          <div className='container'>
    <h1>User Dashboard</h1>
        <table class="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Full name</th>
      <th scope="col">Mobile number</th>          {/*head coloumns of UserDashboard*/} 
      <th scope="col">Book edition</th>
      <th scope="col">Book issued on</th>
      <th scope="col">Return date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data && data.map((user) =>(
        <tr>
      <th scope="row">{user.id}</th>
      <td>{user.fullname}</td>
      <td>{user.mobilenumber}</td>               {/* we have mapped the data with the coloumns using map */}
      <td>{user.bookedition}</td>
      <td>{user.bookissuedon}</td>
      <td>{user.returndate}</td>
      <td style = {
            {
                display:"flex",
                justifyContent:"space-between"     /* here we have given an action coloumn with edit and delete buttons*/ 
            }
        } >

        <button className = "btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"
        onClick={()=>
        setUpdateData(
          {
            fullname:user.fullname,
            mobilenumber:user.mobilenumber,
            bookedition:user.bookedition,
            bookissuedon:user.bookissuedon,
            returndate:user.returndate,
            id:user.id,
          }
        )
    
        }
        >
            Edit
        </button>

        <button className="btn btn-danger" 
        onClick={()=> handleDelete(user.id)}>
            Delete
        </button>
        
      </td>
        </tr>


    ))}
      
    
  </tbody>
</table>
    </div>


        </div>



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update information</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">FullName</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={updateData.fullname}
              onChange={(e) => setUpdateData({ ...updateData, fullname: e.target.value })}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Mobile Number</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={updateData.mobilenumber}
              onChange={(e) => setUpdateData({ ...updateData, mobilenumber: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Book edition</label>
            <input type="text"
              className="form-control"
              id="exampleformControlInput1"
              value={updateData.bookedition}
              onChange={(e) => setUpdateData({ ...updateData, bookedition: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Book issued on</label>
            <input type="date"
              className="form-control"
              id="exampleformControlInput1"
              value={updateData.bookissuedon}
              onChange={(e) => setUpdateData({ ...updateData, bookissuedon: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleformControlInput1" className="form-label">Return date</label>
            <input type="date"
              className="form-control"
              id="exampleformControlInput1"
              value={updateData.returndate}
              onChange={(e) => setUpdateData({ ...updateData, returndate: e.target.value })} />
          </div>


    
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={() => handleUpdate()}>Update</button>
      </div>
    </div>
  </div>
</div>




      </div>
</>
  
  )
}

export default AddUser