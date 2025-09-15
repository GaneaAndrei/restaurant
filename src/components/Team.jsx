import dessert1 from "../assets/dessert1.jpeg"

function Team(){
    return(
        <div className="bg-gray-900 p-12">
            <div>
                <h1 className="text-white text-center mb-8 mt-6 text-4xl font-bold font-josefin tracking-[4px]">OUR TEAM</h1>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-4 md:flex justify-center">
                <div className="relative group">
                    <img src={dessert1} alt=""  />
                    <div className=" absolute inset-0 opacity-0 flex flex-col justify-between group-hover:opacity-100 duration-300 ">
                        <div>
                            <h1>hi</h1>
                            <p>pi</p>
                        </div>
                        <div className="flex justify-center items-center bg-amber-400">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                    </div>
                </div>

                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
            </div>
        </div>
    )
}

export default Team