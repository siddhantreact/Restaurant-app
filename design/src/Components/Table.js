import React from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Table.css"

function Table() {

  const t1Order = useSelector((state) => {


    return state.tables.t1
  })

  const t2Order = useSelector((state) => {


    return state.tables.t2
  })


  const t3Order = useSelector((state) => {


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
              </>
            )

          })

        }

      </div>


    </div>
  )
}

export default Table
