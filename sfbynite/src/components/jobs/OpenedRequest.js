import React, { Component } from "react";
import {
  ButtonToolbar,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Form
} from "react-bootstrap";

class OpenedRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const open = this.state;
    return (
      <div className="requests">
        <div className="row">
          <span className="request-originator">Jimbo</span>
          <span className="request-header">Request Title</span>
          <span className="request-date">May 23</span>
        </div>

        <div className="request">
          <div className="request-header">
            <span>back</span>
            <h2>Request Title</h2>
            <p>
              <span class="request-originator">Player Name</span>
              <Dropdown>
                <Dropdown.Toggle size="sm">Player's Jobs</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Another Request Title</Dropdown.Item>
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
              Hello, blah blah blah, this is the body of my initial +request.
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
            <span data-toggle="collapse" href="#reply">
              Reply
            </span>

            <Form>
              <ButtonToolbar>
                <Button>Share</Button>
                <Button>Assign</Button>
              </ButtonToolbar>

              <div id="reply" class="collapse">
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
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default OpenedRequest;
