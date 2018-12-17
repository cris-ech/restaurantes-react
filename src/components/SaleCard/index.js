import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';
import image1 from './Oferta.png'  


const SaleCard = ({name, description}) => {
  return (
    
      
      <Card style={{marginBottom:'15px'}} >
        
        <CardBody>
          <CardTitle>{name}</CardTitle>
          
          <CardText>{description}</CardText>
          <Button>Mostrar codigo</Button>
        </CardBody>
      </Card>
     
    
  );
};
export default SaleCard;