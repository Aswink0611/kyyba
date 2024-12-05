import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

  const [employees,setEmployees] = useState([])

  const navigator = useNavigate();
  
  useEffect(() => {
    getAllEmployees();
},[])

  function getAllEmployees(){
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
       console.error(error);
    })
  }

  function addNewEmployee(){
    navigator('/add-Employee')
  }

  function editEmployee(loginId){
    navigator(`/update-Employee/${loginId}`)
  }

  function removeEmployee(loginId){
     console.log(loginId);

     deleteEmployee(loginId).then((response) => {
      console.log(response);
      
      getAllEmployees();
     }).catch(error => {
      console.error(error);
     })
  }

  return (
    <div className='container'>
      <br /> <br /> <br />
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-dark'>
          <thead>
            <tr >
              <th>LoginID</th>
              <th>Email</th>
              <th>Password</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee =>
                <tr key={employee.loginId}>
                  <td>{employee.loginId}</td>
                  <td>{employee.email}</td>
                  <td>{employee.password}</td>
                  <td>{employee.userDetails?.firstName}</td>
                  <td>{employee.userDetails?.lastName}</td>
                  <td>{employee.userDetails?.age}</td>
                  <td>{employee.userDetails?.gender}</td>
                  <td>{employee.userDetails?.address}</td>
                  <td>
                    <button className='btn btn-info' style={{padding:'3px', height:'30px'}} onClick={() => editEmployee(employee.loginId)}>Update</button>
                    <button className='btn btn-danger' style={{padding:'3px', height:'30px', marginLeft:'10px'}} onClick={() => removeEmployee(employee.loginId)}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent