import { createSlice, createEntityAdapter} from '@reduxjs/toolkit'


const cartAdapter=createEntityAdapter({
    selectId:(product)=>product.id,
    added:false
})


const cartSlice=createSlice({
     name: "Cart",
     initialState:cartAdapter.getInitialState(),
     reducers:{
        addProduct: (state,action)=>{

            cartAdapter.addOne(state,action.payload)
        },
        removeProduct: (state,action)=>{
            cartAdapter.removeOne(state,action.payload)
        },
     }


})


export const {addProduct,removeProduct}=cartSlice.actions



export const {selectAll:cartItems,selectIds:itemIds }=cartAdapter.getSelectors((state) => state.cart)


export default cartSlice.reducer