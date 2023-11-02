import React from 'react'

import graph from "../../public/demo-graph.png"

const DataPage = ({ pagename, value }) => {
    return (
        <div className='w-full p-4 flex items-center flex-col'>

            <div className='text-blue-950 w-full flex items-center h-12 justify-center font-extrabold text-3xl rounded-t-xl'>{pagename}</div>
            <div></div>

            <div className='flex justify-center p-4'>

                <div
                    className="flex w-[30rem] h-[10rem] p-2 rounded-xl text-white  bg-gradient-to-r from-indigo-500 to-indigo-200 gap-5 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>

                    <div className="flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold">{pagename}</span>
                        <span className="text-3xl font-extrabold">{value}</span>
                    </div>
                </div>
            </div>

            <img src={graph} alt="graph" className='h-[20rem] w-[50rem] mt-8'/>


        </div>
    )
}

export default DataPage