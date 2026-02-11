
import { FaLongArrowAltRight } from "react-icons/fa";
function Home() {
    return (
        <div>
            <div className="h-screen relative">
                <img src="heroimg.png" alt="image" className="absolute h-screen w-screen " />

                <div className=" h-150 w-1/3 p-10 flex flex-col justify-center  gap-5 ">
                    <div className="relative">
                        <h2 className="text-amber-50 text-4xl"> A decade of experience as
                            an Orthopaedician.</h2>
                    </div>

                    <div className="relative">
                        <p className="text-amber-50"> Experience best-in-className consultation & treatment plans
                        </p>
                    </div>


                </div>
                <div className=" md:relative h-0  border  border-amber-50 ml-10  "></div>
                <div className=" hidden md:flex justify-around text-amber-50 relative w-screen font-bold">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>

                <div className="grid gap-5 md:flex justify-around pt-5">
                    <div className="relative w-full md:w-1/5  text-amber-50 flex flex-col gap-2 p-5 bg-sky-950" >
                        <div>
                            <p>Clinic Location</p>
                            <p>NMC Specialty Hospital, Dubai Al Nahda 2, Dubai, UAE </p>
                            <p>Providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button>Contact Me</button>
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/5  text-amber-50 flex flex-col gap-2 p-5 bg-sky-950" >
                        <div>
                            <p>Clinic Location</p>
                            <p>NMC Specialty Hospital, Dubai Al Nahda 2, Dubai, UAE </p>
                            <p>Providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button>Contact Me</button>
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/5  text-amber-50 flex flex-col gap-2 p-5 bg-sky-950" >
                        <div>
                            <p>Clinic Location</p>
                            <p>NMC Specialty Hospital, Dubai Al Nahda 2, Dubai, UAE </p>
                            <p>Providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button>Contact Me</button>
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                </div>
            </div>

{/* ====== Second landing page========= */}


            <div className=" grid h-180 md:flex md:h-140  items-center justify-around">

                <div className="w-screen mt-10 p-10 md:w-1/4 ">
                    <h1 className="text-4xl">DR.
                        Gaurav Jadon
                        MBBS, DCH, DNB Pediatrics, EBP (Europe)</h1>
                </div>
                <div className="w-screen p-10 md:w-1/4">
                    <p>Dr. Gaurav Jadon is a highly experienced Consultant Pediatrician with 28 years of clinical expertise across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, offering compassionate and evidence-based care for newborns, infants, and children.</p> <br />
                    <p>He currently serves at NMC Specialty Hospital, Dubai, and is recognized for his commitment to child health, medical education, and international research.</p>
                </div>

            </div>



            <div className="min-h-screen">
                <div className="h-24 w-full bg-black grid items-center justify-center">

                    <p className="text-white bg-blue-400 w-24 h-10 grid items-center justify-center rounded-xl cursor-pointer">READ MORE</p>
                </div>
                <div>
                    <img className="h-full md:h-175 w-screen absolute" src="bgimg1.jpg" alt="image" />

                    <div className="relative grid md:flex items-center justify-around ">
                        <img className="h-105 md: " src="Group 3.png" alt="image" />
                        <img className="h-105 md: " src="Group 4.png" alt="image" />
                        <img className="h-105 md: " src="Group 5.png" alt="image" />
                    </div>
                </div>

            </div>




            <div className="h-200 md:h-screen grid md:flex">

                <div className="w-screen pt-20 md:w-1/2 flex items-center justify-center ">
                    <img className="w-96 h-96" src="imgprofile.jpg" alt="image" />
                </div>
                <div className=" w-screen p-5 md:w-1/2 m-10 flex flex-col gap-5 justify-center">

                    <div>
                        <p className="text-2xl">Areas of Expertise</p>
                    </div>
                    <div>

                        <p className="text-xl"> Leading Consultant Pediatrician with 28 years of experience in General Pediatrics, Neonatology, and Pediatric Intensive Care. Trusted for compassionate, evidence-based care.</p>
                    </div>
                    <div className="flex ">
                        <p className="text-white bg-blue-400 w-32 h-10 grid items-center justify-center cursor-pointer p-2">READ MORE</p>
                    </div>
                </div>
            </div>




            <div className="bg-gray-300 h-72 w-screen grid md:flex items-center justify-around">
                <div>
                    <p>In case of EMERGENCY, call +91 9701757017</p>
                </div>

                <div className="flex gap-2 items-center justify-center h-10 w-50 bg-green-300">
                    <p>OR SEND US MESSAGE</p>
                    <FaLongArrowAltRight />
                </div>

            </div>

            <div className="h-220 md:h-screen  flex  flex-col gap-20 items-center p-10 ">

                <div >
                    <h1 className="text-4xl mb-2">Why Choose Dr. Gaurav Jadon</h1>
                    <div className="h-0 w-1/2 border-2 bg-blue-300 "></div>

                </div>

                <div className="grid gap-10 w-full md:w-2/3">
                    <div>
                        <p>Dr. Gaurav Jadon brings 28 years of pediatric expertise across India, Kuwait, and the UAE. His practice blends clinical excellence, compassion, and evidence-based care, making him a trusted pediatrician for families across the region.</p>

                    </div>
                    <div>
                        <p>With strong expertise in General Pediatrics, Neonatology, and Pediatric Intensive Care, he has managed a wide range of complex newborn and childhood conditions. Dr. Jadon has cared for premature babies, critically ill children, and acute emergencies, while also guiding routine pediatric care, growth monitoring, and preventive health.</p>


                    </div>
                    <div>
                        <p>In addition to his clinical work, he has played an active role in training medical residents, leading clinical audits, and contributing to international conferences and research. His commitment to continuous learning and quality improvement reflects his dedication to raising pediatric care standards.</p>

                    </div>

                    <div>
                        <p>He offers expert care across a broad spectrum of pediatric and neonatal conditions, providing comprehensive support from infancy through adolescence.</p>

                    </div>




                </div>



            </div>




            <div className=" mim-h-screen ">

                <div className=" grid gap-10 p-10 md:flex justify-around">
                    <div className=" w-full md:w-1/5 h-180 md:h-120 border-2 p-5 flex flex-col gap-5">
                        <img src="imgcard.jpg" alt="image" />
                        <h3 className="text-xl font-bold">Newborn &
                            Neonatal Care</h3>
                        <p>Comprehensive care for newborns, including premature babies and NICU-level support. Expert in neonatal resuscitation, ventilation, surfactant therapy, and management of high-risk newborn conditions.</p>


                    </div>
                    <div className="w-full md:w-1/5 h-180 md:h-120 border-2 p-5 flex flex-col gap-5">
                        <img src="imgcard.jpg" alt="image" />
                        <h3 className="text-xl font-bold">General
                            Pediatrics</h3>
                        <p>Complete medical care for infants, children, and adolescents—covering infections, allergies, nutrition, growth, development, vaccinations, and long-term pediatric health.</p>


                    </div>
                    <div className="w-full md:w-1/5 h-180 md:h-120 border-2 p-5 flex flex-col gap-5">
                        <img src="imgcard.jpg" alt="image" />
                        <h3 className="text-xl font-bold">Pediatric
                            Intensive Care</h3>
                        <p>Advanced management of critically ill children, including respiratory failure, sepsis, trauma, and complex emergencies. Skilled in mechanical ventilation, PICU protocols, and multidisciplinary pediatric critical care.</p>


                    </div>
                </div>



                <div className="flex items-center justify-center mt-10">
                    <div className="h-10 mb-10 w-30 bg-blue-500 text-white flex items-center  justify-center rounded-xl">

                        <button className="cursor-pointer" >VIEW MORE</button>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-gray-200 flex flex-col gap-6 md:grid grid-cols-3 items-center pl-20">
                <img src="logo01.png" alt="image" />
                <img src="logo02.png" alt="image" />
                <img src="logo03.png" alt="image" />
                <img src="logo04.png" alt="image" />
                <img src="logo05.png" alt="image" />

            </div>

            <div className="h-screen text-white" >
                <img className="h-screen w-screen absolute" src=" heroimg.png" alt=" image" />

                <div className="text-xl  h-full flex flex-col items-center relative justify-center gap-15">
                    <div className="w-full  p-10 md:w-2/3 leading-10">


                        <p >Dr. Gaurav Jadon is a Consultant Pediatrician with over 28 years of post-specialization experience across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, combining clinical expertise with academic leadership. Certified by the European Board of Pediatrics, Dr. Jadon serves at NMC Specialty Hospital, Dubai. He actively contributes to teaching, clinical audits, and international research forums. Passionate about pediatric education and evidence-based practice, he continues to advance child health standards in the GCC region through compassionate care and lifelong learning.</p>

                    </div>

                    <div className="text-3xl">
                        <p>Harsh Vardhan</p>
                    </div>

                </div>
            </div>

            <div>
                <img className="h-screen w-screen p-10" src="mapimg.png" alt="image" />
            </div>


        </div>

    )
}

export default Home
