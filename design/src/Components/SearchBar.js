import React, { useContext, useEffect, useState } from 'react'
import "../Styles/SearchBar.css"
import { ContextTransfer } from '../App'
import Data from '../Data/Data'

import { Search } from "@mui/icons-material"
import { IconButton } from '@mui/material'

function SearchBar() {

    const [search, setSeach] = useState("")


    const { dish, setDish, setMeal, setListData } = useContext(ContextTransfer)




    // function handleData() {




    //     const selectedDish = Data.filter((e) => {

    //         return e.title == search

    //     })



    //     setListData(

    //         selectedDish.map((e) => {

    //             return e


    //         })

    //     )


    // }




    useEffect(() => {
        
     const data =  Data.filter((elem) => {

            return elem.title.toLowerCase().includes(search.toLowerCase())

        })

      setListData(data)



    },[search])




    { console.log(search) }



    return (
        <div className='searchBar_container   '>


            {/* <button onClick={handleData}>Search</button> */}

            {/* 
            <IconButton onClick={handleData}>
                <Search />
            </IconButton> */}

            <input className='searchBar' type={"text"} placeholder="enter your dish" onChange={

                (e) => {



                    setSeach(e.target.value)






                }





            } />




        </div>
    )
}

export default SearchBar
