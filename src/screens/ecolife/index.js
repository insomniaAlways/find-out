import React, { Fragment, useState } from "react";
import { Card, Grid, GridRow } from "semantic-ui-react";
import Carousel from "../../components/ecolife/carousel";
import Popcat from "../../components/ecolife/popularcategories"
import ItemCard from "../../components/ecolife/item-card";
import Badgecard from "../../components/ecolife/badgecard";
import PromoContent from "../../components/ecolife/promo-content";
import ItemsCarousel from 'react-items-carousel';
import GridArrivals from '../../components/ecolife/grid_arrival';
import HorizontalCard from '../../components/ecolife/horizontal_cards';
import Footer from '../../components/ecolife/footer';
const categories = new Array(12).fill({ name: "category" });

function Home() {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndex_2, setActiveItemIndex_2] = useState(0);
  const chevronWidth = 40;

  return (
    <Fragment>
      <div className="ui segment margin-top-no" style={{ height: "65vh" }}>
        <Carousel />
      </div>
      <div className="ui container" style={{ marginTop:"7vh", width:'100rem'}}>
        <PromoContent />
        <div className="ui segments border-none box-shadow-none">
          <div className="ui segment margin-no" style={{ marginTop:"7vh" }}>
              <div className="text-size-large text-weight-medium">New Arrivals</div>
            <div className="text-color-grey margin-top-ten">
              It has roots in a piece of classical
            </div>
          </div>
          
            <div className="ui segment">
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
          

            
                  <ItemCard style={{height:'34rem'}}/>
                  <Badgecard imgsrc="/assets/images/10_50f0b4d8-c2f7-4c68-9165-d63d3186383e_grande.jpg"
                              meta="Vendor1"
                              title="Product Name"

                  />
                  <ItemCard style={{height:'34rem'}} />
                  <Badgecard  imgsrc="/assets/images/10_50f0b4d8-c2f7-4c68-9165-d63d3186383e_grande.jpg"
                              meta="Venor2"
                              title="Product Name2" />
                  
                  <ItemCard style={{height:'34rem'}}/>
                  <ItemCard style={{height:'34rem'}}/>
                  <ItemCard style={{height:'34rem'}}/>
                  <ItemCard style={{height:'34rem'}}/>
                  

              
              
              </ItemsCarousel>
            
            </div>
              <div className="ui segment">
            
              <div className="text-size-large text-weight-medium" style={{ marginTop:"7vh" }}>Popular Categories</div>
                <div className="text-color-grey margin-top-ten">
                  Add Popular Categories to weekly line up
                </div>
               
              
              
              
              <ItemsCarousel
                
                requestToChangeActive={setActiveItemIndex_2}
                activeItemIndex={activeItemIndex_2}
                numberOfCards={3}
                gutter={20}
                leftChevron={<button >{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
               
                      
                        
              >
              
              <Grid columns={1} >
                <Grid.Row >
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                    
                </Grid.Row>
              </Grid>
              <Grid columns={1} >
                <Grid.Row >
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                    
                </Grid.Row>
              </Grid>
              <Grid columns={1} >
                <Grid.Row >
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                    
                </Grid.Row>
              </Grid>
              <Grid columns={1} >
                <Grid.Row >
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                      <Popcat/>
                    </Grid.Column>
                    
                </Grid.Row>
              </Grid>
             
              </ItemsCarousel>
              </div>
              <div className="ui segment">
                <GridArrivals/>
              </div>

              <div className="ui segment" style={{marginTop:'7vh'}}>
                <div className="ui three column grid padding-no">
                  <div className="column " style={{width:'25%'}}>
                    <div className="ui segment">
                    <img src="/assets/images/1.jpg" alt="" style={{width:'100%',height:'100%'}} ></img>
                    </div>
                  </div>
                  <div className="column" style={{width:'50%'}}>
                  <div className="ui segment ">
                    <img src="/assets/images/2.jpg" alt=""  style={{width:'100%',height:'80%'}}></img>
                    </div>
                  </div>
                  <div className="column" style={{width:'25%'}} >
                  <div className="ui segment">
                    <img src="/assets/images/3.jpg" alt="" style={{width:'100%',height:'100%'}} ></img>
                    </div>
                  </div>
                </div>
              </div>
               
              <div className="ui segment " style={{ marginTop:"7vh" }}>
                <div className="text-size-large text-weight-medium">New Arrivals</div>
                  <div className="text-color-grey margin-top-ten">
                    It has roots in a piece of classical
                  </div>
                <div className='ui three column grid' style={{marginTop:'3vh'}}>
                  <div className='column' >
                    <HorizontalCard/>
                  </div>
                  <div className='column'>
                    <HorizontalCard/>
                  </div>
                  <div className='column'>
                    <HorizontalCard/>
                  </div>
                  <div className='column'>
                    <HorizontalCard/>
                  </div>
                  <div className='column'>
                    <HorizontalCard/>
                  </div>
                  <div className='column'>
                    <HorizontalCard/>
                  </div>
                </div>
              </div>

              <div className="ui segment " style={{ marginTop:"7vh",marginBottom:'12vh'}}>
                <div className="ui grid">
                  <img src="/assets/images/4_c9bb687f-133f-412a-a657-4830f1dce32b.jpg" style={{width:'100%'}}>

                  </img>
                </div>
              </div>
              
                
        </div>
                
               
                
                
                
                
                
            
              
      
                   
           
           
           

        
            
      </div>
      
          <Footer/>
       
    </Fragment>
  );
}

export default Home;
