import React, { useContext } from 'react'
import "../Styles/Cards.css"
import { ContextTransfer } from '../App'
import Data from '../Data/Data'
import { Add ,AddBox } from "@mui/icons-material"
import { fontSize } from '@mui/system'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ordersOnTable } from '../Redux/Reducer'



function Cards() {

    const { listData, setListData, cart, setCart } = useContext(ContextTransfer)

    // { console.log(cart) }


    const dispatch = useDispatch()



    return (

        <div className='container  grid  grid_three_container '>






            {

                listData?.map((e) => {

                    return (
                        <div className='card_container ' key={e.id}>

                            <img className='card_image' src={e.img} alt='card_image' />


                            {/* <p>{category}</p> */}

                            <p>


                                <strong>{e.title}</strong>

                            </p>

                            <p className='description'>{e.desc}</p>

                            <p>

                                <strong>Rs : <small>{e.price}</small></strong>

                            </p>


                        


                                <IconButton onClick={() => {
                                    setCart([...cart, e])
                      
                                    dispatch(ordersOnTable(e))
                                     

                                }}>

                                    <AddBox />

                                </IconButton>

                          

                        </div>
                    )


                })



            }






        </div>

    )
}

export default Cards
