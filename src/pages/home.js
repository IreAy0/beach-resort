import React from 'react';
import Hero from "../components/Hero.js";
import  Banner  from '../components/Banner.js';
import { Link } from 'react-router-dom';
import Services from '../components/Service'
import FeaturedRoom from "../components/FeaturedRoom";
export default function home(){
    return(
       <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
               <Link to='/rooms' className="btn-primary" >
                   Our Rooms
               </Link>
            </Banner> 
        </Hero>
       <Services />
       <FeaturedRoom />

        </>
    );
}