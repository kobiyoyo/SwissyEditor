// eslint-disable jsx-props-no-spreading

// React
import React from 'react';

// Rsuite
import {
  Popover,
  Dropdown,
} from 'rsuite';

type MenuProps = {
  onSelect : (eventKey:number, e: React.MouseEvent<HTMLButtonElement>,) => void
};

const MenuPopover = ({ onSelect }: MenuProps) => (
  <Popover full>
    <Dropdown.Menu onSelect={onSelect}>
      <Dropdown.Item eventKey={1}>New File</Dropdown.Item>
      <Dropdown.Item eventKey={2}>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
      <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
      <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
      <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
      <Dropdown.Item eventKey={7}>About</Dropdown.Item>
    </Dropdown.Menu>
  </Popover>
);

export default MenuPopover;
