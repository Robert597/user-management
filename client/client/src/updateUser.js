import React, {useState, useContext, useEffect} from 'react';
import DataContext from './dataContext/dataContext';
import { useParams, Link } from 'react-router-dom';
import Axios from "axios";

const Update = () => {
    const id = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const[status, setStatus] = useState("")
    const{datas} =useContext(DataContext);
  useEffect(() => {
    const handleIt = async () => {
        const data = await datas.filter(data => data._id === id.id);
        setEmail(data[0].email);
        setName(data[0].name);
        setStatus(data[0].status);
        setGender(data[0].gender);
    const genderInput = document.querySelectorAll('input[name="gender"]');
    const statusInput = document.querySelectorAll('input[name="status"]');
    statusInput.forEach((radio) => {
        if(radio.value === data[0].status){
       radio.checked = true;
        }
    });
    genderInput.forEach((radio) => {
        if(radio.value === data[0].gender){
       radio.checked = true;
        }
    });
    }
  handleIt();
  
  }, [datas, id.id]);
   const handleSubmit = async (e) => {
       e.preventDefault();
     

       try{
    const response = await Axios.put(`http://localhost:3500/api/Users/${id.id}`, { name, email, gender, status });
    window.location.replace("http://localhost:3000");
    return response;
       }catch(err){
           console.log(err.message);
       }
   }
  
   
  return (
    <main id="site-main">
        <div class="container">
            <div class="box-nav d-flex justify-between">
              <div class="filter">
                  <Link to="/"><i class="fas fa-angle-double-left"></i>All users</Link>
              </div>
            </div>
                <div class="form-title text-center">
                    <h2 class="text-dark" style={{"display": "block"}}>New User</h2>
                    <span class="text-light">
                        Use the below form to create a new account
                    </span>
                </div>
        <form id="updateUser" method="POST" onSubmit={(e) => handleSubmit(e)}>
           <div class="new_user">
               <div class="form-group">
                   <label htmlFor="name" class="text-light">Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Robert Seun"/>
                </div>
               <div class="form-group">
                   <label htmlFor="Email" class="text-light">Email</label>
                    <input type="text"  name="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="example@gmail.com"/>
                </div>
               <div class="form-group forRadio">
                   <label htmlFor="gender" class="radio-label">Gender</label>
                   <div class="radio inline">
                 <input type="radio" name="gender" id="radio-1" value="Male" onChange={ (e) => e.target.checked ? setGender("Male") : ""}/>
                 <label htmlFor="radio-1" class="radio-label">Male</label>
                   </div>
                   <div class="radio inline">
                 <input type="radio" name="gender" id="radio-2" value="Female" onChange={ (e) => e.target.checked ? setGender("Female") : ""}/>
                 <label htmlFor="radio-2" class="radio-label">Female</label>
                </div>
             </div>

             <div class="form-group">
                <label htmlFor="gender" class="radio-label">Status</label>
                <div class="radio inline">
              <input type="radio" id="radio-3" name="status" value="Active" onChange={(e) => e.target.checked ? setStatus("Active") : ""}/>
              <label htmlFor="radio-3" class="radio-label">Active</label>
                </div>
                <div class="radio inline">
              <input type="radio" id="radio-4" name="status" value="Inactive" onChange={(e)  =>  e.target.checked ? setStatus("Inactive") : ""}/>
              <label htmlFor="radio-4" class="radio-label">Inactive</label>
             </div>
        </div>

        <div class="form-group">
            <button type="submit" class="btn text-dark update">Save</button>
        </div>
           </div>
        </form>
        </div>
    </main>
  )
}

export default Update