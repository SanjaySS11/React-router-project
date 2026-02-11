import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
function Service() {
  return (
    <div>
      <div className="h-120 md:h-72 bg-gray-300  flex flex-col items-center justify-center-safe  gap-5">
        <h3 className="text-3xl text-blue-600 font-bold">Lorem Ipsum Has Been In</h3>
        <p className="w-1/2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
      </div>

      <div className=" md:grid grid-cols-2 md:p-10">


        <div className="flex flex-col h-72 w-screen  md:w-xl  justify-center bg-gray-600 p-10 mt-5  ">
          <h3 className="text-2xl font-bold">Lorem Ipsum <br />
            Has Been </h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>


        <div className="flex flex-col h-72 w-screen  md:w-xl  justify-center bg-gray-600 p-10 mt-5 ">
          <h3 className="text-2xl font-bold">Lorem Ipsum <br />
            Has Been </h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>


        <div className="flex flex-col h-72 w-screen  md:w-xl  justify-center bg-gray-600 p-10 mt-5">

        </div>


        <div className="flex flex-col h-72 w-screen  md:w-xl  justify-center mt-5 p-10">
          <h3 className="text-2xl font-bold">Lorem Ipsum <br />
            Has Been </h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
      </div>

      <div className=" min-h-screen flex flex-col items-center  gap-10 m-5 ">

        <div className="flex flex-col items-center justify-center leading-10  ">
          <h3 className="text-3xl font-bold">Our Specialty</h3>
          <p >We provide the world class services with the|
            best medical team!</p>
        </div>

        <div className=" grid grid-cols-2 md:grid md:grid-cols-3  gap-10 ">
          <div className="flex flex-col items-center justify-center  bg-amber-50 w-60 h-60 p-3">
            <img src="Group 7.png" alt=" image" />
            <h3>Dentistry</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-sky-500 w-60 h-60 p-3">
            <img src="Group 8.png" alt=" image" />
            <h3>General Diagnosis</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center   bg-amber-50 w-60 h-60 p-3">
            <img src="Group 9.png" alt=" image" />
            <h3>Neuro Surgery</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center   bg-amber-50 w-60 h-60 p-3">
            <img src="Group 10.png" alt=" image" />
            <h3>Cardiology</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-amber-50 w-60 h-60 p-3">
            <img src="Group 11.png" alt=" image" />
            <h3>Pharmacy</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-amber-50 w-60 h-60 p-3">
            <img src="Group 12.png" alt=" image" />
            <h3>Trained Staff</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center   bg-amber-50 w-60 h-60 p-3">
            <img src="Group 13.png" alt=" image" />
            <h3>DNA Mapping</h3>
            <p className="text-center" >Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-amber-50 w-60 h-60 p-3">
            <img src="Group 14.png" alt=" image" />
            <h3>Ophthalmology</h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
          <div className="flex flex-col items-center justify-center  bg-amber-50 w-60 h-60 p-3">
            <img src="Group 14.png" alt=" image" />
            <h3>Medical Aid </h3>
            <p className="text-center">Get consultation Form our
              Dentistry team</p>
          </div>
        </div>

      </div>

      <div className=" bg-amber-50">
        <div className=" grid gap-10  md:flex justify-between items-center p-10">
          <div className="flex flex-col items-center  pt-5 gap-2 w-full md:w-1/3">
            <h1 className="text-3xl">Read feedback about our
              Services and wonderful team!</h1>
            <p> We take care of our patients just like a family
              member. Read the testimonials from our patients. </p>
          </div>
          <div className="flex gap-5">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>

        <div className=" h-screen mb-10 grid md:flex items-center justify-around ">
          <div className=" w-full md:w-1/5 h-72 flex flex-col gap-10 p-5 mt-10 bg-blue-50 justify-center  ">

            <div className="leading-7">
              <BiSolidQuoteAltLeft />
              <p>Amazing team and amazing treatment from the best doctor in the world</p>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-10 h-10" src="patient.png" alt="image" />
              </div>
              <div>
                <h5>Vaishali</h5>
                <p className="text-gray-400">Patient</p>
              </div>

            </div>
          </div>
          <div className=" w-full md:w-1/5 h-72 flex flex-col gap-10 p-5 mt-10 bg-blue-50 justify-center  ">

            <div className="leading-7">
              <BiSolidQuoteAltLeft />
              <p>Amazing team and amazing treatment from the best doctor in the world</p>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-10 h-10" src="patient.png" alt="image" />
              </div>
              <div>
                <h5>Vaishali</h5>
                <p className="text-gray-400">Patient</p>
              </div>

            </div>
          </div>
          <div className=" w-full md:w-1/5 h-72 flex flex-col gap-10 p-5 mt-10 bg-blue-50 justify-center  ">

            <div className="leading-7">
              <BiSolidQuoteAltLeft />
              <p>Amazing team and amazing treatment from the best doctor in the world</p>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-10 h-10" src="patient.png" alt="image" />
              </div>
              <div>
                <h5>Vaishali</h5>
                <p className="text-gray-400">Patient</p>
              </div>

            </div>
          </div>
          <div className=" w-full  md:w-1/5 h-72 flex flex-col gap-10 p-5 mt-10 bg-blue-50 justify-center  ">

            <div className="leading-7">
              <BiSolidQuoteAltLeft />
              <p>Amazing team and amazing treatment from the best doctor in the world</p>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-10 h-10" src="patient.png" alt="image" />
              </div>
              <div>
                <h5>Vaishali</h5>
                <p className="text-gray-400">Patient</p>
              </div>

            </div>
          </div>
        </div>


      </div>



    </div>
  )
}

export default Service
