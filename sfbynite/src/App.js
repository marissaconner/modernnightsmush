import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Modern Nights
              </a>
            </div>
            <ul className="nav navbar-nav  mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Make A Character
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Policies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Staff Training
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help Files
                </a>
              </li>
            </ul>
            <ul className="nav navbar-right navbar-nav">
              <li className="nav-item">
                <button className="btn navbar-btn btn-light">Sign Up</button>
              </li>
              <li className="nav-item">
                <span className="nav-link">Log In</span>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div id="splash">
            <div className="row">
              <h1>
                Modern Nights
                <small>A Vampire: The Masquerade Role Playing Game</small>
              </h1>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h2>Quick Reference</h2>
                <ul>
                  <li>
                    <b>Setting:</b> Present-day San Francisco, California
                  </li>
                  <li>
                    <b>Playable Characters:</b> Vampires (Camarilla, Anarch and
                    Sabbat), plus revenants, ghouls, and humans (mundane or with
                    numina).
                  </li>
                  <li>
                    <b>Ruleset:</b> Vampire: The Masquerade 20th Anniversary
                    Edition
                    <p>
                      We use the following supplemental v20 source books:
                      <ul>
                        <li>Ghouls And Revenants</li>
                        <li>Lore Of The Clans</li>
                        <li>Hunters Hunted II</li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h2>Connect And Play</h2>
                <p>
                  Modern Nights is a MUSH (which is a text-based online gaming
                  platform). We're working on making Modern Nights playable
                  through the browser. In the meantime, you will need to
                  download a client such as <a href="#">MushClient</a> (for
                  Windows) or <a href="#">Atlantis</a> (for Mac).
                </p>
                <p>
                  To play, connect to <b>www.BigDamnMush.com</b> port{" "}
                  <b>1777</b>.
                </p>
                <p>
                  Connection issues? Try connecting directly to{" "}
                  <b>45.56.127.110</b> port <b>1777</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
