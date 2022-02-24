import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

export default class App extends Component {
  render() {
    const data = [
      {name: 'James McAvoy', salary: 500, increase: true, id: 1},
      {name: 'Hugh Jackman', salary: 1000, increase: false, id: 2},
      {name: 'Roberto Junior', salary: 1200, increase: false, id: 3},
      {name: 'Bully Maguire', salary: 5200, increase: true, id: 4},
    ]
  
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
      </div>
    )
  }
}
