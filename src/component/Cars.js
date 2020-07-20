import React from "react";


const Cars=(props)=>{
console.log(props.enrgy)
  return(
    <div style={{backgroundColor:"orange",padding:"1%"}}>
        <img style={{weight:"100px",width:"200px"}} src={props.src} alt=""/>
    <p>marque:{props.children}</p>
    <p>Energy:{props.enrgy}</p>
    <p>Age:{props.annee}</p>
     <p>Annee:{props.annee}</p>
     <button>Acheter</button><button  style={{marginLeft:"10px",color:'wight'}}>details</button>    
    </div>
    )
}


export default Cars;