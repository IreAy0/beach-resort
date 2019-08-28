import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan,FaBeer} from "react-icons/fa";
export default class Service extends 
Component {
state={
    services:[
        {
            icon: <FaCocktail />,
            title:"free cocktails",
            info: " A dear was once and evil ye been or to, flow parting was but was tear carnal for along been.."
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: " A dear was once and evil ye been or to, flow parting was but was tear carnal for along been.."
        },
        {
            icon: <FaShuttleVan />,
            title: "free Rides",
            info: " A dear was once and evil ye been or to, flow parting was but was tear carnal for along been.."
        },
        {
            icon: <FaBeer />,
            title: "free beer",
            info: " A dear was once and evil ye been or to, flow parting was but was tear carnal for along been.."
        },
    ]
}



    render() {
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                   {this.state.services.map((item, index)=>{
                       return(
                           <article key={index} className="service">
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                           </article>
                       )
                   })}
               </div>
            </section >
        )
        
    }
}
