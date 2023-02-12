import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextTransfer } from '../App'
import "../Styles/Cart.css"
import { Delete } from "@mui/icons-material"
import { IconButton } from '@mui/material'




function Cart() {

  const { cart, setCart } = useContext(ContextTransfer)

  const navigate = useNavigate()



  useEffect(() => {

    const cartList = cart.map((e) => {

      return e


    })

    const set = new Set(cartList)
    const list = Array.from(set)



    setCart(list)


    // console.log(process.env.REACT_APP_GOOGLE_API_KEY)



  }, [])





  return (
    <div className='cart_container  '>


      <div className='summary_container '>

        <h2>Order Summary</h2>

        {

          cart.map(({ id, title, category, price, img, desc }) => {

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

                {/* <button onClick={() => {

                  const list = cart.filter((e) => {

                    return e.id !== id

                  })

                  setCart(list)



                }}>delete</button> */}


                <IconButton onClick={() => {

                  const list = cart.filter((e) => {

                    return e.id !== id

                  })

                  setCart(list)
                }}>

                  <Delete />

                </IconButton>

              </div>

            )

          })

        }


      </div>

      <div className='total_container'>

        <button onClick={() => {

          navigate("/address")


        }}>Proceed</button>

      </div>







    </div>
  )
}

export default Cart
