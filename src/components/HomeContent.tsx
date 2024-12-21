"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
    useEffect(() => {
    AOS.init({
        duration:1000,
        once: true,
    });
    },[]);
    return(
     <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/bgimage.jpg')"}}>
        <div className="pl-0 md:pl-16 text-white text-center">
            <h1 className="text-6xl font-bold mt-4 drop-shadow-md" data-aos="fade-up">Welcome to the Watch World</h1>
            <p className="text-2xl mb-8">Your one-stop shop for the best watches</p>
            <button className="mt-6 px-2 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
        </div>

     </section>
    );
};

export default HomeContent;