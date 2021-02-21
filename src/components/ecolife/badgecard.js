import { image } from "faker";
import React from "react";
import { Card, Icon, Image, Rating, Button} from "semantic-ui-react";

const Badgecard = props => (
  <Card style={{height:"34rem"}}>
    <div>
    <div className="ui small label red " style={{width:"5vh", position:"left", margin:'5px'}} >NEW</div>
    <div className="ui small label green " style={{width:"5vh", float:"right", margin:'5px'}} >SALE</div>
    </div>
    <Image
      src={props.imgsrc}
      wrapped
      ui={false}
      
    />
    
    
    <Card.Content>
      
      <Card.Meta>
        <span className="date center">{props.meta}</span>
      </Card.Meta>
      <Card.Header>{props.title}</Card.Header>
      <Rating maxRating={5} />
    </Card.Content>
    <Card.Content extra>
      <Button>Add to Cart</Button>
    </Card.Content>
    
  </Card>

  
);

export default Badgecard;
