
/*
    NAVBAR.JSX CONTAINS THE NAVBAR COMPONENT
*/

import { Navbar, Nav, NavItem, MenuItem, NavDropdown  } from 'react-bootstrap';

// DEPENDENCIES
import React, { Component } from "react";
// NAVBAR STYLES
import "./Navbar.css";

// NAVBAR COMPONENT
class NavbarComp extends Component {
    // RENDER 
    render() {
        console.log(this.props.feedback)
        // RETURN THE HTML FOR THE NAVBAR
        return (
            // <Navbar inverse collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <a href="#brand">React-Bootstrap</a>
            //         </Navbar.Brand>
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <Nav>
            //             <NavItem eventKey={1} href="#">
            //                 Link
            //             </NavItem>
            //             <NavItem eventKey={2} href="#">
            //                 Link
            //             </NavItem>
            //             <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            //                 <MenuItem eventKey={3.1}>Action</MenuItem>
            //                 <MenuItem eventKey={3.2}>Another action</MenuItem>
            //                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
            //                 <MenuItem divider />
            //                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
            //             </NavDropdown>
            //         </Nav>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} href="#">
            //                 Link Right
            //             </NavItem>
            //             <NavItem eventKey={2} href="#">
            //                 Link Right
            //             </NavItem>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
            // NAVBAR
            <div className="col-xs-12 col-xs-12 col-md-12 text-center header">
                {/* COMMUMN ONE */}
                <div className="clicker col-xs-4">
                    CLICKER! 
                </div>
                {/* COMMUMN TWO */}
                <div className="answer col-xs-4">

                </div>
                {/* COMMUMN THREE */}
                <div className="score col-xs-4">
                Score: {this.props.score} | High-Score: {this.props.highScore}
                </div>
            </div>
        ); // END RETURN        
    }; // END RENDER














}; // END NAVBAR

// EXPORT NAVBAR
export default NavbarComp;