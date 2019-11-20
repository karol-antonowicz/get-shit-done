import React from 'react'
import './Item.css'

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.todo.active

        }
    }

    toggleActive(){
        const newActive = !this.state.active
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({active:newActive})
        });
        console.log(this.state.active)
        console.log(this.props.todo)
        this.setState({active:newActive})

    }

    render(){
        return(
        <div className="item">
            <div className="text">{this.props.todo.text}</div>
            <div className="active"><button onClick={()=>this.toggleActive()}>activate</button>{this.state.active?'ACTIVE':'NOT ACTIVE'}</div>
            <div className="id">{this.props.todo.id}</div>
        </div>
        )
    }
}


export default ToDoItem