import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class NavLi extends Component {
  render() {
    const { link, name, img, imgUrl } = this.props;
    return (
      <Nav.Link>
        <Link className="nav-link js-scroll-trigger" to={link}>
          {img ? <img src={imgUrl} /> : name}
        </Link>
      </Nav.Link>
    );
  }
}

export default NavLi;
