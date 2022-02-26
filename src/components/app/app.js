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
      ],
      term: '',
      filter: 'all'
    } 
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
        data: data.filter(elem => elem.id !== id)
    }))
  }

  addItem = (name, salary) => {
    if (name.length < 2 || salary < 1) return;
    this.setState(({data}) => ({
      data: [...data, {name, salary, increase: false, rise: false, id: this.maxId++}]
    }))
  }

  onChangeSalary = (id, salary) => {
    console.log(salary)
    console.log(id)
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, salary: salary}
        }
        return elem;
      })
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

  searchEmp = (items, term, filter) => {
     const filteredItems = this.filterEmp(items, filter)

    return filteredItems.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }
  
  onUpdateFilter = (filter) => {
    this.setState({filter})
  }

  filterEmp = (items, prop) => {
    if (prop === 'increase') {
      return items.filter(item => {
        return item.increase
      })
    } else if (prop === 'salary') {
      return items.filter(item => {
        return item.salary >= 1000
      })
    } else {
      return items;
    }
  }
  
  render() {
    const {data, term, filter} = this.state;
    const allEmployees = this.state.data.length;
    const increasedEmployees = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, term, filter);

    return (
      <div className="app">
        <AppInfo
                allEmployees={allEmployees}
                increasedEmployees={increasedEmployees}/>
  
        <div className="search-panel">
          <SearchPanel
                      onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter
                      filter={filter}
                      onUpdateFilter={this.onUpdateFilter}/>
        </div>
  
        <EmployeesList 
                      data={visibleData}
                      onDelete={this.deleteItem}
                      onToggleProp={this.onToggleProp}
                      onChangeSalary={this.onChangeSalary}/>
        <EmployeesAddForm
                      onAdd={this.addItem}/>
      </div>
    )
  }
}
