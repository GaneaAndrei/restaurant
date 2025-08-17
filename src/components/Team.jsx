import dessert1 from "../assets/dessert1.jpeg"

function Team(){
    return(
        <div className="bg-gray-900 p-4">
            <div>
                <h1 className="text-white text-center mb-8 mt-6">OUR TEAM</h1>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-4">
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
            </div>
        </div>
    )
}

export default Team