import { Component } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../CommonResource/images/icons/logo-sm.png";
import search_icon from "../../CommonResource/images/icons/search-icon-sm.png";
import cart_icon from "../../CommonResource/images/icons/cart-sm.png";
import NavLi from "./NavLi";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      // <div className="nav-wrapper fixed-to">
      <Navbar
        expand="md"
        className="bg-body-tertiary"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 justify-content-evenly">
                <NavLi link="/mac/" name="Mac" />
                <NavLi link="/iphone/" name="iphone" />
                <NavLi link="/ipad/" name="ipad" />
                <NavLi link="/watch/" name="watch" />
                <NavLi link="/tv/" name="tv" />
                <NavLi link="/music/" name="Music" />
                <NavLi link="/support/" name="Support" />
                <NavLi link="/search/" img="yes" imgUrl={search_icon} />
                <NavLi link="/cart/" img="yes" imgUrl={cart_icon} />
              </Nav>
            </Navbar.Collapse>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      // </div>
      // <div className="nav-wrapper fixed-top">
      //   <div className="container">
      //     <nav className="navbar navbar-toggleable-sm navbar-expand-md">
      //       <button
      //         className="navbar-toggler navbar-toggler-right"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target=".navbar-collapse"
      //       >
      //         ☰
      //       </button>
      //       <a className="navbar-brand mx-auto" href="/">
      //         <img src={logo} />
      //       </a>

      //       <div className="navbar-collapse collapse">
      //         <ul className="navbar-nav nav-justified w-100 nav-fill">
      //           <NavLi link="/mac/" name="Mac" />
      //           <NavLi link="/iphone/" name="iphone" />
      //           <NavLi link="/ipad/" name="ipad" />
      //           <NavLi link="/watch/" name="watch" />
      //           <NavLi link="/tv/" name="tv" />
      //           <NavLi link="/music/" name="Music" />
      //           <NavLi link="/support/" name="Support" />
      //           <NavLi link="/search/" img="yes" imgUrl={search_icon} />
      //           <NavLi link="/cart/" img="yes" imgUrl={cart_icon} />
      //         </ul>
      //       </div>
      //     </nav>
      //   </div>
      // </div>
    );
  }
}

export default Header;
