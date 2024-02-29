import React from 'react'
import { Link } from 'react-router-dom'
import face from '../../assets/images/nerd-face.jpg'
import Accordion from '../commons/AccordionComp'
import FullPageTabs from '../commons/FullPageTabs'

const JobSeekerLayout = () => {
    return (
        <div className='w-full'>
            <div className='flex py-8 px-20 justify-between gap-6'>
                <div className='w-[70%]'>
                    <div className="lg:border  border-2 border-solid border-gray-600 rounded-xl flex items-center mb-6">
                        <i className="fa-solid fa-magnifying-glass text-green-600 hover:text-green-600 mr-2 ml-2 scale-125"></i>
                        <input
                            className="outline-none bg-transparent p-1.5 hidden lg:flex w-full focus:shadow-green-100"
                            type="text"
                            placeholder="Search for jobs"
                        />
                    </div>
                    {/* <div className='text-black font-bold mt-2 mb-2'>
                        Jobs You Might Like
                    </div> */}
                    <div>
                        <FullPageTabs />
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-[30%] h-full px-6'>
                    <div className='bg-green-50 rounded-3xl w-full p-6 mx-auto'>
                        <div className='flex w-[296px] h-[80px] gap-4 mx-auto'>
                            <img src={face} alt='users_photo' className=' w-[60px] h-[60px] rounded-full' />
                            <div className='flex flex-col w-[164px] h-[64px]'>
                                <span className='text-3xl'>John Doe</span>
                                <span>Junior MERN Stack...</span>
                            </div>
                        </div>
                        <Link to="#" className='underline text-sm font-bold text-green-600' ><span className='mb-2 block'>Complete Your Profile</span></Link>
                        <div className='flex justify-between'>
                            <div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-200" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div class="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap dark:bg-green-600 transition duration-500 w-[60%]">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 px-4 pb-4 rounded-3xl'>                        
                            <Accordion />                        
                    </div>
                    <div className='bg-green-50 px-8 py-8 rounded-3xl'>
                        <div className='mb-4'>
                            <Link className='underline mr-4 text-base font-bold '>UpWork Academy</Link><i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                        <div className='mb-4'>
                            <Link className='underline mr-4 text-base font-bold '>Direct Contracts</Link><i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                        <div className='mb-4'>
                            <Link className='underline mr-4 text-base font-bold '>Get Paid</Link><i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                        <div className='mb-4'>
                            <Link className='underline mr-4 text-base font-bold '>Community & Forums</Link><i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                        <div className='mb-4'>
                            <Link className='underline mr-4 text-base font-bold '>Help Center</Link><i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JobSeekerLayout