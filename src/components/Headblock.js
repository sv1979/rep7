import React, { Component } from 'react';

const styles = { color: "#998900", fontStyle: 'italic' };

class Headblock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h4 style={styles} > It is currently about {this.props.date.getHours() % 12} o'clock!</h4>
        );
    }
}

export default Headblock;