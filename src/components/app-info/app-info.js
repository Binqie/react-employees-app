import { Component } from 'react';
import './app-info.css';

export default class AppInfo extends Component {
    render() {
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: </h2>
                <h3>Премию получат: </h3>
            </div>
        )
    }
}