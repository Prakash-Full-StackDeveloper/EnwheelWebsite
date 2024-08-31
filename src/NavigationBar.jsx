
import { Navbar,Nav } from "react-bootstrap";
import "./NavigationBar.css";
import Design from "./Design";
const NavigationBar=()=>{
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="brand-name" >Enwheel <div>Tech..</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about-us"> About Us</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
      </Navbar>
      {/* <Design></Design> */}
    </>
  );
}
export default NavigationBar;
