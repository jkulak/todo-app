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

TodoItem.defaultProps = {
  todo: {
      title: "Empty todo",
      category: 0,
      added: moment(),
      completed: false
  },
  categories: []
};

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired
};

export default TodoItem;
