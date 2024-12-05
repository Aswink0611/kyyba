import React, { useState } from 'react'
import { createEmployee } from '../service/EmployeeService'
import { useNavigate} from 'react-router-dom'

const AddEmployeeComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')

  const navigator = useNavigate();

  function saveEmployee(e){
  e.preventDefault();

   const employee = {
      email,
      password,
      userDetails: {
         firstName, lastName, age, gender, address
      }
   }
 
   createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/kyyba')
   })
} 

  return (
    <div className='container'> 
      <br /> <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 border rounded p- mt-2 shadow' style={{backgroundColor:'#9370DB',height:'20%',paddingTop:"1px"}}>
           <h2 className='text-center'>REGISTER USER</h2>
           <div className='card-body'>
              <form >
                 <div className='form-group'>
                    <label className='form-label' >Email:</label>
                    <input
                        type='text'
                        placeholder='Enter User Email'
                        name='email'
                        value={email}
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group'>
                    <label className='form-label'>Password:</label>
                    <input
                        type='password'
                        placeholder='Enter User Password'
                        name='password'
                        value={password}
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group '>
                    <label className='form-label'>First Name:</label>
                    <input
                        type='text'
                        placeholder='Enter User FirstName'
                        name='firstname'
                        value={firstName}
                        className='form-control'
                        onChange={(e) => setFirstName(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group '>
                    <label className='form-label'>Last Name:</label>
                    <input
                        type='text'
                        placeholder='Enter User LastName'
                        name='lastName'
                        value={lastName}
                        className='form-control'
                        onChange={ (e) => setLastName(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group '>
                    <label className='form-label'>Age:</label>
                    <input
                        type='number'
                        placeholder='Enter User Age'
                        name='age'
                        value={age}
                        className='form-control'
                        onChange={ (e) => setAge(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group '>
                    <label className='form-label'>Gender:</label>
                    <input
                        type='text'
                        placeholder='Enter User Gender'
                        name='gender'
                        value={gender}
                        className='form-control'
                        onChange={ (e) => setGender(e.target.value)}
                    >
                    </input>
                 </div>

                 <div className='form-group mb-2'>
                    <label className='form-label'>Address:</label>
                    <input
                        type='text'
                        placeholder='Enter User Address'
                        name='address'
                        value={address}
                        className='form-control'
                        onChange={ (e) => setAddress(e.target.value)}
                    >
                    </input>
                 </div>

                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
              </form>
           </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent