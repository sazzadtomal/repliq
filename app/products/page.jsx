"use client"

import Sort from "@/components/Sort/Sort"
import Search from "@/components/Search/Search"
import { useState} from "react"
import { useGetProductsQuery } from "@/app/products/productsSlice"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {useDispatch,useSelector} from "react-redux";
import Image from "next/image"
import { addProduct,itemIds,removeProduct } from "../cart/cartSlice"
import {AiOutlineMinusCircle} from "react-icons/ai"
import Filter from "@/components/FilterBar/Filter"

const Products = () => {
  const dispatch=useDispatch()
  const [query,setQuery]=useState("")
  const [categoryFilter,setCategoryFilter]=useState()
  const [priceFilter,setPriceFilter]=useState()
  const [sort,setSort]=useState("default")
  const cartIds=useSelector(itemIds)

  //placeholders for items without data
  let filteredItems=null
  let catagories=null
  
  
  // data retrive from react query
  const {data}=useGetProductsQuery()


  //for sorting via price
  const setType=(multiplyer)=>increment*multiplyer;
  let priceTypes=null
  let increment=null

  
  


  if(data?.products){
     filteredItems=data.products

    //retriving catagories setup
    catagories=filteredItems.map(product=>product.category)
    catagories=[...new Set(catagories)]


     //dynamic price filter setup
     const priceList=filteredItems.map(product=>product.price)
     let raw_increment=Math.max.apply(null,priceList)/5
     increment=Math.ceil(raw_increment/100)*100
     priceTypes=[[0,increment],
            [setType(1)+1,setType(2)],
            [setType(2)+1,setType(3)],
            [setType(3)+1,setType(4)],
            [setType(4)+1,setType(5)],
     ]  

  }

  if(query && filteredItems){
      filteredItems= filteredItems.filter(item=>
      item.title.split(" ").join("").toLowerCase().includes(query.split(" ").join("").toLowerCase()))
  }

   if (categoryFilter) {
    filteredItems = filteredItems.filter(
      ({ category }) =>category === categoryFilter
     );
   }

   if(priceFilter){
      const [min,max]=priceFilter.split("-")

      filteredItems = filteredItems.filter(
        ({ price }) => price<=max && price>=min
       )
     }

    if(!sort==="default") {
      
    
 
    }




  


  let productList=<div className=" flex justify-center items-center h-48 w-32 bg-gray-300 opacity-50 "> Add Movies! </div>

  if(filteredItems){
    productList=filteredItems.map(product=>(<div key={product.id} className="dark:text-stone-700 flex p-6 h-32 lg:w-1/4 w-full justify-between items-center border rounded-lg shadow-xl  bg-white dark:bg-gray-300">
          <div className="flex flex-col gap-2">
            <p className="">{product.title.toUpperCase()}</p>
            <span className="font-semibold">{"$"+product.price}</span>
          {cartIds.includes(product.id) ? <AiOutlineMinusCircle onClick={()=>dispatch(removeProduct(product.id))} className="text-2xl"/> : <AiOutlinePlusCircle onClick={()=>dispatch(addProduct(product))} className="text-2xl"/> }
             
            </div>
          <Image width="64" height="64"  content="contain" alt={product.title} src={product.images[0]}/>
        
      </div>))
  }
  

 
 
 

  return (
    <div className="dark:bg-slate-700 mt-16 md:mt-4 flex gap-4 flex-col  h-5/6 p-4 px-6" >
    

    <h2 className="text-2xl lg:text-3xl font-semibold dark:text-stone-200">Products.</h2>
    <Search modifier={setQuery}/>
    <div className="flex flex-col gap-2">
      <Filter type="category" data={catagories} filter={categoryFilter} setFilter={(e)=>setCategoryFilter(e.target.value)}/>
      <Filter type="price" data={priceTypes} filter={priceFilter} setFilter={(e)=>setPriceFilter(e.target.value)}/>
      <Sort data={sort} handler={(e)=>setSort(e.target.value)}/>
    </div>
    <div className="flex flex-1 flex-wrap overflow-y-scroll gap-2 lg:gap-4 h-full w-full justify-center drop-shadow ">{productList}</div>
  
    
    
    </div>
  )
}

export default Products