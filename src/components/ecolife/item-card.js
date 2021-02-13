import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ItemCard = () => (
  <Card>
    <Image
      src="/assets/images/10_50f0b4d8-c2f7-4c68-9165-d63d3186383e_grande.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default ItemCard;
