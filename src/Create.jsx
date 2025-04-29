import { useState } from 'react'
import './App.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom';

function Create() {
    const [count, setCount] = useState(0)
      const [value ,setvalue] = useState(new Date())
    
      const [dispalyCalendar , setDisplayCalendar] = useState(false)
    
      const onChangeCalendar = (val)=>{
        setvalue(val)
        setDisplayCalendar(false)
      }
    
      const ShowCalendar = ()=>{
        console.log("hello");
        
        setDisplayCalendar(!dispalyCalendar)
    
    
      }
  return (
    <>
      <div className='bg-w-full min-h-screen bg-black'>

        <div className='mx-1 '>

        
        <div className=' p-4'>
            <h2 className='text-white font-mont font-bold text-lg'>Plan Your Journey, Your Way!</h2>
            <h4 className='text-white font-mont text-[10px] opacity-80'>Let’s create your personalised travel experience</h4>
        </div>

        <div>

        <div className='px-4 pb-2 pt-4'>
            <h2 className='text-white font-mont font-medium text-sm'>Where would you like to go?</h2>
        </div>
        
        <div className='px-4'>

          <div className='w-70  sm:w-[20%] h-[42px] bg-[#333333] flex rounded-lg '>
            <div className='flex justify-center items-center px-2 gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="26px" viewBox="0 0 24 24" fill="none" >

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

              </svg>

              <input type="text" className=' bg-[#333333] w-[100%] placeholder:font-mont placeholder:text-white focus:outline-none focus:ring-0 text-white font-mont placeholder:text-sm' placeholder='Enter Destination'/>
            </div>
          </div>
          
        </div>


        <div className='px-4 pb-2 pt-6'>
            <h2 className='text-white font-mont font-medium text-sm'>How long will you stay?</h2>
        </div>
        
        <div className='px-4'>

          <div className='w-70 h-[42px] sm:w-[20%] bg-[#333333] flex rounded-lg relative' onClick={ShowCalendar}>
            <div className='flex justify-between items-center px-2 gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="26px" viewBox="0 0 24 24" fill="none">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H6V2ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H19C19.5523 5 20 5.44772 20 6V9H4V6C4 5.44772 4.44772 5 5 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16ZM4 11V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V11H4Z" fill="#ffffff"/> </g>

              </svg>
 
                <div className='flex justify-around '>
                <h1 className='text-sm w-[100%] font-mont bg-[#333333] text-white ' >
                  Select Duration
                </h1>
                <div className='absolute right-2'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fffafa" height="15px" width="15px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve" stroke="#fffafa">

                <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                <g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/> </g>

                </svg>
                </div>
              </div>

            </div>
            </div>

                {dispalyCalendar && ( <Calendar onChange={onChangeCalendar} value={value} />)}

            </div>
          </div>

          <div className='px-4 pb-2 pt-4'>
            <h2 className='text-white font-mont font-medium text-sm'>Who are you traveling with?</h2>
        </div>
        
        <div className='px-4 flex flex-wrap gap-x-2 gap-y-2'>
          <div className='bg-[#333333] h-11 w-[135px] font-mont text-white flex justify-center items-center rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="-20 0 190 190" fill="none">

                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                  <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M94.11 109.87L86.11 85.87L84.82 94L91.71 147.42C91.71 147.42 84.18 149.95 82.85 143.29C81.71 137.56 76.12 112.06 76.12 112.06L73.2 111.89C73.2 111.89 68 135.1 66.42 142.72C64.9 150.19 57.15 147.14 57.15 147.14L64.93 91.36L63.85 85.59L56.05 110.44C56.05 110.44 49.05 110.44 51.05 102.36C53.11 94.03 58.25 72.8 58.25 72.8C66.25 64.8 83.78 64.8 91.69 72.8C91.69 72.8 97.5 96.52 99.02 102.8C100.54 109.08 94.11 109.87 94.11 109.87ZM66.82 53.5C66.82 40.88 85.03 43.11 83.62 54.35C82.27 65.17 66.82 66.29 66.82 53.5Z" fill="#ffffff"/> </g>

            </svg>
            <h1>Solo</h1>
          </div>
          <div className='bg-[#333333] h-11 w-[135px] font-mont text-white flex justify-center items-center rounded-lg gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve" fill="#ffff">

            <g id="SVGRepo_bgCarrier" stroke-width="0"/>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

            <g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M128.082,97.44c26.912,0,48.716-21.821,48.716-48.716C176.798,21.804,154.994,0,128.082,0 c-26.921,0-48.724,21.804-48.724,48.724C79.358,75.62,101.161,97.44,128.082,97.44z"/> <path class="st0" d="M361.779,97.44c26.912,0,48.725-21.821,48.725-48.716C410.504,21.804,388.692,0,361.779,0 c-26.916,0-48.72,21.804-48.72,48.724C313.059,75.62,334.863,97.44,361.779,97.44z"/> <path class="st0" d="M449.178,341.339c2.836-3.633,4.605-8.146,4.605-13.113V164.461c0-23.607-25.687-49.295-49.294-49.295h-42.71 h-19.664c-25.859,0-49.337,15.076-60.096,38.59l-37.089,81.032l-37.092-81.032c-10.755-23.515-34.236-38.59-60.092-38.59h-19.664 H85.368c-23.607,0-49.291,25.688-49.291,49.295v163.765c0,11.804,9.56,21.376,21.367,21.376c5.81,0,0,0,14.916,0l8.125,139.654 c0,12.558,10.189,22.743,22.752,22.743c5.298,0,15.071,0,24.844,0c9.769,0,19.547,0,24.845,0c12.563,0,22.751-10.185,22.751-22.743 l8.12-139.654l3.574-131.333l42.823,93.573c1.292,2.81,6.283,9.27,14.543,9.27c8.686,0,13.632-6.46,14.928-9.27l42.818-93.573 l2.043,75.158c-9.673,11.846-53.514,68.38-58.921,126.324h70.784l10.688,72.592c0,9.152,7.433,16.577,16.581,16.577 c3.876,0,10.99,0,18.121,0c7.122,0,14.245,0,18.104,0c9.161,0,16.593-7.425,16.593-16.577l10.688-72.592h68.758 C473.288,391.64,461.611,363.856,449.178,341.339z"/> </g> </g>

            </svg>
            <h1>Couple</h1>
          </div>
          <div className='bg-[#333333] h-11 w-[135px] font-mont text-white flex justify-center items-center rounded-lg gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M78.642,118.933c22.879,0,41.415-18.551,41.415-41.414c0-22.888-18.536-41.423-41.415-41.423 c-22.887,0-41.422,18.535-41.422,41.423C37.219,100.383,55.755,118.933,78.642,118.933z"/> <path class="st0" d="M255.706,228.731v0.062c0.101,0,0.193-0.031,0.294-0.031c0.101,0,0.194,0.031,0.294,0.031v-0.062 c15.563-0.317,28.082-12.976,28.082-28.601c0-15.648-12.52-28.299-28.082-28.617v-0.062c-0.1,0-0.193,0.031-0.294,0.031 c-0.101,0-0.193-0.031-0.294-0.031v0.062c-15.563,0.318-28.082,12.969-28.082,28.617 C227.624,215.754,240.143,228.413,255.706,228.731z"/> <path class="st0" d="M433.358,118.933c22.887,0,41.423-18.551,41.423-41.414c0-22.888-18.536-41.423-41.423-41.423 c-22.879,0-41.414,18.535-41.414,41.423C391.944,100.383,410.48,118.933,433.358,118.933z"/> <path class="st0" d="M512,319.675V180.463c0-20.076-21.834-41.91-41.903-41.91h-5.799l-28.818,28.818l-28.214-28.214 c-17.839,2.609-33.564,13.665-41.918,30.018l-33.494,97.967c-1.154,2.245-3.298,3.84-5.792,4.281 c-2.493,0.442-5.048-0.31-6.914-2.036l-20.835-18.04c-6.232-5.769-14.409-8.974-22.902-8.974H256h-19.41 c-8.494,0-16.67,3.206-22.903,8.974l-20.835,18.04c-1.866,1.726-4.422,2.478-6.914,2.036c-2.494-0.442-4.638-2.036-5.792-4.281 l-33.494-97.967c-9.6-18.791-28.926-30.622-50.032-30.622H78.216H41.903C21.834,138.553,0,160.387,0,180.463v139.211 c0,10.035,8.13,18.172,18.165,18.172c4.939,0,0,0,12.682,0l6.906,118.724c0,10.677,8.664,19.333,19.341,19.333 c4.506,0,12.814,0,21.122,0c8.307,0,16.615,0,21.121,0c10.677,0,19.341-8.656,19.341-19.333l6.906-118.724l-0.086-84.765 c0-1.339,0.914-2.493,2.222-2.818c1.309-0.31,2.648,0.309,3.26,1.502l26.573,65.401c3.205,6.256,9.152,10.654,16.074,11.886 c6.921,1.23,14.021-0.844,19.186-5.614l25.426-18.729c0.852-0.782,2.083-0.983,3.136-0.542c1.061,0.472,1.742,1.518,1.742,2.663 l0.094,73.508l4.777,82.187c0,7.387,6,13.379,13.395,13.379c3.112,0,8.865,0,14.618,0c5.753,0,11.506,0,14.618,0 c7.394,0,13.394-5.992,13.394-13.379l4.777-82.187l0.093-73.508c0-1.146,0.681-2.192,1.742-2.663 c1.053-0.442,2.284-0.24,3.136,0.542l25.426,18.729c5.164,4.77,12.264,6.844,19.187,5.614c6.921-1.231,12.868-5.629,16.073-11.886 l26.572-65.401c0.612-1.192,1.951-1.812,3.26-1.502c1.308,0.325,2.222,1.479,2.222,2.818l-0.031,32.332l-27.881,86.648 c-0.659,2.051-0.302,4.296,0.967,6.039c1.27,1.742,3.298,2.772,5.451,2.772h23.91l4.405,75.699 c0,10.677,8.664,19.333,19.341,19.333c4.506,0,12.814,0,21.121,0c8.308,0,16.615,0,21.122,0c10.677,0,19.34-8.656,19.34-19.333 l4.406-75.699h26.418c2.152,0,4.181-1.03,5.451-2.772c1.27-1.743,1.626-3.988,0.968-6.039L500.1,336.67 C507.037,334.107,512,327.495,512,319.675z M85.424,159.087v74.592H63.389v-74.592H85.424z"/> </g> </g>

              </svg>
            <h1>Family</h1>
          </div>
          <div className='bg-[#333333] h-11 w-[135px] font-mont text-white flex justify-center items-center rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" id="Capa_1" width="25px" height="25px" viewBox="0 0 122.562 122.562" xml:space="preserve" stroke="#ffffff">

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M59.375,14.197c0.749,6.289,6.094,11.168,12.583,11.168c7.005,0,12.683-5.679,12.683-12.683 C84.641,5.678,78.963,0,71.958,0c-6.579,0-11.986,5.011-12.617,11.424c0.056,0.517,0.088,1.041,0.088,1.573 C59.428,13.402,59.407,13.801,59.375,14.197z"/> <path d="M71.978,25.815c-1.275-0.01-3.083,0.25-3.083,0.25c-0.011,0.002-0.021,0.003-0.029,0.005 c-2.404,0.575-4.738,1.81-6.54,3.548c0.58,0.043,1.166,0.072,1.771,0.072c4.424,0,9.026-1.601,10.318-2.099 c0,0,1.405-0.707,1.067-1.385c-0.122-0.033-0.241-0.032-0.363-0.062C75.118,26.145,73.254,25.824,71.978,25.815z"/> <path d="M84.344,34.701c2.106-2.477,1.697-5.343,0.358-7.084c-1.66-2.155-4.752-2.559-6.902-0.9 c-0.672,0.515-1.173,1.169-1.493,1.889c-3.19,1.765-13.542,4.682-21.971,0.128c-0.163-0.088-0.33-0.164-0.496-0.232 c-1.56-1.154-3.372-1.99-5.227-2.433c-0.011-0.002-0.021-0.003-0.032-0.005c0,0-1.598-0.257-3.04-0.252 c-1.439,0.004-3.179,0.287-3.179,0.287c-1.585,0.39-3.143,1.06-4.533,1.973c-0.169,0.079-0.345,0.145-0.507,0.245 c-6.228,3.819-25.176,15.44-11.283,40.974c0.893,1.641,2.582,2.571,4.328,2.571c0.796,0,1.603-0.194,2.349-0.601 c0.386-0.207,0.726-0.465,1.027-0.752l0.007,43.266l-0.003,2.961c-0.002,3.214,2.557,5.82,5.77,5.824h0.005 c3.211,0,5.861-2.603,5.863-5.813l-0.008-40.444c0.047,0,0.094,0.006,0.143,0.006c0.229,0,0.458-0.019,0.685-0.029l-0.011,12.76 l0.016,0.008v27.694c0,3.214,2.604,5.819,5.818,5.819c3.213,0,5.819-2.604,5.819-5.819V72.283L57.85,69.6 c0-0.268-0.023-0.527-0.06-0.785c0.451-1.137,0.708-2.372,0.708-3.697v-24.66c2.086,0.381,4.169,0.562,6.199,0.562 C73.815,41.02,81.865,37.611,84.344,34.701z M32.538,59.962c-2.303-6.019-1.881-10.522,0-14.078V59.962z"/> <circle cx="45.518" cy="12.682" r="12.682"/> <path d="M97.512,15.637c-2.667-0.514-5.247,1.229-5.769,3.895c-0.748,3.843-3.828,14.401-9.206,18.808 c-4.037,2.596-10.966,4.785-18.4,4.785c-1.471,0-2.945-0.091-4.41-0.27c0,0-0.408,23.324-0.349,24.214 c0.058,0.89,0.208,1.496,0.307,1.745c-0.034,0.256-0.058,0.515-0.058,0.781l0.002,47.146c0,3.213,2.605,5.819,5.818,5.818 c3.216,0,5.819-2.605,5.819-5.819l-0.003-40.462c0.23,0.011,0.461,0.029,0.692,0.029c0.045,0,0.091-0.004,0.138-0.006 l-0.002,40.439c0,3.214,2.604,5.819,5.818,5.819c3.213,0,5.818-2.604,5.818-5.819l0.003-47.77 c1.123-0.502,0.998-2.586,0.998-2.586l-0.05-17.257l3.021-2.321c9.946-7.114,13.354-23.554,13.711-25.41 C101.926,18.729,100.18,16.153,97.512,15.637z"/> </g> </g> </g>

              </svg>
            <h1>Friends</h1>
          </div>
        </div>

        <div className='px-10 pt-32 '>
        <Link to="/Dashboard">
          <button className='w-[300px] h-[44px] bg-[#3643FB] rounded-md font-mont text-white font-semibold'>Continue</button>
          </Link>
        </div>
       </div>
      </div>
    </>
  )
}

export default Create