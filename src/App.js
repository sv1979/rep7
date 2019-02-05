import React, { Component } from 'react';
import './App.scss';
import Headblock from './components/Headblock';
import Activelist from './components/Activelist';
import Editor from './components/Editor';
import StatsBlock from './components/StatsBlock';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      todos: []
    };
    this.addTodoItem = this.addTodoItem.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);

  }

  addTodoItem(new_todo) {
    let current_todos = this.state.todos.length ? this.state.todos : [];
    new_todo.id = this.getNewId();
    new_todo.status = false;
    console.log('nt', new_todo);
    this.setState({
      todos: [new_todo, ...current_todos]
    });
  }

  removeTodo(id) {
    let current_todos = this.state.todos;
    current_todos = this.state.todos.filter((el)=>{
      return (el.id != id)
    });
    this.setState({
      todos: current_todos
    });
  }

  changeStatus(id) {
    let current_todos = this.state.todos;
    current_todos = this.state.todos.filter((el)=>{
      if(el.id === id){
        el.status = !el.status;
      }
      return el;
    });
    this.setState({
      todos: current_todos
    });
  }

  getNewId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    return (
      <div className="App">
        <Headblock date={this.state.date} />
        <Editor add_todo={this.addTodoItem} />
        <Activelist
          todos={this.state.todos}
          date={this.state.date}
          changeStatus={this.changeStatus}
          removeTodoById={this.removeTodo} />
        <StatsBlock todos={this.state.todos} />  
      </div>
    );
  }
}

export default App;
