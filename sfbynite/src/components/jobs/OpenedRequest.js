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
          <Dropdown.Toggle size="sm">Player name </Dropdown.Toggle>
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
        <span
          className="btn btn-default"
          data-toggle="collapse"
          data-target="#share-with"
        >
          Share
        </span>

        <span
          className="btn btn-primary"
          data-toggle="collapse"
          data-target="#user-reply"
        >
          Reply
        </span>

        <div className="form-group collapse" id="share-with">
          <label for="cc-list">Share With...</label>
          <span
            className="close"
            data-target="#share-with"
            data-toggle="collapse"
          >
            &times;
          </span>
          <input
            type="text"
            className="form-control"
            name="cc-list"
            id="cc-list"
          />
        </div>

        <div id="user-reply" className="collapse">
          <div className="form-group">
            <label for="reply">Reply</label>
            <span
              className="close"
              data-target="#user-reply"
              data-toggle="collapse"
            >
              &times;
            </span>
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
        </div>
      </Form>
    </div>
  </div>
);

export default OpenedRequest;
