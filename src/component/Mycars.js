import React,{Component}from 'react';
import Cars from './Cars';
import  "./Mycars.css";

class Mycars extends Component{
    state={
        voiture:[
            {name:"FORD",monger:"essence",photo:"ford.png",annee:2000},
            {name:"MERCEDES",monger:"DIEZL",photo:"Mercedes.png",annee:2005}
        ]
    }
    
    addAge=()=>{
        const updateStat=this.state.voiture.map((param)=>{
            return param.annee -=10
        })
        
        this.setState({
            updateStat
        })
      }


    render(){
      const annee=new Date().getFullYear();
        return(
            <div style={{marginRight:"500px"}} >
                <button onClick={this.addAge}>+10 ans</button>
                {/* <Cars annee={annee-this.state.voiture[0].annee} enrgy={this.state.voiture[0].monger} src={this.state.voiture[0].photo}>{this.state.voiture[0].name}</Cars>
                <br/>
                <Cars annee={annee-this.state.voiture[1].annee} enrgy={this.state.voiture[1].monger} src={this.state.voiture[1].photo}>{this.state.voiture[1].name}</Cars> */}
           {
            this.state.voiture.map((voiture,index)=>{
                return(
                    <Cars key={index} children={voiture.name} enrgy={voiture.monger} src={voiture.photo} annee={annee-voiture.annee} />
                )
            })     
        }



            </div>
            
        )
      
    }
}

export default Mycars;