import React from "react";
import { Card, Icon, Image, Rating, Button} from "semantic-ui-react";

const ItemCard = props => (
  <Card style={props.style}>  
    <div style={{height:"2.5rem"}}></div>
    <Image
      src="/assets/images/10_50f0b4d8-c2f7-4c68-9165-d63d3186383e_grande.jpg"
      wrapped
      ui={false}
     
    />
    <Card.Content>
      
      <Card.Meta>
        <span className="date center">Vendor 1</span>
      </Card.Meta>
      <Card.Header>Product name</Card.Header>
      <Rating maxRating={5} />
    </Card.Content>
    <Card.Content extra>
      <Button>Add to Cart</Button>
    </Card.Content>
  </Card>
);

export default ItemCard;
