import dessert1 from "../assets/dessert1.jpeg"
import drink1 from "../assets/drink1.jpeg"
import pasta1 from "../assets/pasta1.jpeg"
import chicken1 from "../assets/chicken1.jpeg"

function Menu (){
    return(
        <div className="p-4 flex flex-col items-center justify-between">
            <div className="text-black text-4xl mb-4 font-bold font-josefin p-8 tracking-[4px]">
                <h1>OUR MENU</h1> 
            </div>
            <div className="flex gap-3 mb-8">
                <button className="border-2 border-solid border-black h-12 w-14">All</button>
                <button className="border-2 border-solid border-black h-12 w-22">Pasta</button>
                <button className="border-2 border-solid border-black h-12 w-22">Chicken</button>
                <button className="border-2 border-solid border-black h-12 w-22">Drinks</button>
                <button className="border-2 border-solid border-black h-12 w-22">Desserts</button>
            </div>
            <div className="grid grid-cols-2">
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5 className="font-bold tracking-[6px] font-josefin pt-4">LOREM</h5>
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

            </div>
        </div>
    )
}

export default Menu