import React from 'react'

function Badge(props) {
    const{data}=props
  return (
    <div className='mx-auto w-75'>   
          <label class=" bg-warning p-2">
 <strong> Total Employees</strong> <span class="badge bg-dark rounded rounded-5 "><strong style={{fontSize:"17px"}}>{data.length}</strong></span>
 
</label>
    </div>
  )
}

export default Badge