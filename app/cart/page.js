
"use client"

import { cartItems } from './cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import {AiOutlineMinusCircle} from "react-icons/ai"
import { removeProduct } from './cartSlice'
import {addOrder} from "@/app/orders/orderSlice"
import Image from 'next/image'
const Page = () => {
  
  const itemList=useSelector(cartItems)
  const dispatch=useDispatch()
  let cartList=<div>Add Items to cart</div>

  if(itemList.length){
    cartList=itemList.map(product=>(<div key={product.id} className="dark:text-stone-700 flex p-6 h-32 lg:w-1/4 w-full justify-between items-center border rounded-lg shadow-xl  bg-white dark:bg-gray-300">
          <div className="flex flex-col gap-2">
            <p className="">{product.title.toUpperCase()}</p>
            <span className="font-semibold">{"$"+product.price}</span>
             <AiOutlineMinusCircle onClick={()=>dispatch(removeProduct(product.id))} className="text-2xl"/>  
            </div>
          <Image alt={product.title}  width={64} height={64} content="contain" src={product.images[0]}/>
        
      </div>))
  }
  
  
  
  return (
     <div className="dark:bg-slate-700 w-full mt-16 md:mt-4 flex gap-4 flex-col  h-5/6 p-4 px-6">
      <h2 className="text-2xl lg:text-3xl font-semibold dark:text-stone-200">Cart.</h2>
      <div className="flex flex-col gap-2 overflow-y-scroll lg:gap-4 h-full w-full drop-shadow items-center ">{cartList}</div>

      <div className='justify-self-end flex justify-end'>
        <button onClick={()=>dispatch(addOrder(itemList))} className="hover:scale-110 rounded-2xl px-4 h-12 bg-gray-200 border">CheckOut</button>
      </div>
     </div>
    
  )
}

export default Page