import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './companents/layout/footer';
import Header from './companents/layout/header';
import Add from './companents/pages/add';
import Detail from './companents/pages/detail';
import Home from './companents/pages/home';

function App() {
  const [header, setHeader] = useState(false)
  return (
    <div className="App">
   
     <Header header={header} setHeader={setHeader}/>
     <Routes>
      <Route path='/' element={<Home header={header} setHeader={setHeader}/>}/>
      <Route path='/:_id' element={<Detail header={header} setHeader={setHeader}/>}/>
      <Route path='/add' element={<Add header={header} setHeader={setHeader}/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
