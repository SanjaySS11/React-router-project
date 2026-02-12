import { TfiEmail } from "react-icons/tfi";
import { FaFax } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
    return (
        <div className=" grid  md:flex w-screen">
            <div className=" flex flex-col justify-center w-1/2 p-10">
                <div><h1 className="text-5xl">Get in Touch</h1>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                </div>
                <div>
                    <input className="h-12   w-full bg-gray-300 p-2 mt-5" type="text" placeholder="Name*" /> <br />
                    <input className="h-12 w-full p-2 bg-gray-300 mt-5" type="email" placeholder="Email*" /> <br />
                    <input className="h-12  w-full p-2 bg-gray-300 mt-5" type="number" placeholder="Phone Number*" /> <br />
                    <select className="h-12  w-full p-2 bg-gray-300 mt-5" >
                        <option value="" disabled selected>How did you find us?</option>
                        <option value="">From Ads</option>
                        <option value=""> From Friend</option>
                    </select>
                    <button className="h-12  w-full p-2 mt-5 text-center bg-blue-600 text-white cursor-pointer"> SEND</button>

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
            <div className=" h-200 md:h-screen w-1/2 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2219921.0975208515!2d78.5091521525841!3d30.992137808499173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1770922474071!5m2!1sen!2sin"className="h-screen w-full p-10" ></iframe>
            </div>
        </div>
    )
}

export default Contact
