import React from 'react'
import './Item.css'
import Delete from './images/delete.png'
class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.todo.active,
            todo: props.todo,
            todoText: props.todo.text
        }
    }
    toggleActive() {
        const newActive = !this.state.active
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ active: newActive })
        });
        this.setState({ active: newActive })
    }
    delete() {
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
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
        fetch(`https://to-do-app-5f68e.firebaseio.com/todo/${this.props.todo.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ text: newText })
        });
        this.setState({ todoText: newText })
    }
    render() {
        return (
            <div className="item">
                <div className="toggle"><input onClick={() => this.toggleActive()} type="checkbox" className="tickToggle"></input></div>
                <div className="text"><input onKeyPress={event => { if (event.key === 'Enter') { this.updateTodo(); } }} onChange={event => {
                    this.handleTextChange(event.target.value);
                }} className={this.state.active?'inputText':'inputTextDone'} type='text' value={this.state.todoText}></input></div>
                <a className="delete" onClick={() => this.delete()}><img className="cross" src={Delete}></img></a>
            </div>
        )
    }
}
export default ToDoItem