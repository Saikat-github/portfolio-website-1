import React, { useState } from 'react'
import mywork_data from '../../assets/mywork_data';
import { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';



const MyWork2 = () => {

    return (
        <div className="mywork flex flex-col items-center py-20" id='mywork'>
            <h1 className='px-7 text-6xl font-semibold text-center my-10'>My Latest Work</h1>
            <div className="mywork-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-6 md:mx-12 mt-4" >
                {mywork_data.map((work, idx) => {
                    return <div
                        key={idx}
                        className={"bg-white/[0.07] shadow-xl shadow-white/10 border border-white/10  flex flex-col justify-center items-center p-4 gap-6 mt-6 rounded-xl"}
                    >
                        <p className='text-lg font-bold'>{work.name}</p>
                        <ul className='flex gap-2 flex-wrap'>
                            {
                                work.technologies.map((tech, idx) => {
                                    return <p key={idx} className='py-1 px-4 bg-white/10 text-xs rounded-full'>{tech}</p>
                                })
                            }
                        </ul>
                        <img src={work.img} alt="" className='w-96 transition duration-300 object-contain rounded-xl' />
                        <p className='text-xs'>{work.info}</p>

                        {/* Buttons */}
                        <div className="flex w-full justify-between mt-4 gap-4 text-sm">
                            <a
                                href={work.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 rounded-full flex items-center gap-1"
                            >
                                See Live
                                <ExternalLink className='w-4' />
                            </a>
                            <a
                                href={work.sourceCode}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 rounded-full flex items-center gap-1"
                            >
                                Source code
                                <ExternalLink className='w-4' />
                            </a>
                        </div>
                    </div>
                })}
            </div>
            <p
                className="flex gap-1 px-8 py-2 border border-white/20 shadow-xl shadow-white/10 rounded-full my-20 text-xs transition-all duration-300"
            >
                Want to see more of my works? Please visit my <a
                    href="https://github.com/Saikat-github"
                    target="_blank"
                    rel="noreferrer"
                    className='text-blue-600'
                >Github</a>
            </p>
        </div >
    )
}

export default MyWork2