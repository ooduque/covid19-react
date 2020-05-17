import React, { Component } from 'react';
import styles from './Title.module.css';

export default class Title extends Component {
    render() {
        
        var graph = (this.props.graph)
        var title = (this.props.country?this.props.country:"GLOBAL CASES");
        

        return (
            
            <div className={styles.container}>
                <div>
                    {graph}{title}
                </div>
            </div>
            
        )
    }
}