import React from 'react'
import axios from 'axios'
import SaleCard from '../SaleCard'
import { ListGroup, ListGroupItem, Row, Col,Container,Collapse, Button } from 'reactstrap';

class Sale extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Oferta : [] };
  }
  
  componentWillMount() {
    const { params } = this.props.match;
    const id = params.id;
    const apiUrl = "http://127.0.0.1:8000/api/ofertas" +"/" + id;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Oferta: data });
      });

      console.log(this.state.Oferta);
  }
  render() {
    //const { params } = this.props.match
    return (<Container fluid>
      <h2 style={{fontWeight:'300',
      fontSize: '180%',
      textAlign:'center',
      wordSpacing: '3px',
      letterSpacing:'1px',
      paddingTop:'10px',
    }}>
    ¡No te pierdas esta oferta!</h2>
    <hr  style={{marginBottom:'10px',backgroundColor:'#e67e22'}} className="my-2"></hr>
    
      
        <box>
        <SaleCard
        name={this.state.Oferta.name}
        description={this.state.Oferta.description}
        />
        </box>
       
        
        
       
      </Container>

    )
  }
}
export default Sale;