import React, { useContext, useEffect, useState } from 'react'
import "../Styles/SearchBar.css"
import { ContextTransfer } from '../App'
import Data from '../Data/Data'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from "@mui/icons-material"
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function SearchBar() {

    const [search, setSeach] = useState("")


    const { dish, setDish, setMeal, setListData } = useContext(ContextTransfer)

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

{ (t1.length!==0||t2.length!==0||t3.length!==0)?<div className='btn' onClick={()=>{navigate("/confirm")}}>confirm your order</div> : ""    }
      


        </div>
    )
}

export default SearchBar
