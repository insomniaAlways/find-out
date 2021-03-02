import React, { Fragment, useState } from "react";
import { Card, Grid, GridRow } from "semantic-ui-react";

import ItemCard from "../../components/ecolife/item-card";
import Badgecard from "../../components/ecolife/badgecard";

import ItemsCarousel from 'react-items-carousel';


const GridArrivals = props => {

    return(
        <>

        <div className="ui two column grid">
            <div className="five wide column padding-no">
                <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh",marginLeft:'10px' }}>
                    New Arrivals
                </div>
                <div className="text-color-grey margin-top-ten" style={{ marginLeft:'10px',width:'auto' }}>
                    Add Popular Categories to weekly line up
                </div>
            </div>
            <div className="eleven wide column padding-no">
                <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh",marginLeft:'10px' }}>
                    New Arrivals
                </div>
                <div className="text-color-grey margin-top-ten" style={{ marginLeft:'10px',width:'auto' }}>
                    Add Popular Categories to weekly line up
                </div>
            </div>

            <div className="five wide column">
                <ItemCard style={{height:'50rem', width:'32rem'}}/>
            </div>

            <div className="eleven wide column">
                <div className="ui four column grid">
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                    <div className="column">
                        <ItemCard/>
                    </div>
                </div>
            </div>
        </div>
        
        
              






        </>
    );
}

export default GridArrivals;