import React, { Component } from 'react';
import TodoItem from './TodoItem';

const date = new Date();
const styles = { color: "#998900", fontStyle: 'italic' };


class Activelist extends Component {

    render() {
        return (
            <div className="activelist">
                <h4 style={styles} > It is currently about {date.getHours() % 12} o'clock!</h4>

                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        );
    }
}

export default Activelist;
