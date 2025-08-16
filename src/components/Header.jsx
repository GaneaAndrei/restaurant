import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faRss } from "@fortawesome/free-solid-svg-icons"
import { faVk } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Header() {
    return (
        <>
      <div className="bg-[url(./assets/restaurant.jpg)] h-screen bg-cover bg-no-repeat flex flex-col justify-around">
        <div className="pt-12 px-4 flex justify-between">
            <div>
                <ul className="flex gap-2">
                   <a href=""> <li><FontAwesomeIcon icon={faFacebookF} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faTwitter} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faRss} color='white'/></li></a>
                   <a href=""><li><FontAwesomeIcon icon={faVk} color='white'/></li></a>
                </ul>
            </div>
            <div>
              <button><FontAwesomeIcon icon={faBars} color="white"/></button>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center m-auto gap-4 font-mono">
          <h1 className="text-6xl text-white">Spicy Club</h1>
          <p className="text-4xl text-center text-white">Donec vel viverra nibh. Ut laoreet ac nisl sit amet vehicula.</p>
        </div>
      </div>
        </>
      )
}

export default Header