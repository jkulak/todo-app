import React from 'react';

class TodoAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormSelectChange = this.handleFormSelectChange.bind(this);
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
    }

    initState() {
        this.setState({
            formCategory: 0,
            formInput: "",
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.formInput !== "") {
            this.props.addTodo(this.state.formInput, this.state.formCategory);
            this.initState();
            // this.refs.title.focus();
        } else {
            alert("Can't add an empty todo!");
        }
    }

    componentWillMount() {
        this.initState();
    }

    renderCategories() {
        if (this.props.categories !== null) {
            return this.props.categories.map((v, k) => (
                <option key={k} value={k}>{v}</option>
            ));
        }
    }

    handleFormInputChange(e) {
        const text = e.target.value;
        this.setState({
            formInput: text
        });
    }

    handleFormSelectChange(e) {
        const category = e.target.value
        this.setState({
            formCategory: category
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus type="text" value={this.state.formInput} placeholder="Enter new todo..." onChange={this.handleFormInputChange}/>
                <select value={this.state.formCategory} onChange={this.handleFormSelectChange}>
                    {this.renderCategories()}
                </select>
                <input type="submit" value="Add" />
            </form>
        );
    };
}

TodoAdd.defaultProps = {
    categories: [],
    addTodo: () => {alert('Empty')},
};

export default TodoAdd;
