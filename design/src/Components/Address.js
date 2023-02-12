import React, { useContext, useEffect, useState } from 'react'
import "../Styles/Address.css"
import { ContextTransfer } from '../App'
import "../Styles/Address.css"




function Address() {

  const { cart, setCart } = useContext(ContextTransfer)

  const [amount, setAmount] = useState()


  const [address, setAddress] = useState()


  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {


      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': '8dd67b08a0msh80541df62e49cf8p1fecbcjsn0c8a06196008',
      //     'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
      //   }
      // };

      // fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${position.coords.latitude}%2C${position.coords.longitude}&language=en`, options)
      //   .then(response => response.json())
      //   .then(response =>

      //     console.log(response)

      //     // setAddress(response)

      //   )
      //   .catch(err => console.error(err));




      // const apiUrl = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${position.coords.latitude}%2C${position.coords.longitude}&X-RapidAPI-Key=8dd67b08a0msh80541df62e49cf8p1fecbcjsn0c8a06196008&X-RapidAPI-Host=trueway-geocoding.p.rapidapi.com`



      const apiurl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1e34d25ac4054494557757c7e39ce347`
      const response = await fetch(apiurl)
      const data = await response.json()

      console.log(data)

      setAddress(data)


    })






  }, [])





  useEffect(() => {


    const amount = cart.reduce((acc, { price }) => {

      return acc + price
    }, 0)


    setAmount(amount)

  }, [])


  return (
    <div className='delivery_container'>


      <div className='order_info'>

        <div className='delivery_address_container'>

          <h5>Adresss details</h5>

          {

            address?.map(({ name, state, country }) => {

              return (

                <div>

                  <h5>city:{name}</h5>
                  <h5>state:{state}</h5>
                  <h5>country:{country}</h5>

                </div>

              )
            })


          }


        </div>


        <div className='orders_container'>
          orders summary

          {

            cart.map((e) => {
              return <div>
                <img src={e.img} alt="orders_images" />
                <h5>{e.title}</h5>
              </div>
            })

          }


        </div>




      </div>

      <div className='amount_container'>

        <p>

          <strong>Total : <small>Rs{amount}</small></strong>

        </p>

      </div>


     <div className='btn'>proceed</div>


    </div>


  )
}

export default Address










































