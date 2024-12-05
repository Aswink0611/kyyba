import React from 'react'
import { useState } from 'react';
import '../Qr.css' ;

const  Qrcode =()=> {
     const [img ,setimg] =useState('')
     const [qrdata,setQrdata] = useState('')
     const [size,setSize] = useState('150')
    function Qrgenerater (){
        const url= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrdata)}`
        setimg(url)

    }
    
  return (
    <div>
        <div className=' conatainer'>
           {img&&  <img src={img} className='image'/>}
            <label htmlFor='inputQr'> search your Qrcode</label> 
        <input  value={qrdata} placeholder='enter your qr ' onChange={(e)=> setQrdata (e.target.value) }/>
        <label htmlFor='inputQr'> download your Qrcode</label> 
        <input placeholder='enter your size ' value={size} onChange={(e)=>setSize(e.target.value)}/>
        <button onClick={Qrgenerater}> gendrate</button>
        

        </div>
      

    </div>
  )
}
export default  Qrcode;