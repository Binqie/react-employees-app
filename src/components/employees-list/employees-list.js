import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default function EmployeesList({data, onDelete, onToggleProp}) {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                    {...itemProps}
                    key={id}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )

}