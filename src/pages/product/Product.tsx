import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router'
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Container from '../../components/container/Container';
const Product = ()  : React.ReactNode=> {
   const navigate = useNavigate();
  return (
    <Container>
      <div className='product-root'>
       <NavigationBar />
        <h1>Product Route</h1>
        <button onClick={()=>{
          navigate('/');
        }}>
          go to Home
          </button>
    </div>
    </Container>
  )
}

export default Product;