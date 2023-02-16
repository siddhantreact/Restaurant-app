import React from 'react'
import Cards from './Components/Cards'
import SearchBar from './Components/SearchBar'
import SideBar from './Components/SideBar'
import "../src/Home.css"
import { useContext } from 'react'
import { ContextTransfer } from './App'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { ShoppingBasketSharp } from "@mui/icons-material"
import { IconButton } from '@mui/material'





function Home() {

    const { listData, setListData, cart, setCart } = useContext(ContextTransfer)

    const navigate = useNavigate()







    //cart!!!!

    return (
        <div className='home_container'>


            <div className='home_searchBar_container'>

                <SearchBar />




                <IconButton onClick={() => {
                    navigate("/cart")
                }}>
                    <ShoppingBasketSharp />
                    {/* <h5>{cart.length}</h5> */}
                </IconButton>







            </div>

            <div className='home_sidebar_card_container'>


                <SideBar />

                <Cards />

            </div>

        </div>
    )
}

export default Home
