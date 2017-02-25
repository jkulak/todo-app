import React from 'react';

class TodoAdd extends React.Component {

    addTodo(e) {
        e.preventDefault();
        const title = this.refs.title.value;
        if (title !== "") {
            this.props.callbackAddTodo(title, 3)
            this.refs.title.value = "";
            this.refs.title.focus();
        } else {
            alert("Can't add an empty todo!");
        }
    }

    componentDidMount() {
        this.refs.title.focus();
    }

    render() {
        return (
            <form onSubmit={this.addTodo.bind(this)}>
                <input type="text" ref="title" placeholder="Enter new todo..."/>
                <input type="submit" value="Add" />
            </form>
        );
    };
}

export default TodoAdd;
