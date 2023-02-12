
import { configureStore } from "@reduxjs/toolkit"

import reducersData from "../Redux/Reducer"







const Store = configureStore({



    reducer: {

         tables: reducersData,

     

    }



})


export {Store}

