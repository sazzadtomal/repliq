import { createSlice, createEntityAdapter,nanoid} from '@reduxjs/toolkit'


const orderAdapter=createEntityAdapter({
    selectId:(order)=>order.id,
})


const orderSlice=createSlice({
     name: "Order",
     initialState:orderAdapter.getInitialState(),
     reducers:{
        addOrder: (state,action)=>{
            console.log("added")
            orderAdapter.addOne(state,{products:action.payload,id:nanoid()})
        },
        removeOrder: (state,action)=>{
            orderAdapter.removeOne(state,action.payload)
        },
     }


})


export const {addOrder,removeOrder}=orderSlice.actions



export const {selectAll:allOrders,selectIds:itemIds }=orderAdapter.getSelectors((state) => state.order)


export default orderSlice.reducer