import React from "react";
import {
  ButtonToolbar,
  Button,
  Dropdown,
  ButtonGroup,
  Form
} from "react-bootstrap";
import RequestComment from "./RequestComment.js";
import StaffAssignButton from "./StaffAssignButton.js";

const OpenedRequest = () => (
  <div className="request">
    <div className="request-header">
      <span>back</span>
      <h2>Request Title</h2>
      <p>
        <span className="request-originator">From: </span>
        <Dropdown className="narrow-inline-dropdown">
          <Dropdown.Toggle size="sm">Player Name</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Another Request Title</Dropdown.Item>
            <Dropdown.Item href="#">Yet More Request Titles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </p>

      <p class="request-readerlist">
        <strong>To:</strong> Jimbo, Timmy, and Garth,{" "}
        <strong>Assigned To:</strong>{" "}
        <StaffAssignButton isstaff="1" staffer="Skynet" />
      </p>
    </div>
    <div className="request-body">
      <p>Hello, blah blah blah, this is the body of my initial +request.</p>

      <RequestComment
        commentName="Timmy"
        commentContents="This is my comment."
        commentDate="March 23"
      />

      <Form>
        <Button>Share</Button>

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
            <a href="#" class="dropdown-item">
              Send
            </a>
            <a href="#" class="dropdown-item">
              Send & Approve
            </a>
            <a href="#" class="dropdown-item">
              Send & Close
            </a>
            <a href="#" class="dropdown-item">
              Send & Deny
            </a>
          </div>
        </div>
      </Form>
    </div>
  </div>
);

export default OpenedRequest;
