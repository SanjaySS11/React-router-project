import { MdOutlineEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiTwitterLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


function Footer() {
    return (
        <div className=' w-screen bg-gray-900 text-white '>
            <div className=" grid md:flex justify-around">
                <div className="flex items-center gap-10 bg-green-800 p-5 m-10">
                    <div>  <FaMap /></div>
                    <div>
                        <p>Find a clinic near you</p>
                        <h3 className="text-xl">Find Us On Map</h3>
                    </div>
                </div>
                <div className="flex items-center gap-10 bg-green-800 p-5 m-10">
                    <div>  <MdOutlineEmail /></div>
                    <div>
                        <p>Feel free to message us!</p>
                        <h3 className="text-xl">Send an Email</h3>
                    </div>
                </div>
                <div className="flex items-center gap-10 bg-green-800 p-5 m-10">
                    <div>  <FaPhoneAlt /></div>
                    <div className="grid gap-3">
                        <p>To book an
                            appointment,<br /> call us
                            on</p>

                        <p className="text-md">+91 9701757017</p>
                    </div>
                </div>

            </div>

            <div className=" grid  xl:flex justify-around ">
                <div className=" w-full p-10 xl:w-1/3">
                    <h4 className="text-xl">About us </h4>
                    <div className=' h-0 w-1/6 border border-white '></div>
                    <div>
                        <p>Dr. Vivekananda is one of the best orthopaedic surgeons in Hyderabad rendering expert treatment in replacement surgeries, bone trauma diagnosis and holds in-depth knowledge in pathologies around knee & hip joint, treatment and concerned surgeries.</p>
                    </div>
                </div>

                <div className=" w-full p-10 xl:w-1/3">
                    <h4 className="text-xl"> Get in Touch </h4>
                    <div className=' h-0 w-1/6 border border-white '></div>
                    <div className="flex gap-5 items-center mt-5">
                        <div> <FaMap /></div>
                        <div><p>Flat no 101, Madhura Heights, 1st floor, opposite Bank of Baroda, Rajeev Nagar, Hyderabad, Telangana – 500018 .</p></div>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div> <MdOutlineEmail /></div>
                        <div><p>dr.b.vivekananda@gmail.com</p></div>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div>  <FaPhoneAlt /></div>
                        <div><p>+91 9701757017</p></div>
                    </div>
                </div>
                <div className=" w-full p-10 xl:w-1/3">
                    <h4 className="text-xl">Additional Link </h4>
                    <div className=' h-0 w-1/6 border border-white '></div>
                    <div className="flex gap-5 items-center mt-4">
                        <div>  <FaChevronRight /></div>
                        <div><p>Core Clinic</p></div>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div>  <FaChevronRight /></div>
                        <div><p>Service</p></div>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div>  <FaChevronRight /></div>
                        <div><p>About</p></div>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div>  <FaChevronRight /></div>
                        <div><p>Contact</p></div>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center">
                <h4 className="text-xl">Scheduled An Appointment </h4>
                <div className=' h-0 w-1/5 border border-white '></div>
                <div className="grid grid-cols-2 gap-5">
                    <input className="text-center border border-amber-50 mt-5" type="text" placeholder="First name" />
                    <input className="text-center border border-amber-50 mt-5" type="text" placeholder="Last name" />
                    <input className="text-center border border-amber-50 mt-2" type="number" placeholder="Phone Number" />
                    <input className="text-center border border-amber-50 mt-2" type="email" placeholder="Email" />

                </div>
                <div className="flex  w-48 h-8 items-center justify-center gap-2 bg-green-400 mt-5 cursor-pointer">
                    <p>Submit</p>
                    <FaArrowRightLong />
                </div>
            </div>

            <div className="bg-black h-16 mt-10 flex  items-center justify-around gap-20">
                <div>
                    <p>© 2023 Dr. Gaurav Jadon. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <CiFacebook />
                    <FaInstagram />
                    <PiTwitterLogo />
                </div>
            </div>

        </div>
    )
}

export default Footer
