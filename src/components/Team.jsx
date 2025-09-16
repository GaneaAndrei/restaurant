import dessert1 from "../assets/dessert1.jpeg"
import p1 from "/images/p1.jpg"
import p2 from "/images/p2.jpg"
import p3 from "/images/p3.jpg"
import p4 from "/images/p4.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faRss } from "@fortawesome/free-solid-svg-icons"
function Team(){
    return(
        <div id="team" className="bg-gray-900 p-12">
            <div>
                <h1 className="text-white text-center mb-8 mt-6 text-4xl font-bold font-josefin tracking-[4px]">OUR TEAM</h1>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-4 md:flex justify-center">
                <div className="relative group ">
                    <img src={p1} alt=""  className="h-[270px] w-[260px] md:h-[250px] md:w-[240px]  " />
                    <div className=" absolute inset-0 opacity-0 flex flex-col justify-between group-hover:opacity-100 focus:opacity-100  duration-300 bg-black/40 " tabIndex="0">
                        <div className="mx-auto pt-8 flex flex-col flex-wrap ">
                            <h1 className="text-center tracking-[4px] text-white font-semibold">LOREM IPSUM</h1>
                            <p className="text-center mt-2 text-white text-[.9em] font-roboto-condensed">Aenean pulvinar ac enimet posuere tincidunt velit Utin tincidunt </p>
                        </div>
                        <div className="flex justify-center items-center bg-amber-400 mb-2 gap-2 h-10">
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-700"><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-orange-500"><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src={p2} alt=""  className="h-[270px] w-[260px] md:h-[250px] md:w-[240px]" />
                    <div className=" absolute inset-0 opacity-0 flex flex-col justify-between group-hover:opacity-100 duration-300 focus:opacity-100  bg-black/40 " tabIndex="0">
                        <div className="mx-auto pt-8 flex flex-col flex-wrap ">
                            <h1 className="text-center tracking-[4px] text-white font-semibold">LOREM IPSUM</h1>
                            <p className="text-center mt-2 text-white text-[.9em] font-roboto-condensed">Aenean pulvinar ac enimet posuere tincidunt velit Utin tincidunt </p>
                        </div>
                        <div className="flex justify-center items-center bg-amber-400 mb-2 gap-2 h-10">
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-700"><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-orange-500"><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src={p3} alt="" className="h-[270px] w-[260px] md:h-[250px] md:w-[240px]"  />
                    <div className=" absolute inset-0 opacity-0 flex flex-col justify-between group-hover:opacity-100 focus:opacity-100 duration-300 bg-black/40 " tabIndex="0">
                        <div className="mx-auto pt-8 flex flex-col flex-wrap ">
                            <h1 className="text-center tracking-[4px] text-white font-semibold">LOREM IPSUM</h1>
                            <p className="text-center mt-2 text-white text-[.9em] font-roboto-condensed">Aenean pulvinar ac enimet posuere tincidunt velit Utin tincidunt </p>
                        </div>
                        <div className="flex justify-center items-center bg-amber-400 mb-2 gap-2 h-10">
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-700"><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-orange-500"><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src={p4} alt=""  className="h-[270px] w-[260px] md:h-[250px] md:w-[240px]"/>
                    <div className=" absolute inset-0 opacity-0 flex flex-col justify-between group-hover:opacity-100 duration-300 bg-black/40 focus:opacity-100 " tabIndex="0">
                        <div className="mx-auto pt-8 flex flex-col flex-wrap ">
                            <h1 className="text-center tracking-[4px] text-white font-semibold">LOREM IPSUM</h1>
                            <p className="text-center mt-2 text-white text-[.9em] font-roboto-condensed">Aenean pulvinar ac enimet posuere tincidunt velit Utin tincidunt </p>
                        </div>
                        <div className="flex justify-center items-center bg-amber-400 mb-2 gap-2 h-10">
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-700"><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-blue-500"><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                            <a href=""><li className="list-none border-2 border-solid border-white transition-colors duration-300 hover:bg-orange-500"><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team