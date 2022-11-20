import React, { Component } from 'react';

export default class Starter extends Component {
    static displayName = Starter.name;

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        return (
            <div>
                <h1 id="tabelLabel" >Task#30</h1>
                <h2>React SPA</h2>
            </div>
        );
    }

    async populateWeatherData() {

    }
}
