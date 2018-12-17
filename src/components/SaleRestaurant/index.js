import React from 'react'
import axios from 'axios'
import SaleCard from "../SaleCard";
import { ListGroup, ListGroupItem, Row, Col,Container,Collapse, Button } from 'reactstrap';


class SaleRestaurant extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      Sales : [],
      idApi : "/api/restaurantes/" + this.props.idApi,
      collapse: false
    
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  componentWillMount() {
    const apiUrl = "http://127.0.0.1:8000/api/ofertas";
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Sales: data["hydra:member"] });
      });
      console.log(this.props.idApi);
     
      console.log("eyyy");
      console.log(this.props.idApi);
      console.log(this.state.idApi);
      
      
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
    ¡Las mejores ofertas!</h2>
    <hr  style={{marginBottom:'10px',backgroundColor:'#e67e22'}} className="my-2"></hr>
    <div style={{textAlign:'center'}}>
    <Button  onClick={this.toggle} style={{ marginBottom: '20px',marginTop:'15px',borderColor:'#e67e22', backgroundColor:'#e67e22' }}>Quiero verlas</Button>
    </div>
    <Collapse isOpen={this.state.collapse}>
      
        {this.state.Sales.map(sale => {
        if (sale.restaurante  == this.state.idApi ) {
        return <box>
        <SaleCard
        name={sale.name}
        description={sale.description}
        />
        </box>
       
        }
        })}
      </Collapse>  
      </Container>
        
      

    )
  }
}
export default SaleRestaurant;