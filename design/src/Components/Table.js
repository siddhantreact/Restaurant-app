import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTable } from '../Redux/Reducer'
import "../Styles/Table.css"

function Table() {
  
  const dispatch = useDispatch()

 

  let t1Order = useSelector((state) => {


    return state.tables.t1
  })

 let t2Order = useSelector((state) => {


    return state.tables.t2
  })


  let t3Order = useSelector((state) => {


    return state.tables.t3 
  })


  


  


  return (

    <div className='table_container'>




      <div className='t1_container'>
        t1 table order
        {


          t1Order.map((e) => {

            return (

              <>
                <h3>title: {e.title}</h3>
                <h3>price: {e.price}</h3>
                <h3>quantity:{e.quantity}</h3>
              </>
            )

          })

        }

      </div>


      <div className='t2_container'>
        t2 table order
        {


          t2Order.map((e) => {

            return (

              <>
                <h3>title: {e.title}</h3>
                <h3>price: {e.price}</h3>
                <h3>quantity:{e.quantity}</h3>
              </>
            )

          })

        }

      </div>


      <div className='t3_container'>
        t3 table order
        {


          t3Order.map((e) => {

            return (

              <>
                <h3>title: {e.title}</h3>
                <h3>price: {e.price}</h3>
                <h3>quantity:{e.quantity}</h3>
              </>
            )

          })

        }

      </div>



/////!!!!!clearTable


      <button onClick={() => {

           dispatch(clearTable())

          

      }}>clear table</button>


    </div>
  )
}

export default Table
