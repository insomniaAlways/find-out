import { image } from "faker";
import React, { Fragment, useState } from "react";
import { Icon, Image, Grid, Button,Card, Placeholder, Container } from "semantic-ui-react";
import Carousel from "../../components/ecolife/carousel";

import ItemCard from "../../components/ecolife/item-card";
import Badgecard from "../../components/ecolife/badgecard";
import PromoContent from "../../components/ecolife/promo-content";
import ItemsCarousel from 'react-items-carousel';

const Popcat = props => {

    

    return(
        
        
            
                
           <a href="www.wikipedia.com">
            <div className="ui big image">
                <div
                className="ui active left"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    paddingLeft:'30px',
                    color:"grey", 
                    fontWeight:'500',
                    zIndex: 1,
                    paddingTop:'50px'
                }} >
                    <div className="content">Collection Name</div>
                </div>
                
                <div
                className="ui active left"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    paddingLeft:'30px',
                    color:"grey", 
                    fontSize:'14px',
                    zIndex: 1,
                    paddingTop:'80px'
                }} >
                    <div className="content">Products</div>
                </div>
                <div
                className="ui active left"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    paddingLeft:'30px',
                    color:"grey", 
                    fontSize:'14px',
                    zIndex: 1,
                    paddingTop:'110px'
                }} >
                    <a>Shop now</a>
                </div>

                <img
                src="/assets/images/thumb-1.jpg"
                className="ui floated image"
                alt="alt"
                />
            </div>
            </a>
                
           
                
       
        

  
    );
}
export default Popcat;
