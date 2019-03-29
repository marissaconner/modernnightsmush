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
          <Button data-toggle="collapse" href="#reply">
            Reply
          </Button>
          <Button>Share</Button>
          <Button>Assign</Button>
        </ButtonToolbar>

        <div id="reply" class="collapse">
          <Form.Label>Comments</Form.Label>
          <span data-toggle="collapse" href="#reply" class="close">
            &times;
          </span>
          <Form.Control as="textarea" rows="3" />
          <div id="job-reply-toolbar">
            <Form.Control as="select">
              <option>Comment</option>
              <option>Approve</option>
              <option>Close</option>
              <option>Deny</option>
            </Form.Control>
            <Button>Send</Button>
          </div>
        </div>
      </Form>
    </div>
  </div>
);

export default OpenedRequest;
