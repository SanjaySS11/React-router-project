import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";


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
    return (
        <div>
            <nav className=" flex items-center justify-around p-3  h-32 bg-gray-200 text-gray-500 ">

                <div className='w-screen  md:w-1/3'>
                    <div>
                        <p className='text-2xl font-bold'>Consultant Pediatrician</p>

                    </div>

                    <div className='flex items-center'>
                        <div className=' h-0 w-3/10 border border-gray-700 m-2'></div>
                        <div><p>Dr. Gaurav Jadon</p></div>
                    </div>

                </div>


                <div className="hidden md:flex gap-5 ">

                    {
                        navData.map(elem => (
                            <NavLink to={elem.path}>{elem.element}</NavLink>
                        ))

                    }
                    {/* <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to="/">Home</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to="/about" >About</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to="/service" >Services</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to="/contact" >Contact</NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to="/research" >Research</NavLink> */}

                </div>

                <div className='md:hidden m-5 '>
                    <FaBars />
                </div>



            </nav>


            <div className="grid md:hidden fixed  top-0 right-0  gap-5 bg-green-500">

                {
                    navData.map(elem => (
                        <NavLink className={(e) => { return e.isActive ? "bg-gray-600" : " text-black" }} to={elem.path}>{elem.element}</NavLink>
                    ))

                }

            </div>


        </div>



    );
};

export default Navbar
