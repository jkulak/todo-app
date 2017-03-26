import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {

    filters = {
        ALL: 'ALL',
        DONE: 'DONE',
        UNDONE: 'UNDONE'
    }

    constructor() {
        super();
        this.state = {
            todos: this.initTodos(),
            categories: this.initCategories(),
            filter: this.filters.ALL
        };

        this.toggleDone = this.toggleDone.bind(this);
    }

    initTodos() {
        return [
            {
                title: "Buy shoes",
                completed: false,
                added: moment("2017-01-22").toISOString(),
                category: 0,
                id: uuid.v4()
            },
            {
                title: "Sell everything",
                completed: false,
                added: moment("2017-02-22").toISOString(),
                category: 0,
                id: uuid.v4()
            },
            {
                title: "Call the evangelist",
                completed: true,
                added: moment("2017-02-26 07:10:11").toISOString(),
                category: 2,
                id: uuid.v4()
            },
        ];
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
            added: moment().toISOString(),
            category,
            id: uuid.v4()
        };
        this.setState({todos: this.state.todos.concat(todo)})
    }

    toggleDone(id) {
        this.setState({
            todos: this.state.todos.map(t => {
                t.completed = t.id === id ? !t.completed : t.completed
                return t;
            })
        })
    }

    renderTodos() {
        return this.state.todos.filter(v => {
            switch (this.state.filter) {
                case this.filters.DONE:
                    return v.completed === true;
                case this.filters.UNDONE:
                    return v.completed === false;
                default:
                    return true;
            }
        }).map(v =>
            <TodoItem
                key={v.id}
                categories={this.state.categories}
                todo={v} toggleDone={this.toggleDone}
            />
        );
    }

    handleFilter(filter) {
        this.setState({
            filter: this.filters[filter]
        });
    }

    renderFilters() {
        return Object.keys(this.filters).map(v =>
            <li
                key={v}
                className={this.state.filter === v ? "active" : ""}
                onClick={this.handleFilter.bind(this, v)}>
                {v}
            </li>
        );
    }

    render() {
        return (
            <div>filter:&nbsp;
                <ul className="filters">
                    {this.renderFilters()}
                </ul>
                <ul className="list">
                    <li>
                        <TodoAdd
                            addTodo={this.addTodo.bind(this)}
                            categories={this.state.categories}
                        />
                    </li>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    };
}

TodoList.defaultProps = {
    todo: {
        title: "Empty todo",
        category: 0,
        added: moment(),
        completed: false
    },
    categories: []
};

TodoList.propTypes = {
    todo: React.PropTypes.object.isRequired,
    categories: React.PropTypes.array.isRequired
};

export default TodoList;
