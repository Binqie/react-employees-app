import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default function EmployeesList({data, onDelete, onToggleProp, onChangeSalary}) {
    const elements = data.map((item) => {
        const id = item.id;
        return <EmployeesListItem 
                    {...item}
                    key={id}
                    onDelete={() => onDelete(id)}
                    onChangeSalary={onChangeSalary}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}