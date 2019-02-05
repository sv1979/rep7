import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
        this.remove_todo_by_id = this.remove_todo_by_id.bind(this);
        this.checkChange = this.checkChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            status: this.props.onetodo.status
        })
    }

    remove_todo_by_id() {
        this.props.removeTodoById(this.props.onetodo.id);
    }

    checkChange(event) {
        console.log(event.target.checked);
        this.setState({
            status: event.target.checked
        });
        this.props.changeStatus(this.props.onetodo.id);
    }

    render() {
        return (
            <div className="todo__item">
                <label className={this.state.status ? 'class_checked' : 'class_unchecked'}>
                    <input type="checkbox"
                        name={this.props.onekey}
                        onChange={this.checkChange}
                        checked={this.props.onetodo.status} />
                    <span>{this.props.onetodo.text}</span>
                </label>
                <button onClick={this.remove_todo_by_id} >Remove</button>
            </div>
        );
    }
}

export default TodoItem;
