import { Component } from 'react';
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

     render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавте нового сотрудника</h3>
                <form className="add-form d-flex"
                      onSubmit={this.onSubmit}>
                    <input  onChange={this.onValueChange}
                            type="text"
                            name='name'
                            value={name} 
                            className="form-control new-post-label"
                            placeholder='Как его зовут?'/>
    
                    <input  onChange={this.onValueChange}
                            type="number"
                            name='salary'
                            value={salary} 
                            className="form-control new-post-label"
                            placeholder='З/П в $'/>
    
                    <button type='submit'
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
     }
}