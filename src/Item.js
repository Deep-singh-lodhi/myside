import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useLocation } from "react-router-dom";

function Item()
{
    
    


    const[apidata,setData]=useState([])
    const location=useLocation()
    useEffect(()=>{
        getData()
        // fetch("https://fakestoreapi.com/products").then((result)=>{
        //     result.json().then((data)=>{
        //         console.log(data)
        //    })
    //    })
   },[])

 
    async function getData()
    {
        const data=await fetch("https://fakestoreapi.com/products/"+location.state.name)
        const data1=await data.json()
        
        setData(data1)
    }
    return(
        <div>
            <br></br>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                
      {
        
                
        <MDBCol>
        <MDBCard>
          <center>
          <MDBCardImage
            src={apidata.image}
            alt='...'
            position='top' style={{width:"100px",height:"100px"}}
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{apidata.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{apidata.price*80}rs</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{apidata.category}</MDBCardTitle>
            
            <MDBCardText>
              {apidata.description}
            </MDBCardText>
            
           <MDBBtn >Buy now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      }
    </MDBRow>
    </div>
    )

}
export default Item