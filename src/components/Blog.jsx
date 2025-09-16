import b1 from "/images/b1.jpg"
import b2 from "/images/b2.jpg"
import b3 from "/images/b3.jpg"
import b4 from "/images/b4.jpg"


function Blog(){
    return(
        <div id="blog" className=" p-4">
            <div>
                <h1 className="text-center mb-8 mt-6 font-josefin font-bold text-4xl tracking-[4px] ">OUR BLOG</h1>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-4 md:flex justify-center">
                <div className="relative group">
                    <a href="#">
                    <img src={b1} alt="" className="h-[270px] w-[260px] md:h-[300px] md:w-[240px]" />
                    <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 duration-300 bg-black/40 p-4 ">
                        <h4 className="text-center text-white font-semibold tracking-[4px]">LOREM IPSUM</h4>
                        <p className="text-center text-[#d2d2d2] text-[.9em]">By  span<span className="text-white">Admin </span>  on Nov 02, 2016 </p>
                    </div>
                    </a>
                </div>

                <div className="relative group">
                <a href="#">
                    <img src={b2} alt="" className="h-[270px] w-[260px] md:h-[300px] md:w-[240px]" />
                    <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 duration-300 bg-black/40 p-4 ">
                        <h4 className="text-center text-white font-semibold tracking-[4px]">LOREM IPSUM</h4>
                        <p className="text-center text-[#d2d2d2] text-[.9em]">By  span<span className="text-white">Admin </span>  on Nov 02, 2016 </p>
                    </div>
                    </a>
                </div>

                <div className="relative group">
                <a href="#">
                    <img src={b3} alt="" className="h-[270px] w-[260px] md:h-[300px] md:w-[240px]" />
                    <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 duration-300 bg-black/40 p-4 ">
                        <h4 className="text-center text-white font-semibold tracking-[4px]">LOREM IPSUM</h4>
                        <p className="text-center text-[#d2d2d2] text-[.9em]">By  span<span className="text-white">Admin </span>  on Nov 02, 2016 </p>
                    </div>
                    </a>
                </div>
                <div className="relative group">
                <a href="#">
                    <img src={b4} alt="" className="h-[270px] w-[260px] md:h-[300px] md:w-[240px]" />
                    <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 duration-300 bg-black/40 p-4 ">
                        <h4 className="text-center text-white font-semibold tracking-[4px]">LOREM IPSUM</h4>
                        <p className="text-center text-[#d2d2d2] text-[.9em]">By  span<span className="text-white">Admin </span>  on Nov 02, 2016 </p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blog