import React from "react";
import { Dropdown } from "react-bootstrap";
const StaffAssignButton = ({ isstaff, staffer }) => (
  <div className="narrow-inline-dropdown">
    {isstaff ? (
      <Dropdown>
        <Dropdown.Toggle size="sm">
          {staffer ? staffer : "Assign"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Batty</Dropdown.Item>
          <Dropdown.Item href="#">Cylon</Dropdown.Item>
          <Dropdown.Item href="#">Dalek</Dropdown.Item>
          <Dropdown.Item href="#">GlaDOS</Dropdown.Item>
          <Dropdown.Item href="#">Google</Dropdown.Item>
          <Dropdown.Item href="#">HAL9000</Dropdown.Item>
          <Dropdown.Item href="#">SHODAN</Dropdown.Item>
          <Dropdown.Item href="#">Skynet</Dropdown.Item>
          <Dropdown.Item href="#">T1000</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    ) : (
      <span>{staffer ? `Assigned to ${staffer}` : "Unassigned"}</span>
    )}
  </div>
);

export default StaffAssignButton;
