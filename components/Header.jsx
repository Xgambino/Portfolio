"use client";
import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import Logo from './Logo';
import Nav from './Nav';

const links = [
    {
        name: "home",
    },
    {
        name: "about",
    },
    {
        name: "journey",
    },
    {
        name: "work",
    },
    {
        name: "contact"
    },
];

const Header = () => {
  return (
    <header className='w-full absolutee py-8 xl:py-[48px] z-30'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row items-center gap-4 lg:justify-between'>
                {/* logo  */}
                <Logo light={true}/>
                {/* nav & socials  */}
                <Nav/>
                <div>socials</div>
            </div>
        </div>
    </header>
  )
}

export default Header