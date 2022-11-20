import React, { Component } from 'react';

export default class DelForm extends Component {
    static displayName = DelForm.name;

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        return (
            <form method="post" action="https://localhost:7111/api/Roles" target="_self">
                <input type="text" name="hotid" placeholder="ID"/>
                <input type="submit"/>
            </form>
        );
    }

    async populateWeatherData() {

    }
}
