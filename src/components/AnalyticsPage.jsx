import React from 'react'
import Navbar from './Navbar'
import TopNavbar from './TopNavbar'

const AnalyticsPage = () => {
    return (
        <div>
            <TopNavbar />
            <div className='flex'>

                <Navbar />

                <div className="pt-[5rem] flex gap-3 flex-wrap justify-center items-center">

                    <div
                        className="flex w-[20rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold">Ph Sensor</span>
                            <span className="text-3xl font-extrabold">5.49</span>
                        </div>
                    </div>

                    <div
                        className="flex w-[20rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold">Water Level Sensor</span>
                            <span className="text-3xl font-extrabold">20mm</span>
                        </div>
                    </div>

                    <div
                        className="flex w-[20rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold">Conductivity Sensor</span>
                            <span className="text-3xl font-extrabold">0.28 mS/cm</span>
                        </div>
                    </div>

                    <div
                        className="flex w-[20rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold">Temperature Sensor</span>
                            <span className="text-3xl font-extrabold">22°C</span>
                        </div>
                    </div>

                    <div
                        className="flex w-[20rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>

                        <div className="flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold">Light Sensor</span>
                            <span className="text-3xl font-extrabold">ON</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AnalyticsPage