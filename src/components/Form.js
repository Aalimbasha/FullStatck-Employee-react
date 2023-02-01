import React,{useState,useEffect} from 'react'
import DataTable from './DataTable';  //  table

import axios from 'axios'; // axios
import '../App.css'
//================
import Container from 'react-bootstrap/Container';   // bootstrap container
import Row from 'react-bootstrap/Row'; // bootstrap Row
import Col from 'react-bootstrap/Col'; // bootstrap col
//==================
import { toast } from 'react-toastify'; // toastify msg design
import 'react-toastify/dist/ReactToastify.css';  // toastify msg design css
//====================

function Form() {

    const [data,setData]= useState([])

const [employeeID,setEmployeeID]=useState("");              //employeeID
const [employeeName,setEmployeeName]=useState("");          //employeeName
const [gender,setGender]=useState("");                      //gender
const [department,setDepartment]=useState("");              //department
const [joiningDate,setJoiningDate]=useState("");            //joiningDate
const [isEdit,setIsEdit]=useState(false);     
       


const[filterdData,setFilterdData]=useState([])
const[query,setQuery]=useState('')

const getData =()=>{
    axios.get('https://localhost:44317/api/Employee')
    .then((res)=>{
setData(res.data)
setFilterdData(res.data)
    }).catch((res)=>toast.error(res.error))
}
//=================================================================
useEffect(()=>{
    getData()
},[])
//=================================================================


const same =()=>{
  if(data.EmployeeID === employeeID){
    toast.error(`${employeeID} is already mentioned try other Id`)
  }
}



const submitHandler =()=>{
  same();
    const Url='https://localhost:44317/api/Employee';
    const data= {
        "EmployeeID": employeeID,
        "EmployeeName": employeeName,
        "Gender": gender,
        "Department": department,
        "DateOfJoining": joiningDate
    }
    //  sameId();
   
    if(!isEdit){
      axios.post(Url,data)
      .then((result)=>{
      
      toast.success("Employee has been added ") 
       getData();
        clear()
          console.log(result);
         
         
      }).catch((res)=>{
        toast.error(res.error)
      })
    }else{
      axios.put(Url + `/${employeeID}`,data)
      .then((result)=>{
   
      toast.success("Employee has been Updated ") 
       getData();
        clear()
        setIsEdit(false)
          console.log(result);
         
      })
    }
   

}


const clear=()=>{
   
    setEmployeeID("");
    setEmployeeName("");
    setGender("");
    setJoiningDate("");
    setDepartment("");
  
    
}

const Required =()=>{
    if(employeeID ===""  ||  employeeName ==="" ||  department ===""  || joiningDate ==="" || gender==="" ){
      toast.error("please fill out this field")
    } else{
      submitHandler();
    }
  }
  return (
   <>
    <div className=''>
     
     <Row>
     <Col className='col-md-4 col-sm-12 mx-auto'>
     
      <div className='mb-5 '> 
             {/* <ToastContainer/> */}
     <Container>
           <div className='Shadow pb-5 pt- container-fluid'   >
            <div class="  p-2 w-100 ms-1 text-center"><strong  >Add Employee</strong></div>
     
           <Row><Col className='col-md-12 mx-auto'>
             <input type='number' value={employeeID} className='form-control mb-4 mt-3' placeholder=' EmployeeID' onChange={(e)=>setEmployeeID(e.target.value)} required/>
             <input type='text' value={employeeName} className='form-control mb-3 mt-3' placeholder='EmployeeName' onChange={(e)=>setEmployeeName(e.target.value)} required/>
          <Row><Col className='col-md-6'>
           <select value={gender} onChange={e => setGender(e.target.value)} className='form-control drop-down mt-3'  >
             <option value="Gender">Gender</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Female">Other</option>
           </select>
          
        
         </Col>
         <Col className='col-md-6'>  <input type='text' value={department} className='form-control mb-3 mt-3 col-md-6' placeholder='Department' onChange={(e)=>setDepartment(e.target.value)} required/></Col>
        </Row>
          <Col>   <input type='date' value={joiningDate} className='form-control  mb-3 mt-3 col-md-6' placeholder='yy/mm/dd' onChange={(e)=>setJoiningDate(e.target.value)} required/></Col>
     
             <button className={!isEdit ? 'btn addbtn':'btn Updatebtn'} onClick={()=>Required()}>{isEdit ? ' Update' : 'Submit'}</button></Col></Row>
           </div>
         </Container>
     </div></Col>
     {/* <DataTable data={data} gData={getData()} sets={sets} /> */}
     <Col className='col-md-8 col-sm-12 mx-auto '>
     <DataTable 
     data={data}  //====State 
     setData={setData} //====SetState 
     getData={getData} // API data
     //=========================================this is to display which id clicked
     setEmployeeID={setEmployeeID}
     setEmployeeName={setEmployeeName}
     setDepartment={setDepartment}
     setJoiningDate={setJoiningDate}
     setGender={setGender}
     setIsEdit={setIsEdit}
     //==========================================
     employeeName={employeeName}
     department={department}
     joiningDate={joiningDate}
     gender={gender}  
     //==================================
     query={query}
     setQuery={setQuery}
     filterdData={filterdData}
      /> 
      </Col>
      <hr className='border border-3 border-warning w-100 mx-auto '></hr>
     </Row>
  
         </div>

         </>
  )
}

export default Form