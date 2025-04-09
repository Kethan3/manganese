import React from 'react'
import { useNavigate } from 'react-router';
import './Enterprise.css'
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Container from '../../components/container/Container';
const Enterprise = () : React.ReactNode => {
    const navigate = useNavigate();
  return (
   <Container>
     <div
     className='enterprise-root'>
         <NavigationBar />
  <h1>Enterprise</h1>
  <button onClick={()=>{
          navigate('/');
        }}>
          go to Home
          </button>
    </div>
   </Container>
  )
}

export default Enterprise