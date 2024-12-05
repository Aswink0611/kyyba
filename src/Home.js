import React from 'react'

 const Home =()=> {
    const inputhandler=(e)=>{
     console.log(e.target.value);
    }
    const inputhandler2=(e)=>{
      console.log(e.target.value)
      
    }
    const Btnhandler=()=>{
alert("please click the button when you requried")

    }
    const Submithandler=(e)=>{
      e.preventDefault();
      let fristname= e.target.fristname.value
      let lastname= e.target.lastname.value
       console.log(fristname,lastname);
       e.target.fristname.value=""
       e.target.lastname.value=""
    }


  return (
    <div>
      
      <form onSubmit={Submithandler}>
      <h1>Handling events</h1>
     <input onChange={inputhandler} 
     placeholder='fristname'
     name="fristname"
      required/>
     <input onChange={inputhandler2} 
     placeholder='lastname'
     name="lastname" 
     required/>
      <button onClick={Btnhandler} required> click</button> 
      <button type='Submit' required> submit</button>
      
      </form>
    </div>
  )
}
export default Home;