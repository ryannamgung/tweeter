import React, { Component } from 'react';
import ReactDOM from "react-dom"

class Forms extends Component{
  // const that = null
  constructor(props){
    super(props)
    this.state ={
      comment: "",
      // kill: ""
    }
    // that = null
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form>
          Comment: <input onChange={this.handleForm} type="text" name="comment" value={this.state.comment}/>
          <button type="submit">Comment</button><hr/>
        </form>
        <div>
          Erase Cats: <input type="checkbox" name="input1" value="Erase Cats"/>
           Erase Dogs: <input type="checkbox" name="input2" value="Erase Dogs"/>
           Erase Jon: <input type="checkbox" name="input3" value="Erase Jon"/>
        </div>
      </div>
    )
  }
  // Erase all Kitties: <input onChange={this.handleForm} type="text" name="kill" value={this.state.kill}/>
}

export default Forms
