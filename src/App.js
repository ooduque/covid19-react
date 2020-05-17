import React from 'react';

import { Cards, Chart, CountryPicker, Title } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import covidimage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.foot}><a href="https://covid19.mathdro.id/api">API Used: https://covid19.mathdro.id/api </a></div>
                <img className={styles.image} src={covidimage} alt="COVID-19" />
                <Title TitleName="GLOBAL CASES" country={country}/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Title graph={"GRAPH: "} country={country}/>  
                <Chart data={data} country={country} /> 
                <div className={styles.foot}>Designed by&nbsp;<a href="">Atanda Olanrewaju</a>&nbsp; &copy; 2020</div>
            </div>
        )
    }
}

export default App;