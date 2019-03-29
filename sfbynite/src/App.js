import React, { Component } from "react";
import SiteNavigation from "./components/general/SiteNavigation.js";
import {
  ButtonToolbar,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Form
} from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNavigation />

        <div className="container">
          <div className="requests">
            <div className="row">
              <span className="request-originator">Jimbo</span>
              <span className="request-header">Request Title</span>
              <span className="request-date">May 23</span>
            </div>

            <div className="request">
              <div className="request-header">
                <h2>Request Title</h2>
                <p>
                  <span class="request-originator">Player Name</span>
                  <Dropdown>
                    <Dropdown.Toggle size="sm">Player's Jobs</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">
                        Another Request Title
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        Yet More Request Titles
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </p>

                <p class="request-readerlist">To: Jimbo, Timmy, and Garth</p>
              </div>
              <div className="request-body">
                <p>
                  Hello, blah blah blah, this is the body of my initial
                  +request.
                </p>

                <div className="request-comment">
                  <p>
                    <span class="request-commenter">Timmy</span>
                    <span class="comment-date">March 23</span>
                  </p>

                  <p>Yeah, this is my reply, it is so totally rad yo.</p>
                </div>

                <div className="request-comment">
                  <p>
                    <span class="request-commenter">Timmy</span>
                    <span class="comment-date">March 23</span>
                  </p>

                  <p>Yeah, this is my reply, it is so totally rad yo.</p>
                </div>

                <div className="request-comment">
                  <p>
                    <span class="request-commenter">Timmy</span>
                    <span class="comment-date">March 23</span>
                  </p>

                  <p>Yeah, this is my reply, it is so totally rad yo.</p>
                </div>

                <Form>
                  <ButtonToolbar>
                    <Button>Reply</Button>
                    <Button>Share</Button>
                    <Button>Assign</Button>
                  </ButtonToolbar>
                  <Form.Label>Reply</Form.Label>
                  <Form.Control as="textarea" rows="3" />

                  <Dropdown as={ButtonGroup}>
                    <Button>Add Reply</Button>
                    <Dropdown.Toggle split id="reply-variations" />
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">Approve</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Deny</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Close</Dropdown.Item>
                      <Dropdown.Item eventKey="4">Reply</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div id="splash">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <span className="display large">Modern Nights</span>
                  <small>A Vampire: The Masquerade Role Playing Game</small>
                </h1>
              </div>
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
