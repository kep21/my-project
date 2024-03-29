import React from "react";
import './Comments.css';
import Listitems from "./Listitems";


class Comments extends React.Component{
  constructor (props) {
    super(props);
    this.state={
      items:[],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }


handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key:Date.now()
    }
  })
}

addItem(e){
  e.preventDefault();
  const newItem= this.state.currentItem;
	console.log(newItem)
  if(newItem.text!==""){
    const newItems=[...this.state.items, newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
}
 render() {
   return( <div>
     <header>
       <form id="to-do-form" onSubmit={this.addItem}>
         <input type="text" placeholder="Enter Text"
         value={this.state.currentItem.text}
         onChange={this.handleInput}/>
         <button type="submit">Submit</button>
       </form>
     </header>
		 <Listitems items= {this.state.items}/>
		 </div>
   )
 }
}
export default Comments;
