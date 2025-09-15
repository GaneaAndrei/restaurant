import dessert1 from "../assets/dessert1.jpeg"
import drink1 from "../assets/drink1.jpeg"
import pasta1 from "../assets/pasta1.jpeg"
import chicken1 from "../assets/chicken1.jpeg"
import data from "../assets/data.json"
import { useState } from "react"
function Menu (){
    const [filterFood,setFilterFood]=useState('all') //all by default
    const filteredFood=data.filter(item =>{
        if(filterFood==='all'){
            return true
        }
        return item.type===filterFood
    })
    return(
        <div className="p-4 flex flex-col items-center justify-between">
            <div className="text-black text-4xl mb-4 font-bold font-josefin p-8 tracking-[4px]">
                <h1>OUR MENU</h1> 
            </div>
            <div className="flex gap-3 mb-8">
                <button className="border-2 border-solid border-black h-12 w-14 transition-colors duration-300 hover:bg-amber-400 hover:text-white
                 focus:bg-amber-400 focus:text-white" onClick={() =>setFilterFood('all')}>All</button>
                <button className="border-2 border-solid border-black h-12 w-22 transition-colors duration-300 hover:bg-amber-400 hover:text-white
                 focus:bg-amber-400 focus:text-white" onClick={() =>setFilterFood('pasta')} >Pasta</button>
                <button className="border-2 border-solid border-black h-12 w-22 transition-colors duration-300 hover:bg-amber-400 hover:text-white
                 focus:bg-amber-400 focus:text-white" onClick={() =>setFilterFood('chicken')}>Chicken</button>
                <button className="border-2 border-solid border-black h-12 w-22 transition-colors duration-300 hover:bg-amber-400 hover:text-white
                 focus:bg-amber-400 focus:text-white" onClick={() =>setFilterFood('drinks')}>Drinks</button>
                <button className="border-2 border-solid border-black h-12 w-22 transition-colors duration-300 hover:bg-amber-400 hover:text-white
                 focus:bg-amber-400 focus:text-white" onClick={() =>setFilterFood('desserts')}>Desserts</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
                {filteredFood.map(item =>(
                    <div key={item.name} className="mb-6 transition-colors duration-300 hover:bg-amber-400 group ">
                        <img src={item.imgUrl} alt="" className="w-[200px] h-[200px]" />
                        <div className="p-4">
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">LOREM</h5>
                        <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">Ipsum</p>
                        </div>
                    </div>
                ))}

{/*                 <div className="mb-6 transition-colors duration-300 hover:bg-amber-400 group ">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">LOREM</h5>
                        <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">Lorem</h5>
                        <p className="text-gray-400 text-sm">Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">Lorem</h5>
                        <p className="text-gray-400 text-sm">Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">Lorem</h5>
                        <p className="text-gray-400 text-sm">Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">Lorem</h5>
                        <p className="text-gray-400 text-sm">Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">Lorem</h5>
                        <p className="text-gray-400 text-sm">Ipsum</p>
                    </div>
                </div>
 */}
            </div>
        </div>
    )
}

export default Menu