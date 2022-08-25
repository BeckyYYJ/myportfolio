import './navigation.styles.scss'
import {Link, Outlet} from 'react-router-dom'
import Example from "../../component/aaa";
import Button from "../../component/button/button.component";

import React from "react";
const Navigation = () => {
    return (
        <>

            <div className="navigation-container">
                <div>
                    <span className="navi-name">Yingji Yan</span>
                    <Link to="/projects"><Button  type="6-contacts" text="Projects" /></Link>
                    {/*<a href="#skills">*/}
                    {/*<span className="nave-skills">Skills</span>*/}
                    {/*</a>*/}
                </div>
                <div>
                    <Example/>
                {/*<span className="Contacts">*/}
                {/*contacts*/}
                {/*</span>*/}
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