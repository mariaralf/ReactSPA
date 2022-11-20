import React, { Component } from 'react';

export default class Starter extends Component {
    static displayName = Starter.name;

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        return (
            <form method="post" action="https://localhost:7111/api/Hotels" target="_self">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="desc" placeholder="Desc"/>
                <input type="submit"/>
            </form>
        );
    }

    async populateWeatherData() {

    }
}
