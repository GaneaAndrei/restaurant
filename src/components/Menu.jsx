import dessert1 from "../assets/dessert1.jpeg"
import drink1 from "../assets/drink1.jpeg"
import pasta1 from "../assets/pasta1.jpeg"
import chicken1 from "../assets/chicken1.jpeg"

function Menu (){
    return(
        <div className="p-4 flex flex-col items-center justify-between">
            <div className="text-black text-3xl mb-4">
                <h1>OUR MENU</h1> 
            </div>
            <div className="flex gap-3 mb-8">
                <button>All</button>
                <button>Pasta</button>
                <button>Chicken</button>
                <button>Drinks</button>
                <button>Desserts</button>
            </div>
            <div className="grid grid-cols-2">
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5>Lorem</h5>
                        <p>Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5>Lorem</h5>
                        <p>Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5>Lorem</h5>
                        <p>Ipsum</p>
                    </div>
                </div>
                <div className="mb-6">
                    <img src={dessert1} alt="" /> 
                    <div>
                        <h5>Lorem</h5>
                        <p>Ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu