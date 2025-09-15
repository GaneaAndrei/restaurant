import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCutlery } from "@fortawesome/free-solid-svg-icons"
import { faGlassMartini } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faAsterisk } from "@fortawesome/free-solid-svg-icons"
function Services(){
    return(
        <div className="bg-gray-900 p-6">
            <div>
                <h1 className="text-white text-center font-josefin text-4xl pt-8">OUR SERVICES</h1>
            </div>
            <div className="flex flex-col items-center gap-3 pt-4 text-white md:flex-row justify-center w-1/2 mx-auto">
                <div className="group flex flex-col items-center pt-4 ">
                    <FontAwesomeIcon icon={faCutlery} color="white" className="rounded-full border-2 border-gray-500 border-solid text-4xl text-gray-500 p-8 transition-colors duration-300 group-hover:bg-white"/>
                    <div className="text-center font-roboto-condensed text-gray-500 transition-colors duration-300 group-hover:text-white">
                        <h5 className="pt-2 text-xl tracking-[4px]">FUSCE FEUGIAT</h5>
                        <p className="mt-2">Donec sed nisi leo. Ut at sagittis nisi. Cras porttitor a purus ac rutrum. </p>
                    </div>
                </div>
                    <div className="group flex flex-col items-center pt-4">
                    <FontAwesomeIcon icon={faGlassMartini} color="white" className="rounded-full border-2 border-gray-500 border-solid text-4xl text-gray-500 p-8 transition-colors duration-300 group-hover:bg-white"/>
                    <div className="text-center font-roboto-condensed text-gray-500 transition-colors duration-300 group-hover:text-white">
                            <h5 className="pt-2 text-xl tracking-[4px]">FUSCE FEUGIAT</h5>
                            <p className="mt-2">Donec sed nisi leo. Ut at sagittis nisi. Cras porttitor a purus ac rutrum. </p>
                        </div>
                    </div>
                    <div className="group flex flex-col items-center pt-4">
                    <FontAwesomeIcon icon={faUser} color="white" className="rounded-full border-2 border-gray-500 border-solid text-4xl text-gray-500 p-8 transition-colors duration-300 group-hover:bg-white"/>
                    <div className="text-center font-roboto-condensed text-gray-500 transition-colors duration-300 group-hover:text-white">
                            <h5 className="pt-2 text-xl tracking-[4px]">FUSCE FEUGIAT</h5>
                            <p className="mt-2">Donec sed nisi leo. Ut at sagittis nisi. Cras porttitor a purus ac rutrum. </p>
                        </div>
                    </div>
                    <div className="group flex flex-col items-center pt-4">
                    <FontAwesomeIcon icon={faAsterisk} color="white" className="rounded-full border-2 border-gray-500 border-solid text-4xl text-gray-500 p-8 transition-colors duration-300 group-hover:bg-white"/>
                    <div className="text-center font-roboto-condensed text-gray-500 transition-colors duration-300 group-hover:text-white">
                            <h5 className="pt-2 text-xl tracking-[4px]">FUSCE FEUGIAT</h5>
                            <p className="mt-2">Donec sed nisi leo. Ut at sagittis nisi. Cras porttitor a purus ac rutrum. </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services