import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

function Newsletter (){
    return (
        <div className="bg-gray-900 text-white flex flex-col items-center">
            <div className="md:flex justify-between md:w-1/2 mx-auto items-center">
            <div className="mt-4 md:mt-0">
                <p className="text-[12px]">Subscribe to our email newsletter to receive updates</p>
            </div>
            <div>
                <form action="" className="p-4">
                    <input type="text" placeholder="Subscribe" className="bg-white text-gray-500 w-[300px] h-[40px] placeholder:pl-2" />
                    <button className="ml-2 bg-yellow-400 h-[40px] w-[40px]"><FontAwesomeIcon icon={faPaperPlane} color='white'/> </button>
                </form>
            </div>
            </div>

        </div>
    )
}

export default Newsletter