import React from 'react'
import './Item.css'
import Delete from './images/delete.png'

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.todo.active,
            todo: props.todo,
            todoText: props.todo.text,
            id: props.todo.id
        }
    }
    toggleActive() {
        const newActive = !this.state.active
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.state.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ active: newActive })
        });
        this.setState({ active: newActive })
    }
    delete() {
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.state.id}.json`, {
            method: 'DELETE',
        });
    }
    handleTextChange = newValue => {
        console.log(this.state.todoText)
        this.setState({
            todoText: newValue
        });
    };
    updateTodo() {
        const newText = this.state.todoText
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.state.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ text: newText })
        });
        this.setState({ todoText: newText })
    }
    render() {
        return (
            <div className="item">
                <div className="toggle"><input onClick={() => this.toggleActive()} defaultChecked={!this.state.active} type="checkbox" className="tickToggle"></input></div>
                <div className="text"><input onKeyPress={event => { if (event.key === 'Enter') { this.updateTodo(); } }} onChange={event => {
                    this.handleTextChange(event.target.value);
                }} className={this.state.active?'inputText':'inputTextDone'} type='text' value={this.state.todoText}></input></div>
                <div className="delete" onClick={() => this.delete()}><img alt='delete' className="cross" src={Delete}></img></div>
            </div>
        )
    }
}
export default ToDoItem