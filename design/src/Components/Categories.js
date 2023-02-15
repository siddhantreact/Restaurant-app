import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Categories.css"
import { useContext } from 'react'
import { ContextTransfer } from '../App'


import Data from '../Data/Data'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { selectedTable } from '../Redux/Reducer'
import { useDispatch } from 'react-redux'

function Categories() {

  const dispatch = useDispatch()

  const [values, setValues] = useState()

  const { listData, setListData, dish, setDish, tables } = useContext(ContextTransfer)

  const navigate = useNavigate()

  // const input = useRef()





  useEffect(() => {

    const CategoryList = Data.map((e) => {

      return e.category


    })

    const set = new Set(CategoryList)
    const list = Array.from(set)

    console.log(list)

    setValues(list)

  }, [])



  return (
    <div className='category_container'>




      {/* categories */}

      {
        values?.map((category) => {

          return (

            <div>
              <div className='btn' onClick={() => {

                console.log(category) //getting the current category





                const listOnCards = Data.filter((e) => {

                  return e.category == category

                })

                setListData(listOnCards)







              }}   >{category}</div>
            </div>
          )
        })
      }


      <div>

        <div className='btn' onClick={() => {


          setListData(Data)



        }} >All</div>

      </div>



      {/* <div className='btn' onClick={
        () => {

          navigate("/places")

        }
      }>

        Open Restaurants

      </div> */}




      <div className='btn' onClick={() => {


        const res = Data.map((e) => e).sort((a, b) => {

          return (

            ((a.price < b.price) ? 1 : -1)

          )

        })

        setListData(res)

      }}>

        high to low

      </div>




      <div className='btn' onClick={() => {


        const res = Data.map((e) => e).sort((a, b) => {

          return (

            ((a.price < b.price) ? -1 : 1)

          )

        })

        setListData(res)

      }}>

        low to high

      </div>


      <div className='btn' onClick={() => {

        const res = Data.map((e) => e).sort((a, b) => {

          return (

            (a.title.charCodeAt(0) < b.title.charCodeAt(0) ? 1 : -1)

          )

        })

        setListData(res)




      }}>

        Z-A

      </div>





      <div className='btn' onClick={() => {

        const res = Data.map((e) => e).sort((a, b) => {

          return (

            (a.title.charCodeAt(0) < b.title.charCodeAt(0) ? -1 : 1)

          )

        })

        setListData(res)




      }}>

        A-Z

      </div>


    

    




    </div>
  )
}

export default Categories
