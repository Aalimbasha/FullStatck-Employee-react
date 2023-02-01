import React, { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState('maharaja');

  return (
    <div>
      <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        <option value="maharaja">maharaja</option>
        <option value="aalim">aalim</option>
        <option value="marzook">marzook</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default Example;