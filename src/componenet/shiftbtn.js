import React, { useState } from 'react';

const ToggleComponent = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggleChange = () => {
    setToggleValue((prevValue) => !prevValue);
  };

  return (
    <div className="container mt-5">
      <div className={`toggle ${toggleValue ? 'enabled' : 'disabled'}`}>
        <input
          type="checkbox"
          checked={toggleValue}
          onChange={handleToggleChange}
          id="toggle-one"
        />
        <label htmlFor="toggle-one" />
      </div>
    </div>
  );
};

export default ToggleComponent;
