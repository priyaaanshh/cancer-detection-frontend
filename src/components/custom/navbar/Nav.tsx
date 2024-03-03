"use client";
import React from 'react'
import ThemeToggle from '../toggleTheme/toggle'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import CommandDemo from '../command/command';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='flex justify-between items-center shadow w-full px-8 py-2 fixed top-0 bg-background/95 backdrop-blur-[3px]'>
            <div className='flex items-center justify-start gap-3'>
                <Button variant="ghost" onClick={() => { router.push('/') }}>Home</Button>
            </div>
            <div className='relative flex items-center justify-start gap-3 max-w-96 w-full h-[45px]'>
                <div className='absolute top-0 w-full'>
                    <CommandDemo />
                </div>
            </div>
            <div className='flex items-center justify-start gap-3'>
                <Button variant="ghost" onClick={() => { router.push('/login') }}>Login</Button>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar
