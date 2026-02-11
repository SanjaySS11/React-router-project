import React from 'react'

function Research() {
    return (
        <div>
            <div className='grid md:flex w-screen bg-gray-300 justify-around pt-5 '>
                <div className='w-screen md:w-1/3 flex items-center justify-center m-10'>
                    <img className='h-80 w-80 ' src="imgprofile.jpg" alt="image" />
                </div>
                <div className='w-screen md:w-1/2 p-8 flex flex-col gap-5 '>
                    <div>
                        <p className='border-3 border-black max-w-48 rounded-sm text-center'>Areas of Research</p>
                    </div>
                    <div>
                        <h3 className='leading-8'>Exploring nutritional screening tools for hospitalized
                            children: a narrative review
                            Pankaj Soni, MRCPCH1, Amit Agrawal, MD2, Gaurav Jadon, MD3
                            1Department of Neonatology, Thumbay University Hospital, and Clinical Lecturer, Department of Clinical Sciences (Pediatric Neonatology), College of Medicine,
                            Gulf Medical University, Ajman, UAE; 2Department of Pediatrics, Gandhi Medical College, Bhopal, India; 3NMC Specialty Hospital, Dubai, UAE</h3>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Research
