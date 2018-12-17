import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';

const ReviewCard = ({name, rate, valoration}) =>  {
  return (
    
      
      <Card style={{marginBottom:'15px'}} >
        
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Valoracion {rate}/5</CardSubtitle>
          
          <CardText>{valoration}</CardText>
          
        </CardBody>
      </Card>
      
    
  );
};

export default ReviewCard;