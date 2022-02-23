import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

export default function EmployeesList({data}) {

    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem {...itemProps} key={id}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}