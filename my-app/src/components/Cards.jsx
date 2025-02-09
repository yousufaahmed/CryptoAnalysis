import React, { useState } from 'react';
import { Card, Dropdown, DropdownButton } from 'react-bootstrap';

const Cards = ({title}) => {
  const [selectedOption, setSelectedOption] = useState('Select an Option');

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
        <Card.Text>
          {title}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
