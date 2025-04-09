
import { createRoot } from 'react-dom/client'
import './main.css'
// import App from './App.tsx'
import Home from './pages/home/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Product from './pages/product/Product.tsx'
import Developers from './pages/developers/Developers.tsx'
import Enterprise from './pages/enterprise/Enterprise.tsx'

// const App = () :React.ReactNode => {
//   return <div> hello workd</div>
// }
// createRoot(document.getElementById('root')!).render( <App />)

// createRoot(document.getElementById('root')!).render( <Home max ={10} />)

createRoot(document.getElementById('root')!).render( 
     <BrowserRouter>
<Routes>
<Route path='/' element={ <Home  />} />
<Route path='/product' element = {<Product/>} />
<Route path='/developers' element = {<Developers/>} />
<Route path='/enterprise' element = { <Enterprise/>} />
<Route path='/pricing' element = { <Product/>} />

</Routes>

</BrowserRouter>)