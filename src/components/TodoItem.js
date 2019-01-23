import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="todo__item">
                <input type="checkbox" />
                <p>{this.props.onetodo.text}</p>
            </div>
        );
    }
}

export default TodoItem;
