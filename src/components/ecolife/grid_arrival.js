import React, { Fragment, useState } from "react";
import { Card, Grid, GridRow } from "semantic-ui-react";

import ItemCard from "../../components/ecolife/item-card";
import Badgecard from "../../components/ecolife/badgecard";

import ItemsCarousel from 'react-items-carousel';


const GridArrivals = props => {

    const [activeItemIndex_3, setActiveItemIndex_3] = useState(0);
    const chevronWidth = 40;

    return(
        <>
        
        <div className="ui grid " style={{marginTop:'30px', float:'left', width:'-webkit-fill-available'}}>
            
            
                <div className="column" style={{width:'fit-content'}}>
                 
                    <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh",marginLeft:'10px' }}>
                        New Arrivals
                    </div>
                    <div className="text-color-grey margin-top-ten" style={{ marginLeft:'10px',width:'auto' }}>
                         Add Popular Categories to weekly line up
                    </div>
                   
                    
                    <ItemCard style={{height:'50rem', width:'29rem'}}/>
                </div>
                <div className="column  margin-no" style={{width:'auto'}}>
                
               
                    <div className="row">
                        <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh" }}>
                            New Arrivals
                        </div>
                        <div className="text-color-grey margin-top-ten" >
                            Add Popular Categories to weekly line up
                        </div>
                    </div>

                    <div className="four column row" style={{marginTop:'13px'}}>
                       
                        <div className="ui grid margin-no padding-no"  style={{gridColumnGap:'28px'}} >
                            <div className="column padding-no" style={{width:'fit-content'}}>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                            </div>
                            <div className="column padding-no" style={{width:'fit-content'}}>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                            </div>
                            <div className="column padding-no" style={{width:'fit-content'}}>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                            </div>
                            <div className="column padding-no" style={{width:'fit-content'}}>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                                <ItemCard style={{height:'28rem', width:'14.5rem'}}/>
                            </div>   
                            
                           
                        </div> 
                        
                    </div>


                    
                </div>
            
                
                 
                 

            
                
        </div>
        
        
              






        </>
    );
}

export default GridArrivals;