import './employees-list-item.css'

export default function EmployeesListItem({name, salary, id, onDelete, onToggleProp, onChangeSalary, increase, rise}) {
    const classList = "list-group-item d-flex justify-content-between" + (increase ? ' increase' : '') + (rise ? ' like' : '');

    return (
        <li className={classList}>
            <span 
                className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}>{name}</span>

            <input  type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + '$'}
                    onChange={(e) => onChangeSalary(id, parseInt(e.target.value))}/>

            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type='button'
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button 
                    type='button'
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}