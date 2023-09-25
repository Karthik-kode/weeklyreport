import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects/Projects';
import Reports from './Components/Reports/Reports';
import Admin from './Components/Admin/Admin';
import ADmins from './Components/Admin/ADmins';
import Setadmin from './Components/Admin/Setadmin';
import Login from './Components/Authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/projects'element={<Projects />}/>
          <Route path='/reports' element={<Reports />}/> 
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </BrowserRouter>

      {/* <Projects /> */}
      {/* <Reports /> */}
      {/* <Admin /> */}
      {/* <ADmins /> */}

      {/* <Setadmin /> */}

    </div>
  );
}

export default App;
