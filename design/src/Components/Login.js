import React from 'react'
import "../Styles/Login.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import { auth, provider } from "../Firebase/Firebase"
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { Autoplay } from "swiper"




function Login() {

  const navigate = useNavigate()


  function handlelogin() {

    signInWithPopup(auth, provider).then((response) => {

      console.log(response)

      navigate("/main")


    }).catch((error) => {
      console.log(error)
    })

  }


  





  return (

    <div className='login_container  grid  grid_two_column'>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}

        pagination={{
          clickable: true,
         
        }}
         
         autoplay={{
          delay:2500
         }}


        modules={[Pagination ,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src='Image/3.jpeg' />  </SwiperSlide>

        <SwiperSlide> <img src='Image/4.jpeg' />  </SwiperSlide>


        <SwiperSlide> <img src='Image/1.jpeg' />  </SwiperSlide>


      </Swiper>



      <div className='login_container'>


        <div className='btn' onClick={handlelogin}>

          Google Sign in

        </div>

      </div>

    </div >
  )
}

export default Login
