import React, { Component } from 'react';
import TodoItem from './TodoItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.edit_todo_by_id = this.edit_todo_by_id.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    removeTodo(id) {
        console.log('id to remove:', id);
        this.props.removeTodoById(id);
    }

    edit_todo_by_id(id) {
        console.log('id to edit:', id);
        this.props.edit_todo_by_id(id);
    }
    
    changeStatus(id) {
        console.log('id to change:', id);
        this.props.changeStatus(id);
    }

    getList() {
        let list_todos = null;

        if (this.props.todos.length) {
            let $this = this;
            list_todos = this.props.todos.map((todo, idx) => {
                return (
                    <TodoItem onetodo={todo}
                        key={idx} onekey={idx}
                        changeStatus={$this.changeStatus}
                        edit_todo_by_id={this.edit_todo_by_id}
                        removeTodoById={$this.removeTodo} />
                )
            });
        }

        return list_todos;
    }

    render() {
        return (
            <div className="list">
                {this.getList()}
            </div>
        );
    }
}

export default List;