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
        alert('A text was submitted: ' + this.state.text);
        event.preventDefault();
    }

    render() {
        return (
            <div className="editor">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Editor;