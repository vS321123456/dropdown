import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast} from "react-toastify";
import Book from './Components/Book';
import Library from './Components/Library';
import AddBook from './Components/AddBook';
import Menus from './Components/Menu';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';


const btnHandle = () => {
  toast("Hello");
};

function App() {
  return (
    <div>
      
        <ToastContainer />
          <Container>
            <Header name="Library" />
            <Row>
              <Col md={3}>
                <Menus/>
              </Col>
              <Col md={9}>
              <Router>
                <Routes>
                  {/* <Route path="/" component = {<Home/>} exact /> */}
                  <Route path="/add-book" element = {<AddBook/>} exact />
                  <Route path="/library" element = {<Library/>} exact />
                </Routes>

              </Router>

              </Col>
            </Row>
          </Container>

          {/* <Home /> 
          <Book />
          <Library />
          <AddBook /> */}
          
          {/* {<hr />
          <Button color="warning" outline onClick={btnHandle}>Link</Button>
          <Header name="BBC" />
          <h1>This is React</h1>
          <p>Web Dev</p>
          <p>Full Stack</p> */} 
      



    </div>
  );
}

export default App;
