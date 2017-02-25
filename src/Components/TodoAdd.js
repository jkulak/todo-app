import React from 'react';

class TodoAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            category: 0
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.refs.title.value;
        const category = this.refs.category.value;

        if (title !== "") {
            this.props.addTodo(title, category);
            this.refs.title.value = "";
            this.refs.title.focus();
        } else {
            alert("Can't add an empty todo!");
        }
    }

    handleChange() {
        this.setState({category: this.refs.category.value});
    }

    componentDidMount() {
        this.refs.title.focus();
    }

    renderCategories() {
        if (this.props.categories !== null) {
            return this.props.categories.map((v, k) => (
                <option key={k} value={k}>{v}</option>
            ));
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Enter new todo..."/>
                <select ref="category" value={this.state.category} onChange={this.handleChange}>
                    {this.renderCategories()}
                </select>
                <input type="submit" value="Add" />
            </form>
        );
    };
}

export default TodoAdd;
