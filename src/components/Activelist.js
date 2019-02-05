import React, { Component } from 'react';
import Headblock from './Headblock';
import TodoItem from './TodoItem';
import List from './List';

const styles = { color: "#998900", fontStyle: 'italic' };

class Activelist extends Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    removeTodo(id) {
        console.log('id to remove:', id);
        this.props.removeTodoById(id);
    }

    changeStatus(id) {
        console.log('id to change:', id);
        this.props.changeStatus(id);
    }
    
    render() {
        return (
            <div className="activelist">
                <List todos={this.props.todos}
                    changeStatus={this.changeStatus}
                    removeTodoById={this.removeTodo} />
            </div>
        );
    }
}

export default Activelist;
