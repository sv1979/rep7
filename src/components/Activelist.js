import React, { Component } from 'react';
import TodoItem from './TodoItem';

const styles = { color: "#998900", fontStyle: 'italic' };

class Activelist extends Component {
    constructor(props) {
        super(props);
    }

    todos = this.props.todos.length ? this.props.todos.map((todo, idx) => { return <TodoItem onetodo={todo} key={idx} /> }) : '';

    render() {
        return (
            <div className="activelist">
                <h4 style={styles} > It is currently about {this.props.date.getHours() % 12} o'clock!</h4>

                {this.todos}
            </div>
        );
    }
}

export default Activelist;
