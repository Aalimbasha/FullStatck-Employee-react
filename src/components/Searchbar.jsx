import React from 'react'

function Searchbar() {
  return (
    
        <div class="input-grouped shadow " style={{borderRadius:"7px"}}>
 
    <input type="search" id="form1" class="ps-3 pe-3 pt-1" style={{backgroundColor:"transparent",border:"none",outline:"none",borderRadius:"7px"}} placeholder=' Search ...'/>
  
  
  <button type="button" class="btn " style={{backgroundColor:"rgb(255,193,7)"}}><i class="fas fa-search"></i></button>

    </div>
    
  )
}

export default Searchbar



