import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { faVk } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Header() {
        const [isOpen,setisOpen]=useState(false)
        const buttonHandler=() =>setisOpen(!isOpen)

        
    return (
        <>
      <div className="bg-[url(./assets/restaurant.jpg)] h-screen bg-cover bg-no-repeat flex flex-col justify-between">
        <div className="pt-12 px-4 flex justify-between  mx-auto items-center w-full">
            <div>
                <ul className="flex gap-2">
                   <a href=""> <li><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faVk} color='white'/></li></a>
                </ul>
            </div>
            <div>
              <button className="border-2 border-white border-solid w-[40px] h-[40px] rounded-md md:hidden" onClick={buttonHandler}><FontAwesomeIcon icon={faBars} color="white"/></button>

              <div className="flex justify-between flex-nowrap  text-white font-roboto-condensed gap-2 md:block sm:hidden md:p-0">
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Home</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">About</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Services</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Menu</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Team</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Blog</button>
                  <button className="transition-border duration-300 ease-in-out border-white/0 hover:border-4 hover:border-white hover:border-solid h-12 w-24 focus:border-4 focus:border-white border-solid">Mail us</button>
              </div>
            </div>
        </div>
        <div className="relative group items-center mx-auto my-auto">
          <div className="flex flex-col justify-center items-center m-auto gap-4 font-mono">
            <h1 className="text-6xl text-white">Spicy Club</h1>
            <p className="text-4xl text-center text-white">Donec vel viverra nibh. Ut laoreet ac nisl sit amet vehicula.</p>
          </div>
          {isOpen &&(
          <div className=" absolute inset-0 ">
            <ul className="flex flex-col items-center gap-3 text-white bg-gray-800/70">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Mail us</a></li>
            </ul>
          </div>
          )}
        </div>

      </div>
        </>
      )
}

export default Header