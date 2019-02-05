import React, { Component } from 'react';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const submitted_text = this.refs.todo_text.value;
        //alert('A text was submitted: ' + submitted_text);
        
        this.props.add_todo({text:submitted_text});
        this.setState({ text: '' });
    }

    render() {
        return (
            <div className="editor">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" ref="todo_text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default Editor;