"use client"

import { useSelector } from "react-redux"
import { allOrders } from "./orderSlice"

const page = () => {
  const orders=useSelector(allOrders)  

  const orderList= orders.map(order=><div className="rounded-lg p-4 w-full lg:w-2/3 border bg-white shadow-xl" >
    <p className="text-2xl mb-10">OrderId: {order.id}</p>
    <div className="flex flex-col gap-1">
        {order.products.map(product=>
            <div className="flex justify-between p-2 border rounded-md">
                <span>{product.title}</span>
                <span>{product.price}</span>
             </div>
        )}
    </div>
    <div className="flex justify-end">
        <p className="p-2 text-2xl">Total :2000</p>
    </div>
  </div>)



  return (
   
         <div className="w-full h-5/6 overflow-x-scroll">
            <div className="flex flex-col">
               {orderList}
            </div>
         </div>
  

  )
}

export default page