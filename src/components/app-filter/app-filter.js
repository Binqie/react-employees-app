import './app-filter.css';

export default function AppFilter({filter, onUpdateFilter}) {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'Сотрудники на повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        return (
            <button 
                className={"btn" + (active ? ' btn-light' : ' btn-outline-light')}
                type='button'
                name={name}
                onClick={(e) => onUpdateFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}