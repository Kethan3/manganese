import React from 'react'
import './Pricing.css'
import { useNavigate } from 'react-router'
import NavigationBar from '../../components/navigation-bar/NavigationBar';
const Pricing = (): React.ReactNode=> {
    const navigate = useNavigate();
  return (
    <div className='pricing-root'>
         <NavigationBar />
        <h1>Pricing</h1>
        <button onClick={()=>{
          navigate('/');
        }}>
          go to Home
          </button>
    </div>
  )
}

export default Pricing;