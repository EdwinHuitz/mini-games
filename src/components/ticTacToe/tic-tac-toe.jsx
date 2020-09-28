import React, {Component} from 'react'
import './ttt.css'

export default class tictactoe extends Component{
   
   state={
      player:'X',
      game:[['','',''],['','',''],['','','']],
      win:0,
      winner:''
   }
   resetGame(){
      for (let i = 0; i < 3; i++) {
            this.setState(this.state.game[i].fill(''))
            this.setState({player:'X',win:0,winner:''})
         }
      }
   curPlayer(row,box){
      if(this.state.win===0){
         let winner=this.state.player;
         if(this.state.game[row][box]!=='X' && this.state.game[row][box]!=='O'){
            this.state.player==='X'?this.setState({player:'O'}):this.setState({player:'X'})
            this.setState(this.state.game[row].splice(box,1,this.state.player))
         }
         this.gameLogic(winner)
      }
   }
   gameLogic(w){
         const g=this.state.game;
         const a=g[0];
         const b=g[1];
         const c=g[2];
         const x='X,X,X';
         const o='O,O,O';
         let ans=()=>(
         //vertical
         a.toString()===x ||
         a.toString()===o ||
         b.toString()===x ||
         b.toString()===o ||
         c.toString()===x ||
         c.toString()===o ||
         //horizontal
         [a[0],b[0],c[0]].toString()===x ||
         [a[0],b[0],c[0]].toString()===o ||
         [a[1],b[1],c[1]].toString()===x ||
         [a[1],b[1],c[1]].toString()===o ||
         [a[2],b[2],c[2]].toString()===x ||
         [a[2],b[2],c[2]].toString()===o ||
         //diagonal
         [a[0],b[1],c[2]].toString()===x ||
         [a[0],b[1],c[2]].toString()===o ||
         [a[2],b[1],c[0]].toString()===x ||
         [a[2],b[1],c[0]].toString()===o )?this.setState({winner:w,win:1}):(
         //tie
         a.toString().length===5 &&
         b.toString().length===5 &&
         c.toString().length===5)?this.setState({win:2}):'';
         ans()
   }
   createGrid(){
      let x=[];
      let row=0;
      for (let i = 0; i < 3; i++) {
         (row===1)?x.push(
            <tr>
            <td id={'0'+i} onClick={()=>this.curPlayer(0,i)} className="ttt3"><h1 className="tttF">{this.state.game[0][i]}</h1></td>
            <td id={'1'+i} onClick={()=>this.curPlayer(1,i)} className="ttt2"><h1 className="tttF">{this.state.game[1][i]}</h1></td>
            <td id={'2'+i} onClick={()=>this.curPlayer(2,i)} className="ttt3"><h1 className="tttF">{this.state.game[2][i]}</h1></td>
         </tr>)
         :x.push(
            <tr>
            <td id={'0'+i} onClick={()=>this.curPlayer(0,i)}><h1 className="tttF">{this.state.game[0][i]}</h1></td>
            <td id={'1'+i} onClick={()=>this.curPlayer(1,i)} className="ttt1"><h1 className="tttF">{this.state.game[1][i]}</h1></td>
            <td id={'2'+i} onClick={()=>this.curPlayer(2,i)}><h1 className="tttF">{this.state.game[2][i]}</h1></td>
         </tr>)
         row++;
      }
      return(
         <table className="ttt">
            <tbody>
               <tr><td colSpan="3">{this.state.win===0?this.state.player+"'s Turn!":this.state.win===1?this.state.winner+' Has Won the Game!':"It's a Tie!"}</td></tr>
               {x}
            </tbody>
         </table>
      )
   }
   render(){
      return(
         <>
            <button onClick={()=>this.resetGame()} className="rsBtn"><h3>Reset</h3></button>
            {this.createGrid()}

         </>
      )
   }
}