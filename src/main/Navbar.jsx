import { NavLink } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from 'react';


let navData = [
    {   id:1,
        path: '/',
        element: " Home"
    },

    {
        id:2,
        path: '/about',
        element: "About"
    },

    {
        id:3,
        path: '/service',
        element: " Services"
    },
    {
        id:4,
        path: '/contact',
        element: " Contact"
    },
    {
        id:5,
        path: '/research',
        element: "Research"
    },
]
function Navbar() {

     const [isOpen, setIsOpen] = useState(false);

    
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };



    return (


        
        <div className='relative'>
            <nav className="flex items-center justify-around p-3 h-32 bg-gray-200 text-gray-500">
                <div className='w-screen md:w-1/3'>
                    <div>
                        <p className='text-2xl font-bold'>Consultant Pediatrician</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='h-0 w-3/10 border border-gray-700 m-2'></div>
                        <div><p>Dr. Gaurav Jadon</p></div>
                    </div>
                </div>



                <div className="hidden md:flex gap-5">
                    {navData.map(elem => (
                        <NavLink  className={(e) => e.isActive ? "bg-gray-600 p-2 text-white rounded" : "text-black p-2"} key={elem.id} to={elem.path}>{elem.element}</NavLink>
                    ))}
                </div>


                <div className='md:hidden m-5 cursor-pointer text-2xl' onClick={toggleNav}>
                    <FaBars />
                </div>
            </nav>



            <div className={`fixed top-33 right-0 h-screen w-64 bg-blue-500 z-50 flex flex-col p-10 gap-5 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>


                <div className='self-end text-2xl cursor-pointer' onClick={toggleNav}>
                    <FaXmark />
                </div>

                {navData.map(elem => (
                    <NavLink
                        key={elem.id}
                        onClick={toggleNav} 
                        className={(e) => e.isActive ? "bg-gray-600 p-2 text-white rounded" : "text-black p-2"}
                        to={elem.path} >

                        {elem.element}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
