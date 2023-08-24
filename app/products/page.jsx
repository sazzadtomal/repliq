"use client"


import Search from "@/components/Search/Search"
import { useState} from "react"
import { useGetProductsQuery } from "@/app/products/productsSlice"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {useDispatch,useSelector} from "react-redux";
import Image from "next/image"
import { addProduct,itemIds,removeProduct } from "../cart/cartSlice"
import {AiOutlineMinusCircle} from "react-icons/ai"

const Products = () => {
  const dispatch=useDispatch()
  const [query,setQuery]=useState("")
  const {data}=useGetProductsQuery()
  const cartIds=useSelector(itemIds)


  


  let productList=<div className=" flex justify-center items-center h-48 w-32 bg-gray-300 opacity-50 "> Add Movies! </div>

  if(data?.products){
    productList=data.products.map(product=>(<div key={product.id} className="dark:text-stone-700 flex p-6 h-32 lg:w-1/4 w-full justify-between items-center border rounded-lg shadow-xl  bg-white dark:bg-gray-300">
          <div className="flex flex-col gap-2">
            <p className="">{product.title.toUpperCase()}</p>
            <span className="font-semibold">{"$"+product.price}</span>
          {cartIds.includes(product.id) ? <AiOutlineMinusCircle onClick={()=>dispatch(removeProduct(product.id))} className="text-2xl"/> : <AiOutlinePlusCircle onClick={()=>dispatch(addProduct(product))} className="text-2xl"/> }
             
            </div>
          <Image width={64} height={64} content="contain" alt={product.title} src={product.images[0]}/>
        
      </div>))
  }
  
  
  
  // dynamic components for searched movies
  let searchMovies=<div className=" dark:text-stone-200 h-48 flex justify-center items-center"> Start Searching for movies to add!!!  </div>
  // if(data?.Search){
  //   searchMovies=data.Search.map((movie,index)=>
  //   <div key={index}  className="px-2 mb-1 hover:dark:text-stone-200   dark:text-stone-400  py-2 box-border rounded-md border dark:border-cyan-900 flex justify-between items-center">
  //     <p className="w-64">{movie.Title}</p>
  //     <AiOutlinePlusCircle onClick={()=>dispatch(addMovie(movie))} className="text-2xl hover:scale-110 "/>
  //   </div>)
  // }



 
 
 

  return (
    <div className="dark:bg-slate-700 mt-16 md:mt-4 flex gap-4 flex-col  h-5/6 p-4 px-6" >
    

    <h2 className="text-2xl lg:text-3xl font-semibold dark:text-stone-200">Products.</h2>
    <Search modifier={setQuery}/>
    <div className="flex flex-1 flex-wrap overflow-y-scroll gap-2 lg:gap-4 h-full w-full justify-center drop-shadow ">{productList}</div>
  

    
     
    {/* <div className="overflow-y-scroll h-4/6 p-2 rounded-md w-full  lg:w-2/3 flex flex-col m-auto ">
      {searchMovies}
    </div> */}
    
    
    </div>
  )
}

export default Products