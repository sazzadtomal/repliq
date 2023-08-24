const catagories=["Products", "Orders", "Cart","Account"]
import Link from "next/link"



const Sidebar = () => {
  return (
    <div className='w-full flex h-screen flex-col gap-32 '>
      <div className='flex justify-between items-center box-border' >
        <p className='text-3xl dark:text-stone-300 p-2 mt-2'>Repliq</p>
      </div>

      <ul className='pl-2'>
        {catagories.map(cat=><Link key={cat} href={"/"+cat.toLowerCase()}>
          <li className='dark:text-stone-300 cursor-pointer hover:text-slate-700 hover:text-2xl p-2 mb-4 '>{cat}</li>
        </Link>)}
      </ul>


    </div>
  )
}

export default Sidebar