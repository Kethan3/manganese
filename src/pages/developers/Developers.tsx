import React from 'react'
import './Developers.css'
import {  useNavigate } from 'react-router'
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Container from '../../components/container/Container';
const Developers = () : React.ReactNode => {
  const navigate = useNavigate();
 
  return (
   <Container>
     <div className='developers-root'>
       <NavigationBar />
        <h1>Developers Route</h1>
        <button onClick={()=>{
          navigate('/');
        }}>
          go to Home
          </button>
    </div>
   </Container>
  )
}

export default Developers