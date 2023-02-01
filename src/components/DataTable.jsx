import React from 'react'
// import loading from '../img/loading.gif'
import '../App.css'
//========================
import Table from 'react-bootstrap/Table';   // this is the react-bootstrap table
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
//==================
import Badge from './badge';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Row from 'react-bootstrap/Row'; // bootstrap Row
// import Col from 'react-bootstrap/Col'; // bootstrap col
//====================


// function DataTable({data,getData,sets}) {
function DataTable(props) {
  const { setEmployeeID, setEmployeeName, setDepartment, setJoiningDate, setGender, setIsEdit } = props;

  const {query,setQuery}=props
  const {handleView}=props
  const {data,setData}=props;
  const {filterdData}=props;

 
  const {getData}=props

 

//   const getData =()=>{
//     axios.get('https://localhost:44317/api/Employee')
//     .then((res)=>{
// setData(res.data)
//     }).catch((error)=>{console.log(error);})
// }

// useEffect(()=>{
//   getData()
// },[])
    const handleEdit = async (EmployeeID) =>{
        // handleShow();
        
       const getData = await axios.get(`https://localhost:44317/api/Employee/${EmployeeID}`)
       const data = await getData.data
       
    debugger
       if(data){
        setEmployeeID(data.EmployeeID)
        setEmployeeName(data.EmployeeName)
       setDepartment(data.Department)
        setJoiningDate(data.DateOfJoining)
        setGender(data.Gender)
        setIsEdit(true)
       }

        //  console.log( setEmployeeID(res.data.EmployeeID));
        //  console.log(setEmployeeName(res.data.EmployeeName));
        //  console.log(setDepartment(res.data.Department));
        //  console.log( setJoiningDate(res.data.DateOfJoining));
        
    }
    
   
    //========================================================================== delete  section 
    const handleDelete =(EmployeeID)=>{
        if(window.confirm("Are you sure want to delete") === true)
        {
         axios.delete(`https://localhost:44317/api/Employee/${EmployeeID}`)
         .then((res)=>{
            if(res.status===200)
            {
                toast.warning("Employee has been deleted")
                 getData();
                // setData()
               
            }
         }).catch((res)=>{
            // toast.error(error)

           toast.error(res.error)
         })
        }
    }

    const searchHandler=(event)=>{
      const getSearch = event.target.value.trim( );
      setQuery(getSearch)
      console.log(getSearch);


      if(getSearch.length >0 ){
const searchData =data.filter((item)=> item.EmployeeName.toLowerCase().includes(getSearch))
     setData(searchData)
      }else{
        getData(filterdData);
      }
      setQuery(getSearch )
    }
  return (
    <div>
   
  <div className="d-flex ms-3">
  <Badge data={data}/>
     <div className="input-group ">
            <input type="search" id="form1" value={query} onChange={(e)=>searchHandler(e)} class="pe-3 pt-1 border-0 text-dark shadow" style={{backgroundColor:"rgb(255,193,7)",outline:"none",fontWeight:"bolder"}} placeholder=" Find By  Name..."/>
            {/* <button type="button"  class="btn " style={{backgroundColor:"rgb(255,193,7)"}}> <i class="fas fa-search"></i></button> */}
     </div>
            

  </div>
        <ToastContainer/>
        
        <div className=' tableFixHead mx-auto'>
        <Table striped bordered hover className='container  text-center '>
         
         <thead class="">
          
           <tr className=''> 
   
            <th className="col sn ">SerialNo</th>
            <th className="col empid " >EmployeeID</th>
            <th className="col empname">EmployeeName</th>
            <th className="col gender">Gender</th>
            <th className="col department">Department</th>
            <th className="col date">DateOfJoining</th>
            <th className="col action">Actions</th>
           </tr>
         </thead>
         <tbody >
          
           {
          
           data.map((item,index)=>{
            
   return(
      
       <tr key={index} className=''>
       
               <td className='sn'>{index + 1}</td>
               <td className="empid">{item.EmployeeID}</td>
               <td className="empname">{item.EmployeeName}</td>
               <td className="gender">{item.Gender}</td>
               <td className="department">{item.Department}</td>
               <td className="date">{item.DateOfJoining}</td>
               <td className="action" colSpan={2}> &nbsp; &nbsp; 
               {/* <i class="fa-regular fa-eye"></i> */}
              
                 {/* <i className="fa-solid fa-eye viewIcon" title='View'  onClick={()=>handleView(item.EmployeeID)}></i> &nbsp; */}
   
                <i className="fa-solid fa-pencil edticon fa-1x  editIcon" title='Edit'  onClick={()=>{handleEdit(item.EmployeeID)}}></i>&nbsp; &nbsp;
                <i className="fa-solid fa-trash-can dlticon fa-1x  deleteIcon"  title='Delete' onClick={()=>handleDelete(item.EmployeeID)}></i> &nbsp;
              
              
                   </td>
              </tr>
   )
           }) 
          
   
           
           }
       
          
         </tbody>
       </Table>
        </div>
 
    </div>
  )
}
export default DataTable;