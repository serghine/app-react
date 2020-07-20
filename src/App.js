import React ,{Component} from 'react';
import Mycars from "./component/Mycars";
import './App.css';

class App extends Component{

  state={
    titre:"Cathalogue de Voitures"
  }


  changerTitreAvecInput=(e)=>{
   //console.log(e.target.value)
   this.setState({
     titre:e.target.value
   })
  }
  


    
  
//state initiial du titre
//pas trouver le moyen <apres className=""></apres>
//bind
changerAvecBind=(param)=>{
  this.setState({
    titre:param    
  })

}

  //changer avec un param
  changeTitreViaParam=(titre)=>{
   this.setState({
     titre:titre
   })
  }


changeTitrev=(e)=>{
  this.setState({
    titre:"hello"
  })
}



  changeTitre=(e)=>{
    console.log();
    e.target.classList.add('titre')

}
initialisation=(e)=>{
e.target.classList.remove("titre")
}
render(){
 
  return (
    <div className="App">
      
      <h1 style={{textAlign:"center"}}
       onMouseOver={this.changeTitre}
       onMouseOut={this.initialisation}>
         {this.state.titre}
         </h1>
         
         <Mycars/>
     <button onClick={this.changeTitrev}>changer titre</button>
     <button onClick={()=>this.changeTitreViaParam("heloo by param")}>changer via param</button>
     <button onClick={this.changerAvecBind.bind(this,'hello bind')}>Bind</button>
     <input type="text" value={this.state.titre} onChange={this.changerTitreAvecInput}/>
     </div>
  );
}
}

export default App;
