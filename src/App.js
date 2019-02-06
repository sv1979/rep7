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
      todos: [],
      editing_todo_id: null,
      text_to_edit: ''
    };
    this.saveTodoItem = this.saveTodoItem.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.edit_todo_by_id = this.edit_todo_by_id.bind(this);
  }

  saveTodoItem(new_todo) {

    let current_todos = this.state.todos.length ? this.state.todos : [];

    if(this.state.editing_todo_id){
      let editing_index = current_todos.findIndex(obj => obj.id === this.state.editing_todo_id);
      current_todos[editing_index].text = new_todo.text;
      this.setState({
        editing_todo_id: null,
        text_to_edit: '',
        todos: current_todos
      });
    } else {
      new_todo.id = this.getNewId();
      new_todo.status = false;
      this.setState({
        todos: [new_todo, ...current_todos]
      });
    }
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

  edit_todo_by_id(id){
    this.setState({
      editing_todo_id: id
    });

    let todo_to_edit = this.state.todos.length ? this.state.todos.filter((el)=>{
      if(el.id === id){
        return el;
      }     
    })[0] : null;

    this.setState({
      text_to_edit: todo_to_edit ? todo_to_edit.text : ''
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
        <Editor add_todo={this.saveTodoItem} pre_text={this.state.text_to_edit} />
        <Activelist
          todos={this.state.todos}
          date={this.state.date}
          changeStatus={this.changeStatus}
          edit_todo_by_id={this.edit_todo_by_id}
          removeTodoById={this.removeTodo} />
        <StatsBlock todos={this.state.todos} />  
      </div>
    );
  }
}

export default App;
