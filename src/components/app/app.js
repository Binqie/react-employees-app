import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'James McAvoy', salary: 500, increase: true, rise: false, id: 1},
        {name: 'Hugh Jackman', salary: 1000, increase: false, rise: true, id: 2},
        {name: 'Roberto Junior', salary: 1200, increase: false, rise: false, id: 3},
        {name: 'Bully Maguire', salary: 5200, increase: true, rise: false, id: 4},
      ]
    }
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
        data: data.filter(elem => elem.id !== id)
    }))
    this.maxId--;
  }

  addItem = (name, salary) => {
    this.setState(({data}) => ({
      data: [...data, {name, salary, increase: false, rise: false, id: this.maxId++}]
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(elem => {
          if (elem.id === id) {
            return {...elem, [prop]: !elem[prop]}
          }
          return elem;
        })
    }))
  }
  
  render() {
    const allEmployees = this.state.data.length;
    const increasedEmployees = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo
                allEmployees={allEmployees}
                increasedEmployees={increasedEmployees}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
                      data={this.state.data}
                      onDelete={this.deleteItem}
                      onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
                      onAdd={this.addItem}/>
      </div>
    )
  }
}
