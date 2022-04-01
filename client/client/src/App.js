import Header from "./header";
import Main from "./main";
import {Routes, Route} from "react-router-dom";
import AddUser from "./addUser";
import Update from "./updateUser";

function App() {
 
  return (
    <div className="App">
       <Header/>
      <Routes>
      <Route exact path='/' element={< Main />}></Route>
<Route path='/adduser' element={< AddUser />}></Route>
<Route  path='/update/:id' element={< Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
//onSubmit= {(e) => createUser(e)}