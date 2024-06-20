// import { useEffect, useState } from "react"
// import Table from 'react-bootstrap/Table';

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
import { useNavigate } from "react-router-dom";



// import React from 'react';
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol
// } from 'mdb-react-ui-kit';


// this is the Element which were is used to put on the "BACKEND" 
// there are 2 way to used the data in the web page 
// function Home() {
//     const [apidata, SetData] = useState([])
//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products").then((result) => {
//             result.json().then((data) => {
//                 SetData(data)
//                 console.log(data)
//             })
//         })
//     }, [])
    // async function getData()
    // {
    //     const data=await fetch("https://fakestoreapi.com/products")
    //     const data1=await data.json
    //     console.log(data1)
    // }

    // return (
    //     <div>
    //         <h1> welcome to Home</h1>
            {/* <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Decription</td>
                        <td>Catogory</td>
                        <td>Image</td>
                        
                        
                    </tr>
                    {
                        apidata.map((item) =>
                            <tr>
                                
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price * 81}Rs</td>
                                    <td>{item.description}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.image} width="200px" height="200px"></img></td>
                                   
                                
                            </tr>
                        )
                    }


                </tbody>
            </Table> */}






//     <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      
     
//       {
//         apidata.map((item,i)=>
//             <MDBCol key={i}>
//       <MDBCard>
//         <center>
//           <MDBCardImage
//             // src='https://mdbootstrap.com/img/new/standard/city/044.webp'
//             // 
//             src={item.image}
//             alt='...'
//             position='top' style={{width:"100",height:"100"}}
//           />
//           </center>
//           <MDBCardBody>
//             <MDBCardTitle>{item.title}</MDBCardTitle>
//             <MDBCardTitle style={{color:"red"}}>{item.price*80}Rs</MDBCardTitle>
//             <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
//             <MDBCardText>{item.description.slice(0,150)}</MDBCardText>

// <MD
            
//           </MDBCardBody>
//         </MDBCard>

       
//       </MDBCol>
//         )
//       }
//     </MDBRow>


//         </div>
//     )
// }
// export default Home


function Home()
{
    const[apidata,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
        // fetch("https://fakestoreapi.com/products").then((result)=>{
        //     result.json().then((data)=>{
        //         console.log(data)
        //    })
    //    })
   },[])
 function handleclick(pid)
 {
  const data={name:pid}
  navigate("/item",{state:data})
 }
    async function getData()
    {
        const data=await fetch("https://fakestoreapi.com/products")
        const data1=await data.json()
        
        setData(data1)
    }
    return(
        <div>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      {
        apidata.map((item,i)=>
            <MDBCol key={i}>
        <MDBCard>
          <center>
          <MDBCardImage
            src={item.image}
            alt='...'
            position='top' style={{width:"100px",height:"100px"}}
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.price*80}rs</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.category}</MDBCardTitle>
            
            <MDBCardText>
              {item.description.slice(0,200)}
            </MDBCardText>
            <MDBBtn onClick={()=>handleclick(item.id)}>view details{item.id}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
      }
    </MDBRow>
        </div>
    )

}export default Home