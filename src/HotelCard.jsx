import React from 'react'
import hotel from './assets/hotel-4.jpg'

function HotelCard() {
  return (
    <div className='inline-block w-64 h-80 m-2 text-white font-mont'>
        <div >
            <div ><img src={hotel} alt="" className='rounded-t-2xl' /></div>
            <div className='bg-[#4D4D4D]  text-base p-4' >
                <h1>Shinagawa Prince Hotel</h1>
                <h1>Check in: 26.01.2025, 11:15 pm</h1>
                <h1>Check in: 28.01.2025, 11:15 am</h1>
            </div>
            <div className='bg-[#4D4D4D] rounded-b-2xl flex justify-around gap-11 p-41'>
                <h1 className='text-sm'>2 Nights</h1>
                <div className='flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#90EB61" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 400 400" xml:space="preserve" stroke="#fafafa">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M199.996,0C89.713,0,0,89.72,0,200s89.713,200,199.996,200S400,310.28,400,200S310.279,0,199.996,0z M199.996,373.77 C104.18,373.77,26.23,295.816,26.23,200c0-95.817,77.949-173.769,173.766-173.769c95.817,0,173.771,77.953,173.771,173.769 C373.768,295.816,295.812,373.77,199.996,373.77z"/> <path d="M272.406,134.526L169.275,237.652l-41.689-41.68c-5.123-5.117-13.422-5.12-18.545,0.003 c-5.125,5.125-5.125,13.425,0,18.548l50.963,50.955c2.561,2.558,5.916,3.838,9.271,3.838s6.719-1.28,9.279-3.842 c0.008-0.011,0.014-0.022,0.027-0.035L290.95,153.071c5.125-5.12,5.125-13.426,0-18.546 C285.828,129.402,277.523,129.402,272.406,134.526z"/> </g> </g> </g>

                    </svg>
                    <div>
                        <h1 className='text-sm text-[#90EB61]'>Confirmed</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelCard