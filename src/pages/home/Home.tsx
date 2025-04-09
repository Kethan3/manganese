

// const Home = (props : {text : string}) : React.ReactNode => {
//     return <div> {props.text}</div>
// }

import React from "react";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Container from "../../components/container/Container";
import { BerarCounter } from "./components/bear-counter/BearCounter";



// const Home =  (props : {max : number}) : React.ReactNode =>{
//    const  stars = "⭐"

//   return <>{Array.from({length : props.max }).map((_,i)=>( <div key={i}> {stars.repeat(i)}</div>))
    
//   }</>

// }


const Home = () : React.ReactNode => {
    return <>
   <div className="home-root">
   <NavigationBar />
   <Container>
    <BerarCounter/>
   </Container>
   </div>
    </>
}


export default Home ;