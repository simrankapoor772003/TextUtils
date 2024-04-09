import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='grey';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
      <Alert alert={alert}/>
      <Routes>
            <Route path="/about" element={<div className='container'><About mode={mode} /></div>}>
            </Route>
            <Route path="/" element={<div className='container'><TextArea mode={mode}/></div>}>
            </Route>
      </Routes>

    </BrowserRouter>
  );
}
export default App;
