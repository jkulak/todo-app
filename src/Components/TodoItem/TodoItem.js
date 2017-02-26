import React from 'react';
import moment from 'moment';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this, this.props.todo.id);
    }

    handleClick(id) {
        this.props.toggleDone(id);
    }

    render() {
        return (
            <li className={`completed-${this.props.todo.completed}`} onClick={this.handleClick}>
                {this.props.todo.title} ({this.props.categories[this.props.todo.category]}) <span className="added">added {moment(this.props.todo.added).fromNow()}</span>
            </li>
        );
    };
}

export default TodoItem;
