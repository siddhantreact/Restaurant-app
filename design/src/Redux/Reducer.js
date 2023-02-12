
import { createSlice } from "@reduxjs/toolkit"



var initialState = {

   t1: [],
   t2: [],
   t3: [],
   selectedTable: []



}


const data = createSlice({

   name: "table",


   initialState,


   reducers: {

      selectedTable(state, action) {

         state.selectedTable.push(action.payload)


      },

      ordersOnTable(state, action) {

         if (state.selectedTable[state.selectedTable?.length - 1] == "t1") {

            state.t1.push(action.payload)

         }

         else if (state.selectedTable[state.selectedTable.length - 1] == "t2") {

            state.t2.push(action.payload)

         }
         else {

            state.t3.push(action.payload)

         }

      }


   }





})



export const { selectedTable, ordersOnTable } = data.actions;

export default data.reducer