import React, {Component} from "react";
import "./App.css";


export default class App extends Component{

  state={
    todoData :[
      {
        id:"1",
        title:"Study",
        completed:true
      },
      {
        id:"2",
        title:"Clean",
        completed:false
      }
    ]

  }
  btnStyle={
    color:"#fff",
    border:"none",
    padding: "5px 9px",
    borderRadius:"50%",
    cursor:"pointer",
    float:"right"
  }

  getStyle=()=> {
    return{ 
      padding:"10px", 
      borderBottom: "1px #ccc dotted",
      textDecoration:'none'
    }
  }


  handleClick=(id)=>{
    let newtodoData = this.state.todoData.filter(data=> data.id !== id)
    console.log('newtodoData',newtodoData )

    this.setState({todoData:newtodoData})

  }

   
  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>


          {this.state.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false}></input>
                {data.title}
                <button style={this.btnStyle} onClick={()=> this.handleClick(data.id)}>x</button>
            </div>
          ))}  
        
        </div>
     </div>
    )
  }
} 
