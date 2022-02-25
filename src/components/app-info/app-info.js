import './app-info.css';

export default function AppInfo({allEmployees, increasedEmployees}) {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h3>Премию получат: {increasedEmployees}</h3>
        </div>
    )
}