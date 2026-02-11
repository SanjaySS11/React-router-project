import { TfiEmail } from "react-icons/tfi";
import { FaFax } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
    return (
        <div className=" grid  md:flex w-screen">
            <div className=" flex flex-col justify-center p-10">
                <div><h1 className="text-5xl">Get in Touch</h1>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                </div>
                <div>
                    <input className="h-9  border-2 w-full p-2 mt-5" type="text" placeholder="Name*" /> <br />
                    <input className="h-9 border-2 w-full p-2 mt-5" type="email" placeholder="Email*" /> <br />
                    <input className="h-9 border-2 w-full p-2 mt-5" type="number" placeholder="Phone Number*" /> <br />
                    <select className="h-10 border-2 w-full p-2 mt-5" >
                        <option value="">How did you find us?</option>
                        <option value="">From Ads</option>
                        <option value=""> From Friend</option>
                    </select>
                    <p className="h-10 border-2 w-full p-2 mt-5 text-center bg-blue-600 text-white cursor-pointer"> SEND</p>

                </div>
                <div className="flex items-center justify-around mt-10">
                    <div className="flex items-center gap-5">
                        <div>
                            <FaPhoneVolume />
                        </div>
                        <div>
                            <h6>PHONE </h6>
                            <p>03 5432 1234</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-5">
                        <div>
                            <FaFax />
                        </div>
                        <div>
                            <h6>FAX </h6>
                            <p>03 5432 1234</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div>
                            <TfiEmail />
                        </div>
                        <div>
                            <h6>EMAIL </h6>
                            <p>info@marcc.com.au</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" h-200 md:h-screen ">
                <img  className="h-200 pr-5 md:h-screen w-185 p-5" src="mapimg1.png" alt="image" />
            </div>
        </div>
    )
}

export default Contact
