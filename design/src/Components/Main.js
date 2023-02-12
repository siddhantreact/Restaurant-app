import React, { useContext } from 'react'
import "../Styles/Main.css"
import { ContextTransfer } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTable } from '../Redux/Reducer'
import { useNavigate } from 'react-router-dom'


function Main() {

    const {  tables } = useContext(ContextTransfer)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
     

  const t1 = useSelector((state)=>{
      
      return state.tables.t1

    })

    const t2 = useSelector((state)=>{
      
      return state.tables.t2

    })

    const t3 = useSelector((state)=>{
      
      return state.tables.t3

    })




  return (
    <div className='main_container'>
     
     <h2>please select your table before moving to menu</h2>
     

     {
        tables.map((e) => {

          return(
             
             <div className='btn' onClick={()=>{

                dispatch(selectedTable(e))

             }}>{e}</div>

          )

      })
      
      }

      <div className='btn' onClick={()=>{
          
             navigate("/home")
      }}>

      Menu

      </div>



      { (t1.length!==0||t2.length!==0||t3.length!==0)?<div className='btn' onClick={()=>{navigate("/records")}}>Orders On Table</div> : ""    }
      
       
      
    </div>
  )
}

export default Main
