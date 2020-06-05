 import React from 'react';
 import {Container, Row, Col} from 'react-bootstrap';
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 import './Styles/App.css';
 import NavigationBar from './components/NavigationBar';
 import Welcome from './components/Welcome';
 import Quiz from './components/Quiz';
 import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />   
      <Container>
        <Row>
          <Col lg={12} className="Margin-top" >
            <Quiz></Quiz>
          </Col>
        </Row>
      </Container> 
      <Footer></Footer>
      </Router>
  );
}

export default App;
