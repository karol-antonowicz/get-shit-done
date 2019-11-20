import React from 'react'
import './Item.css'

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.todo.active,
            todo: props.todo

        }
    }

    toggleActive(){
        const newActive = !this.state.active
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({active:newActive})
        });
        this.setState({active:newActive})

    }

    delete(){
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
            method: 'DELETE',
        });

    }

    render(){
        return(
        <div className="item">
            <div className="text">{this.props.todo.text}</div>
            <div className="active">{this.state.active?'ACTIVE':'NOT ACTIVE'}</div>
            <div className="id">{this.props.todo.id}</div>
            <button onClick={()=>this.toggleActive()}>activate</button>
            <button onClick={()=>this.delete()}>delete</button>
        </div>
        )
    }
}


export default ToDoItem