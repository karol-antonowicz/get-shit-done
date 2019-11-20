import React from 'react'


class ToDoInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:""
        }
    }

    addToDo = event => {
        event.preventDefault();

        fetch('https://to-do-app-5f68e.firebaseio.com/todo.json', {
            method: 'POST',
            body: JSON.stringify({text:this.state.text, active:"true"})
        });
        this.setState({text:""})
    }

    render(){
        return(
            <form class="addToDo" onSubmit={this.addToDo}>
                <input autoFocus className="inputBox" value={this.state.text} onChange={e=>this.setState({text:e.target.value})}></input>
                <label className="inputLabel">Put your shit here</label>
                
            </form>
        )
    }
}

export default ToDoInput