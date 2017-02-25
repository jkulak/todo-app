import React from 'react';
import uuid from 'uuid';
import TodoAdd from './TodoAdd';

class TodoList extends React.Component {

    initTodos() {
        return [];
    }

    constructor() {
        super();
        this.state = {
            todos: this.initTodos()
        };
    }

    addTodo(title, category) {
        const todo = {
            title,
            completed: false,
            added: Math.floor(Date.now() / 1000),
            category,
            id: uuid.v4()
        };
        this.setState({todos: this.state.todos.concat(todo)})
    }

    getTodosList() {
        return this.state.todos.map(v =>
            <li key={v.id} className={`completed-${v.completed}`}>{v.title}</li>
        );
    }

    render() {
        return (
            <ul className="list">
                <li><TodoAdd callbackAddTodo={this.addTodo.bind(this)} /></li>
                {this.getTodosList()}
            </ul>
        );
    };
}

export default TodoList;
