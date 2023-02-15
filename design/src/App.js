

import { createContext, useState } from 'react';
import './App.css';

import Home from './Home';

import {Route ,Routes} from "react-router-dom"
import Cart from './Components/Cart';
import Address from './Components/Address';
import Login from './Components/Login';
import Places from './Components/Places';
import Protected from './Components/Protected';

import Table from './Components/Table';
import Main from './Components/Main';
import Confirmation from './Components/Confirmation';



const ContextTransfer = createContext()

function App() {

  const [listData, setListData] = useState()


  const [cart ,setCart] = useState([])

 
  const tables = ["t1" ,"t2" ,"t3"]

 

  return (

    <ContextTransfer.Provider value={{ listData, setListData ,cart ,setCart ,tables}}>
    
      <div className="App ">


     <Routes>

      <Route  exact path='/' element={<Login/>}/>
  
      {/* <Route  exact path='/cart' element={<Cart/>}/> */}

      <Route  exact path='/address' element={<Address/>}/>

      <Route  exact path='/home' element={<Home/>}/>

      <Route  exact path='/places' element={<Places/>}/>

      <Route  exact path='/records' element={<Table/>}/>

      <Route  exact path='/main' element={<Main/>}/>
    
      <Route  exact path='/confirm' element={<Confirmation/>}/>
      
     </Routes>



        {/* <Route element={<Protected/>}>

        

        </Route> */}
      


      </div>



    </ContextTransfer.Provider>
  );
}

export default App;

export { ContextTransfer }