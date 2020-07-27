import React, { Component } from 'react'

export default class App extends Component {
    state ={
        peopleInSpace: []
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then((json) => {
            this.setState({peopleInSpace: json.people})
            })
    }
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }
}
