import React from "react";
import { Card, Icon, Image, Rating, Divider, Button} from "semantic-ui-react";

const HorizontalCard = props => (
  <Card style={{width:'100%',height:'100%'}}>  
    <Card.Content>
    <Image
      floated='left'
      size='small'
      src="/assets/images/10_50f0b4d8-c2f7-4c68-9165-d63d3186383e_grande.jpg"
      
     
    />
    
      <div style={{paddingTop:'5vh',paddingLeft:'20vh'}}>
      <Card.Meta>
        <span className="date center">Vendor 1</span>
      </Card.Meta>
      
      <Card.Header >Product name</Card.Header>
      <Rating maxRating={5} />
      </div>
    </Card.Content>
    
  </Card>
);

export default HorizontalCard;
