import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Restaurant from './components/Restaurant'
import Fake from './components/Fake'
import NotFound from './components/NotFound'
import Sale from './components/Sale'
import SaleList from './components/SaleList'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <Container  
       fluid>
        <Header/>
        <Row style={{fontWeight:'300',
        fontSize:'20',
        textRendering:'optimizeLegibility',
        color:'black',
        
        }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Fake} />
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="/oferta/:id" component={Sale} />
          <Route path="/ofertas" component={SaleList} />
          <Route path="/fake" component={Fake} />
          <Route component={NotFound} />
      </Switch>
    </Router>
    
    
    </Row>
 
    <Footer />
 
    </Container>
 
    )
  }
}
export default App