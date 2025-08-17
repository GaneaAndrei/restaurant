function Newsletter (){
    return (
        <div className="bg-gray-900 text-white flex flex-col items-center">
            <div className="mt-4">
                <h5>Subscribe to our email newsletter to receive updates</h5>
            </div>
            <div>
                <form action="" className="p-4">
                    <input type="text" placeholder="Subscribe" className="bg-white text-gray-500" />
                    <button className="ml-4">Button </button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter