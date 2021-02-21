import React, { Fragment, useState } from "react";
import { Card, Grid, GridRow } from "semantic-ui-react";

import ItemCard from "../../components/ecolife/item-card";
import Badgecard from "../../components/ecolife/badgecard";

import ItemsCarousel from 'react-items-carousel';


const GridArrivals = props => {

    const [activeItemIndex_3, setActiveItemIndex_3] = useState(0);
    const chevronWidth = 40;

    return(
        
        <div className="ui grid" style={{marginTop:'30px', float:'left'}}>
                <div className="two column row">
                
                  <div className="column" >
                 
                  <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh",marginLeft:'10px' }}>New Arrivals</div>
                  <div className="text-color-grey margin-top-ten" style={{ marginLeft:'10px' }}>
                    Add Popular Categories to weekly line up
                  </div>
                   
                    <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex_3}
                    activeItemIndex={activeItemIndex_3}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>

                </ItemsCarousel>
               
                  </div>
                  <div className="column">
                  <div className="text-size-large text-weight-medium" style={{ marginTop:"5vh",marginLeft:'10px' }}>New Arrivals</div>
                  <div className="text-color-grey margin-top-ten" style={{ marginLeft:'10px' }}>
                    Add Popular Categories to weekly line up
                  </div>
                    <ItemCard/>
                    <ItemCard/>
                  </div>
                </div>
              </div>







    );
}

export default GridArrivals;