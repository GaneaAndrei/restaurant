import burger from "../assets/burger1.jpg"
import fries from "../assets/fries.jpg"

function About(){
    return(
        <div className="p-4 mx-6">
            <h1 className="text-center mb-10 text-4xl pt-8 font-josefin">ABOUT US</h1>
            <div>
                <h3 className="mb-4 font-josefin font-bold tracking-[4px]">LOREM IPSUM DOLOR SIT AMET</h3>
                <p className="mb-4 text-gray-400 text-sm">Ut fringilla euismod sagittis. 
                    Cras semper ante sapien, 
                    in ornare nisi euismod eu.
                     Morbi dapibus est non leo vestibulum aliquet. 
                     Sed viverra nisi pharetra, scelerisque nisi eu, 
                     tempus nibh. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia Curae; 
                      In pellentesque, lectus at auctor luctus, 
                      lacus nibh dignissim ante, sed maximus arcu odio vitae lectus. 
                </p>
                <span className="text-gray-400 text-sm">
                Phasellus vestibulum velit sed nisi ultricies scelerisque. 
                Vivamus ligula mauris, euismod in dictum id, tempus ac odio. 
                Etiam tristique felis eros, tincidunt interdum elit gravida et. 
                Donec porttitor vehicula tortor, malesuada aliquet nibh finibus ac. 
                Maecenas consectetur nisi ipsum, blandit finibus quam tristique vitae.
                </span>
                
            </div>
            <button className="mt-4 border-2 border-black border-solid w-26 h-8 text-sm font-bold font-roboto-condensed">MORE</button>
            <div className="flex items-center">
                <img src={burger}
                alt="burger" 
                className="h-[250px] "/>
                <img src={fries}
                alt="fries" 
                className="w-3/4"/>
            </div>
        </div>
    )
}

export default About