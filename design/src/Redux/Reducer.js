
import { createSlice } from "@reduxjs/toolkit"



var initialState = {

   t1: [],
   t2: [],
   t3: [],
   selectedTable: [],
   user:null,
   cart:[]



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
      ,

      addUser(state ,action)
      {
      
          state.user = action.payload
      }
       ,

      updateQuantity(state ,action)
      {
           
       


         //update acc to table

        
         if(state.selectedTable[state.selectedTable.length-1]=="t1"){

            const itemIndex = state.t1.findIndex((e)=>{

               return e.title == action.payload
             })
     
           
             
           
             
     
            console.log( state.t1[itemIndex].quantity++)
         }
         
         else if(state.selectedTable[state.selectedTable.length-1]=="t2")
         {


            const itemIndex = state.t2.findIndex((e)=>{

               return e.title == action.payload
             })
     
           
             
           
             
     
            console.log( state.t2[itemIndex].quantity++)
         }

         else{

            const itemIndex = state.t3.findIndex((e)=>{

               return e.title == action.payload
             })
     
           
             
           
             
     
            console.log( state.t3[itemIndex].quantity++)
         }
      
      },



      clearTable(state,action)
      {

         state.t1.length=0
         state.t2.length=0
         state.t3.length=0

      }

   }





})



export const { selectedTable, ordersOnTable ,addUser ,updateQuantity,clearTable } = data.actions;

export default data.reducer