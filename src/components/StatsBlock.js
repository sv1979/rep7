import React, { Component } from 'react';

class StatsBlock extends Component {
    constructor(props) {
        super(props);
    }

    getTotalTodosCount(){
        return this.props.todos.length;
    }

    getDoneTodosCount(){

        let doneTodos = this.props.todos.filter((el)=>{
            return el.status===true
        });
        return doneTodos.length;
    }

    render() {
        return (
            <div className="stats">
                <p>Total: {this.getTotalTodosCount()}</p>
                <p>Done: {this.getDoneTodosCount()}</p>
            </div>
        );
    }
}

export default StatsBlock;