import React, { useContext, useRef } from 'react'
import "../Styles/Main.css"
import { ContextTransfer } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTable } from '../Redux/Reducer'
import { useNavigate } from 'react-router-dom'



function Main() {

  const { tables } = useContext(ContextTransfer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const input = useRef()

  //ref!!!




  const t1 = useSelector((state) => {

    return state.tables.t1

  })

  const t2 = useSelector((state) => {

    return state.tables.t2

  })

  const t3 = useSelector((state) => {

    return state.tables.t3

  })


  const user = useSelector((state)=>{

     return state.tables.user
  })



  return (
    <div className='main_container'>
       
    {(user)? <h3>Hello , {user}</h3> : ""}


      

      <h2>please select your table before moving to menu</h2>



      
  

      {/* ==============================================> */}


  {/* !!disabling occupied tables */}
   



      <button className='btn_1 btn' onClick={() => {

        const btn = document.querySelector(".btn_1")


        dispatch(selectedTable(btn.innerHTML))

      }}>

        t1

      </button>


      <button className='btn_2 btn' onClick={() => {

        const btn = document.querySelector(".btn_2")
        dispatch(selectedTable(btn.innerHTML))

      }}>
        t2
      </button>


      <button className='btn_3 btn' onClick={() => {

        const btn = document.querySelector(".btn_3")
        dispatch(selectedTable(btn.innerHTML))

      }}>
        t3
      </button>




      {/* ==============================================> */}





      <div className='btn' onClick={() => {

        navigate("/home")
      }}>

        Menu

      </div>



      {(t1.length !== 0 || t2.length !== 0 || t3.length !== 0) ? <div className='btn' onClick={() => { navigate("/records") }}>Orders On Table</div> : ""}



    </div>
  )
}

export default Main
