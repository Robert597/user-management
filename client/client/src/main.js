import React from 'react';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './dataContext/dataContext';

const Main = () => {
  const {datas, handleDelete} = useContext(DataContext);
  return (
    <main id="site-main">
        <div class="container">
            <div class="box-nav d-flex justify-between">
                <Link to="/adduser" class="border-shadow user">
                    <span class="text-gradient">
                      New User  <i class="fa-solid fa-user"></i>
                    </span>
                </Link>
            </div>
            <form action="/" method="post" >
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>@Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
{datas.map( (data, i) => {
    return (
                <tr key={i}>
                    <td>{i}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.status}</td>
                    <td>
                        <Link to = {`/update/${data._id}`} class="btn border-shadow update">
                            <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                        </Link>
                        <a href='#' class="btn border-shadow delete" onClick={() => handleDelete(data._id)}>
                            <span class="text-gradient"><i class="fas fa-times"></i></span>
                        </a>
                    </td>
                </tr>

    )
})}
    </tbody>
        </table>
    </form>
       
        </div>
    </main>
  )
}

export default Main