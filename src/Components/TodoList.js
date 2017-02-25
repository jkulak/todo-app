import React from 'react';
import uuid from 'uuid';
import TodoAdd from './TodoAdd';

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: this.initTodos(),
            categories: this.initCategories(),
        };
    }

    initTodos() {
        return [];
    }

    initCategories() {
        return [
            "Private",
            "Work",
            "Free time",
            "School",
            "Shopping"
        ];
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
            <li key={v.id} className={`completed-${v.completed}`}>{v.title} ({this.state.categories[v.category]}, added: {v.added})</li>
        );
    }

    render() {
        return (
            <ul className="list">
                <li><TodoAdd addTodo={this.addTodo.bind(this)} categories={this.state.categories}/></li>
                {this.getTodosList()}
            </ul>
        );
    };
}

export default TodoList;
