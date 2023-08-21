import React from 'react'
import DarkTheme from '../DarkTheme/DarkTheme'

const Navbar = () => {
    return (
        <div className='h-14 w-screen fixed z-50 bg-white dark:bg-[#1e2125] flex items-center space-between drop-shadow-md'>
            <div className='flex items-center font-medium text-3xl'>
               
                <span className='h-10 my-auto ml-4 dark:text-white'>FlashCard Generator</span>
            </div>
            <DarkTheme />
        </div>
    )
}

export default Navbar
