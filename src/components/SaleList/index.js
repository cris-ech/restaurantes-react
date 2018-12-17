import React from 'react'
import axios from 'axios'
import SaleCard from "../SaleCard";
import { ListGroup, ListGroupItem, Row, Col, Container } from 'reactstrap';


class SaleList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Sales : [] };
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
    
      
        {this.state.Sales.map(sale => {
        return <box>
        <SaleCard
        name={sale.name}
        description={sale.description}
        />
        </box>
       
        }
        )}
       
      </Container>
      

    )
  }
}
export default SaleList;