import React from 'react'
import  Banner  from "../components/Banner";
import Hero from "../components/Hero.js";
import { Link } from "react-router-dom";
export default function error() {
    return (
        <Hero>
            <Banner title="404" subtitle="Error">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
            </Hero>
    )
}
