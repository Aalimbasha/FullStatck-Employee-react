import React, { useState } from 'react'

function Lang() {
    const [selectedOption, setSelectedOption] = useState('maharaja  ');

  return (

    <div> <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
    <option value="Languages">Languages</option>
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="China">China</option>
    <option value="urudu">Urudhu</option>
  </select>


    </div>
  )
}

export default Lang