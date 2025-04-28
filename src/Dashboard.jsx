import React from 'react'
import tokyo from './assets/tokyo.webp'
import aeroplane from './assets/aeroplane.webp'
import DragScroll from './DragScroll'
import DragScrollDate from './DragScrollDate'

function Dashboard() {
  return (
    <div className='bg-w-full min-h-screen bg-black'>
        <div className='mx-1 px-2'>
            <div className='flex justify-between'>

            <div className='font-mont text-white pt-3 '>
                <h1 className='font-semibold text-xl'>Hello Chhavi!</h1>
                <h3 className='text-xs'>Ready for the trip?</h3>
            </div>

            <div className='w-fit font-mont text-white pt-3 '>
                <h1 className='bg-[#FF7339] p-2 px-[15px] text-xl rounded-full'>C</h1>
            </div>
            </div>

            <div className='font-mont text-white pt-5'>
                <h1>Your Upcoming Trip</h1>
            </div>
            <div className='w-72 h-56 pt-4 relative'>
               
            <div className="relative w-fit">
                <img src={tokyo} className="rounded-2xl" />

                
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden backdrop-blur-xl"
                    style={{
                    WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, rgba(0,0,0,0.2) 60%, transparent 10%)",
                    maskImage: "linear-gradient(to top, black 0%, black 5%, rgba(0,0,0,0.2) 60%, transparent 10%)",
                    }}
                ></div>
                </div>
                

                <div className='flex justify-around gap-16 absolute top-6 left-3'>
                    <div className='font-mont text-white'>
                        <h1 className='text-5xl font-extrabold'>TOKYO</h1>
                        <h3 className='text-sm'>27.01.2025 - 02.02.2025</h3>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier">

                        <line x1="7" y1="17" x2="17" y2="7"/>

                        <polyline points="7 7 17 7 17 17"/>

                        </g>

                    </svg>
                    </div>
                </div>

                <div>
                <div className='text-white font-mont flex justify-center gap-4  rounded-2xl absolute bottom-7 left-4'>
                    <div className='flex  items-center gap-2 '>
                        <div className='bg-[#292929] p-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#D1F462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

                        </svg>
                        </div>
                        <div >
                            <h1 className='text-[10px]'>8 Days</h1>
                            <h1 className='text-[7px]'>Duration</h1>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div className='bg-[#292929] p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">

                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" fill="#D1F462"/> </g>

                            </svg>
                        </div>
                        <div >
                            <h1 className='text-[10px]'>4 (2M,2F)</h1>
                            <h1 className='text-[7px]'>Group Size</h1>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div className='bg-[#292929] p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path d="M5.5 8.25C5.08579 8.25 4.75 8.58579 4.75 9C4.75 9.41421 5.08579 9.75 5.5 9.75V8.25ZM8.5 9.75C8.91421 9.75 9.25 9.41421 9.25 9C9.25 8.58579 8.91421 8.25 8.5 8.25V9.75ZM10.5 8.25C10.0858 8.25 9.75 8.58579 9.75 9C9.75 9.41421 10.0858 9.75 10.5 9.75V8.25ZM16.5 9.75C16.9142 9.75 17.25 9.41421 17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25V9.75ZM12.5 11.25C12.0858 11.25 11.75 11.5858 11.75 12C11.75 12.4142 12.0858 12.75 12.5 12.75V11.25ZM16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25V12.75ZM14.5 14.25C14.0858 14.25 13.75 14.5858 13.75 15C13.75 15.4142 14.0858 15.75 14.5 15.75V14.25ZM16.5 15.75C16.9142 15.75 17.25 15.4142 17.25 15C17.25 14.5858 16.9142 14.25 16.5 14.25V15.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM8.5 12.75C8.91421 12.75 9.25 12.4142 9.25 12C9.25 11.5858 8.91421 11.25 8.5 11.25V12.75ZM5.5 14.25C5.08579 14.25 4.75 14.5858 4.75 15C4.75 15.4142 5.08579 15.75 5.5 15.75V14.25ZM8.5 15.75C8.91421 15.75 9.25 15.4142 9.25 15C9.25 14.5858 8.91421 14.25 8.5 14.25V15.75ZM5.5 9.75H8.5V8.25H5.5V9.75ZM10.5 9.75H16.5V8.25H10.5V9.75ZM12.5 12.75H16.5V11.25H12.5V12.75ZM14.5 15.75H16.5V14.25H14.5V15.75ZM5.5 12.75H8.5V11.25H5.5V12.75ZM5.5 15.75H8.5V14.25H5.5V15.75ZM8.25 17V7H6.75V17H8.25ZM8.25 7C8.25 6.30964 8.80964 5.75 9.5 5.75V4.25C7.98122 4.25 6.75 5.48122 6.75 7H8.25ZM9.5 5.75H17.5V4.25H9.5V5.75ZM17.5 5.75C18.1904 5.75 18.75 6.30964 18.75 7H20.25C20.25 5.48122 19.0188 4.25 17.5 4.25V5.75ZM18.75 7V17H20.25V7H18.75ZM18.75 17C18.75 17.6904 18.1904 18.25 17.5 18.25V19.75C19.0188 19.75 20.25 18.5188 20.25 17H18.75ZM17.5 18.25H9.5V19.75H17.5V18.25ZM9.5 18.25C8.80964 18.25 8.25 17.6904 8.25 17H6.75C6.75 18.5188 7.98122 19.75 9.5 19.75V18.25Z" fill="#D1F462"/> </g>

                        </svg>
                        </div>
                        <div >
                            <h1 className='text-[10px]'>14</h1>
                            <h1 className='text-[7px]'>Activities</h1>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <div className='pt-4 '>
                <div className='h-[124px] w-[285px] bg-[#3643FB] rounded-2xl flex justify-center items-center font-mont text-white relative' >
                    <div className='h-[112px] w-[270px] bg-[#313DDF] rounded-2xl pl-2'>
                        <div className=' flex justify-between '>
                            <div>
                                <h1 className='text-base'>Flight Details</h1>
                                <h1 className='text-xs'>26.01.2025, 10:50 am</h1>
                            </div>
                            <div className='pr-2'>
                                <h1 className='text-xs underline text-[#D1F462]'>See all</h1>
                            </div>
                        </div>
                        <div className='flex pt-7 gap-2'>
                            <div>
                                <h1 className='text-base'>DEL</h1>
                                <h1 className='text-xs'>Delhi, India</h1>
                            </div>

                            <div className='flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve" stroke="#ffffff">

                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                <g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/> </g>

                                </svg>
                            </div>

                            <div>
                                <h1 className='text-base'>NRT</h1>
                                <h1 className='text-xs'>Narita, Tokyo</h1>
                            </div>
                        </div>
                    </div>

                    <img src={aeroplane} alt="" srcset="" className='absolute top-0 h-28 right-[0.7px]' />


                </div>

                
            </div>

            <div className='pt-4 font-mont text-white flex items-center justify-around gap-11'>
                    <h1 className='text-xl'>
                    Accomodation
                    </h1>
                    <h1 className='text-xs underline text-[#D1F462]'>See all</h1>
            </div>
            <div className='pt-4'>
                    <DragScroll/>
            </div>

            <div className='pt-4 font-mont text-white flex items-center justify-around gap-11'>
                    <h1 className='text-xl'>
                    Activities
                    </h1>
                    <h1 className='text-xs underline text-[#D1F462]'>See all</h1>
            </div>

            <div className='h-[130px] w-[300px] bg-[#333333] rounded-2xl font-mont p-4'>
                    <div className='flex items-center gap-2'>
                        <div className='inline-block rounded-lg px-4 py-2 bg-[#D3F462] text-[#333333] font-semibold'> 
                            <h1 className='text-[10px]'>Day Plan</h1>
                        </div>
                        <div>
                            <h1 className='text-[#D3F462] bg-[#292929] border border-[#D3F462] rounded-lg px-4 py-2 text-[10px]'>14 Activities</h1>
                        </div>
                    </div>
                    <div>
                    <DragScrollDate/>
                    </div>
            </div>  
        </div>
    </div>
  )
}

export default Dashboard