function Contact (){
    return(
        <div className="mx-4">
            <div className="md:w-1/2 mx-auto">
            <h1 className="text-center mt-6 font-bold text-4xl font-josefin tracking-[4px]">CONTACT US</h1>
            <div className="flex flex-col items-start p-4 gap-2 md:flex-row justify-between ">
                <div>
                    <h4 className="font-bold font-josefin tracking-[4px]">ADDRESS :</h4>
                    <p className="text-gray-400 pt-4">Lorem ipsum mit</p>
                    <p className="text-gray-400 pb-4">Lorem ipsum mit</p>
                </div>
                <div>
                    <h4 className="font-bold font-josefin tracking-[4px]">PHONE :</h4>
                    <p className="text-gray-400 pt-4">+1234567890</p>
                    <p className="text-gray-400 pb-4">+1234567890</p>
                </div>
                <div>
                    <h4 className="font-bold font-josefin tracking-[4px]">EMAIL :</h4>
                    <p className="text-gray-400 pt-4">email@email.com</p>
                </div>
            </div>
            <div className="p-4">
                <h4 className="font-bold font-josefin tracking-[4px] pb-4">CONCTACT FORM :</h4>
                <form action="">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full name</label>
                        </div>
                        <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone</label>
                        </div>
                        <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                        <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject</label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="relative z-0">
                        <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
                        </div>
                    </div>
                    <button className="mt-8 mb-2 border-2 border-sold border-black w-[100px] h-[50px] font-bold ">SEND</button>
                </form>
            </div>
            </div>

        </div>
    )
}

export default Contact