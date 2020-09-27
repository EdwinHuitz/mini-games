import React, { Component } from 'react';
import logo from '../../logo.svg';
import './nav.css'
import {Link} from 'react-router-dom';

export default class navbar extends Component{
   //first is name of state and second sets the state
   state={
      Pick:1,
   }
   offOn()
   {
      this.state.Pick===1?this.setState({Pick:2}):this.setState({Pick:1})
   }
   checkState(a,b)
  {
    if(this.state.Pick===1){return a}
    else{return b}
  }
   render(){
      return(
         <header className="top">
         <Link to={{pathname:'/'}}>
         <img src={logo} alt="" className="logo"></img>
         </Link>
         <h1>Mini-Games</h1>
         <button onClick={()=>this.offOn()} className={this.checkState('menuBtn','menuBtn1')}>|||</button>
         <table className={this.checkState('menu','menu1')}>
         <tbody>
            <tr>
               <td className="tdL"><h1 className="menuH">Games</h1><hr/></td>
            </tr>
            <tr>
               <td className="tdL"><Link to={{pathname:'/tic-tac-toe'}} onClick={()=>this.offOn()}><h3 className="menuL">Tic-Tac-Toe</h3></Link><hr className="subtle"/></td>
            </tr>
         </tbody>
         </table>
         </header>
      )
   }
}