import React from "react";
import {
  ButtonToolbar,
  Button,
  Dropdown,
  ButtonGroup,
  Form
} from "react-bootstrap";
import RequestComment from "./RequestComment.js";

const OpenedRequest = () => (
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
            <Dropdown.Item href="#">Yet More Request Titles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </p>

      <p class="request-readerlist">To: Jimbo, Timmy, and Garth</p>
    </div>
    <div className="request-body">
      <p>Hello, blah blah blah, this is the body of my initial +request.</p>

      <RequestComment
        commentName="Timmy"
        commentContents="This is my comment."
        commentDate="March 23"
      />

      <Form>
        <ButtonToolbar>
          <Button>Share</Button>

          <Button>Assign</Button>
        </ButtonToolbar>

        {/*  Using react-bootstrap here because I will want animations/transitions and so on so I will need to inevitably convert it. */}
        <Form.Group controlId="share-with">
          <Form.Label>Share With:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <div className="form-group">
          <label for="reply">Reply</label>
          <textarea name="reply" className="form-control" id="reply" />
        </div>

        <div class="btn-group">
          <button type="button" class="btn btn-primary">
            Send
          </button>
          <button
            type="button"
            class="btn btn-primary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
          >
            <span class="caret" />
          </button>
          <div class="dropdown-menu">
            <span class="dropdown-item">Send & Approve</span>
            <span class="dropdown-item">Send & Close</span>
            <span class="dropdown-item">Send & Deny</span>
          </div>
        </div>
      </Form>
    </div>
  </div>
);

export default OpenedRequest;
