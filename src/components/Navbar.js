import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";


class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Acerca</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Mobile</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Acerca</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href="">Mobile</a>
        </li>
      </ul>
    </>
        );
    }
}

export default Navbar;
