import { Component } from 'react';
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        const elements = this.data.map((item) => {
            const {id, ...itemProps} = item;
            return <EmployeesListItem {...itemProps} key={id}/>
        })
    
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}