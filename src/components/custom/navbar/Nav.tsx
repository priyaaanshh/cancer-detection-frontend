"use client";
import React from 'react'
import ThemeToggle from '../toggleTheme/toggle'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='flex w-full fixed top-0 bg-background/70 backdrop-blur-[3px] border-b shadow'>
            <div className='flex justify-between items-center w-full px-8 py-2 '>
                <div className='text-md sm:text-xl cursor-pointer px-4 py-1' onClick={() => { router.push("/") }}>
                    Cancer Detection Model
                </div>

                <div className='flex items-center justify-start gap-3'>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar
