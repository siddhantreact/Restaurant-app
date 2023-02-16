import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextTransfer } from '../App'
import "../Styles/Cart.css"
import { Delete } from "@mui/icons-material"
import { IconButton } from '@mui/material'

import { Add, Minimize, MinimizeSharp } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { updateQuantity } from '../Redux/Reducer'


function Cart() {

  const { cart, setCart } = useContext(ContextTransfer)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  // useEffect(() => {

  //   const cartList = cart.map((e) => {

  //     return e


  //   })

  //   const set = new Set(cartList)
  //   const list = Array.from(set)



  //   setCart(list)


  //   // console.log(process.env.REACT_APP_GOOGLE_API_KEY)



  // }, [])

  const t1 = useSelector((state) => {

    return state.tables.t1

  })

  const t2 = useSelector((state) => {

    return state.tables.t2

  })

  const t3 = useSelector((state) => {

    return state.tables.t3

  })


       const selectedTable =  useSelector((state)=>{
          return state.tables.selectedTable
         })





  useEffect(() => {

    if(selectedTable[selectedTable.length-1]=="t1")
    {

      setCart(t1)
    }

    else if(selectedTable[selectedTable.length-1]=="t2")
    {
      setCart(t2)

    }

    else{

      setCart(t3)
    }


  }, [selectedTable,t1,t2,t3])



//!!! 3 tables



  return (
    <div className='cart_container  '>


      <div className='summary_container '>

        <h2>Order Summary</h2>

        {

          cart.map(({ id, title, category, price, img, desc,  quantity }) => {

            return (

              <div className='order_summary'>


                <img className='card_image' src={img} alt='card_image' />


                <p>

                  <strong>{title}</strong>

                </p>


                {/* <h6>{desc}</h6> */}

                <p>

                  <strong>Rs : <small>{price}</small></strong>

                </p>

           


                <IconButton onClick={() => {

                  const list = cart.filter((e) => {

                    return e.id !== id

                  })

                  setCart(list)
                }}>

                  <Delete />

                </IconButton>



                <div className='quantity_container'>

                  <IconButton   onClick={()=>{

                    dispatch(updateQuantity(title))

                  }}>
                    <Add />
                  </IconButton>

                  <input value={ quantity} />

                  <IconButton>
                    <MinimizeSharp />
                  </IconButton>

                </div>


              </div>

            )

          })

        }


      </div>

      <div className='total_container'>

        <button onClick={() => {

          navigate("/confirm")


        }}>confirm</button>

      </div>







    </div>
  )
}

export default Cart
