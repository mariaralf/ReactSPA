import React, { Component } from 'react';
import Form from "./Form"
import DelForm from "./DelForm";
export default class Hotels extends Component {
    static displayName = Hotels.name;

    constructor(props) {
        super(props);
        this.state = { hotels: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(hotels) {
        return (
            <div id="inner_table">
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>HotelId</th>
                    <th>HotelName</th>
                    <th>HotelDesc</th>

                </tr>
                </thead>
                <tbody>
                {hotels.map(hotel =>
                    <tr key={hotel.hotelId}>
                        <td>{hotel.hotelId}</td>
                        <td>{hotel.hotelName}</td>
                        <td>{hotel.hotelDesc}</td>
                    </tr>

                )}
                </tbody>
            </table>
                <div>Введіть інформацію щодо нового готелю:</div>
                <Form></Form>
                <div>Введіть ІД готелю для видалення</div>
                <DelForm></DelForm>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : Hotels.renderForecastsTable(this.state.hotels);
        const styleObj = {
            border:'1px solid black'
        };
        return (
            <div style={styleObj}>
                <h1 id="tabelLabel" >Hotels:</h1>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('api/hotels');
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({ hotels: data, loading: false });
    }
}
