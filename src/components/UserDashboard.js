import React, { useEffect , useState} from 'react'
import axios from 'axios'

function UserDashboard() {

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


    return (
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

        <button className = "btn btn-info">
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
  )
}

export default UserDashboard