import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Switch from 'react-bootstrap/Switch';

const ShiftSelector = () => {
  const [shift, setShift] = useState('day');

  return ( 
    <Form class="border">
        <Form.Check
          type="switch"
          id="shift-switch"
          label="Day Shift"
          checked={shift === 'day'}
          onChange={() => setShift(shift === 'day' ? 'night' : 'day')}
        />
    </Form>  
  );
};

export default ShiftSelector;
