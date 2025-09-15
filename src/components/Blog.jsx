import dessert1 from "../assets/dessert1.jpeg"

function Blog(){
    return(
        <div className=" p-4">
            <div>
                <h1 className="text-center mb-8 mt-6 font-josefin font-bold text-4xl tracking-[4px]">OUR BLOG</h1>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-4 md:flex justify-center">
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
                <img src={dessert1} alt="" />
            </div>
        </div>
    )
}

export default Blog