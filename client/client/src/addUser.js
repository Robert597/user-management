import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
        <form id="add_user" method="POST" action='http://localhost:3500/api/Users'>
           <div class="new_user">
               <div class="form-group">
                   <label for="name" class="text-light">Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Robert Seun"/>
                </div>
               <div class="form-group">
                   <label for="Email" class="text-light">Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="example@gmail.com"/>
                </div>
               <div class="form-group forRadio">
                   <label for="gender" class="radio-label">Gender</label>
                   <div class="radio inline">
                 <input type="radio" name="gender" id="radio-1" value="Male"/>
                 <label for="radio-1" class="radio-label">Male</label>
                   </div>
                   <div class="radio inline">
                 <input type="radio" name="gender" id="radio-2" value="Female"/>
                 <label for="radio-2" class="radio-label">Female</label>
                </div>
             </div>

             <div class="form-group">
                <label for="gender" class="radio-label">Status</label>
                <div class="radio inline">
              <input type="radio" id="radio-3" name="status" value="Active"/>
              <label for="radio-3" class="radio-label">Active</label>
                </div>
                <div class="radio inline">
              <input type="radio" id="radio-4" name="status" value="Inactive"/>
              <label for="radio-4" class="radio-label">Inactive</label>
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

export default AddUser