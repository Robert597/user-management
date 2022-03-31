import {useState, useEffect} from "react";
import Header from "./header";
import Main from "./main";
import {Routes, Route} from "react-router-dom";
import AddUser from "./addUser";
function App() {
 
  return (
    <div className="App">
       <Header/>
      <Routes>
      <Route exact path='/' element={< Main />}></Route>
<Route exact path='/adduser' element={< AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
//onSubmit= {(e) => createUser(e)}