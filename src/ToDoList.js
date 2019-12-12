import React from 'react'
import ToDoItem from './ToDoItem'




class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.loadData();

        setInterval(() => this.loadData(), 3000);
    }

    loadData() {
        fetch('https://to-do-app-5f68e.firebaseio.com/todo.json')
            .then(res => res.json())
            .then(res => res ? res : {})
            .then(res=>Object.keys(res).map(key=>{
                const todo = res[key]
                todo.id=key;
                return todo;
            }))
            .then(todos=>this.setState({todos:todos}))
      
    }

    render() {
        return (<div>
            {this.state.todos.map((todo, index)=> <ToDoItem key={index} todo={todo}/> )}
        </div>)
    }
}


export default ToDoList
