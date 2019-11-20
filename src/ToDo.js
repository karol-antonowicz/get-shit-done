import React from 'react'


class ToDo extends React.Component{
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
            <form onSubmit={this.addToDo}>
                <input placeholder="put your shit here" value={this.state.text} onChange={e=>this.setState({text:e.target.value})}></input>
                <button type="submit" >Add Task</button>
            </form>
        )
    }
}

export default ToDo