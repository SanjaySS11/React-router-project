import React from 'react'

function About() {
    return (
        <div>
            <div className='min-h-96 min-w-screen bg-gray-900 text-amber-50 grid md:flex justify-around items-center'>
                <div className=' w-full md:w-1/3 flex flex-col gap-5 p-10'>
                    <div><p>Hello, Welcome</p></div>
                    <div><p className='text-3xl'>I'm Dr. Gaurav</p></div>
                    <div><p>Expert in Pediatrics, Neonatology, and Pediatric Intensive
                        Care — committed to safe and evidence
                        based child healthcare.</p></div>
                    <div><button className='text-amber-50 bg-green-400 h-8 w-32'>Contact</button></div>
                </div>
                <div className=' w-full p-5 md:w-1/3 flex items-center justify-center'>
                    <img className='h-80 w-80 r' src="imgprofile.jpg" alt="image" />
                </div>

            </div>


            <div className='h-160 md:h-96 w-screen bg-gray-300 grid md:flex justify-around pt-10'>
                <div className='w-full p-5 m-5  md:w-1/3'>
                    <h1 className='text-green-600 text-3xl'>DR.
                        Gaurav Jadon
                        MBBS, DCH, DNB Pediatrics, EBP (Europe)</h1>
                </div>
                <div className=' w-full m-2 p-5 md:w-1/2 flex flex-col gap-10 '>
                <div>
                    <p>Dr. Gaurav Jadon is an experienced Consultant Pediatrician with 28 years of clinical practice across India, Kuwait, and the UAE. He specializes in General Pediatrics, Neonatology, and Pediatric Intensive Care, providing safe, compassionate, and evidence-based care for newborns, infants, and children.</p>
                </div>
                <div>
                    <p>Over the years, he has managed a wide range of pediatric and neonatal conditions, including premature newborn care, pediatric emergencies, and complex critical cases. His calm approach, strong clinical judgment, and commitment to medical excellence have earned the trust of families and colleagues alike.</p>
                </div>
                <div>
                    <p>Dr. Jadon is also actively involved in teaching, clinical audits, and international medical conferences, contributing to the advancement of pediatric healthcare. He currently serves at NMC Specialty Hospital, Dubai, where he continues to deliver high-quality child healthcare with a family-centered and empathetic approach.</p>
                </div>

                </div>


            </div>


<div>
    
</div>

        </div>
    )
}

export default About
