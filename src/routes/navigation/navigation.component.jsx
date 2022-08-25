import './navigation.styles.scss'
import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () => {
    return (
        <>
            <div className="navigation-container">
                <div>
                    <span className="navi-name">Yingji Yan</span>
                    <Link to="/projects"><span className="navi-projects">Projects</span></Link>
                    {/*<a href="#skills">*/}
                    {/*<span className="nave-skills">Skills</span>*/}
                    {/*</a>*/}
                </div>
                <div>
                <span className="Contacts">
                contacts
                </span>
                </div>
            </div>
            {/*<Navbar bg="dark" expand="lg" variant="dark">*/}
                {/*<Container>*/}
                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                        {/*<Nav className="me-auto">*/}
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                                {/*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.2">*/}
                                    {/*Another action*/}
                                {/*</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item href="#action/3.4">*/}
                                    {/*Separated link*/}
                                {/*</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Container>*/}
            {/*</Navbar>*/}
            <Outlet/>
        </>
    )
};
export default Navigation;