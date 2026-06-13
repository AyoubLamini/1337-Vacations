import { MainTable } from './Table'; 
import { MainStatistics } from './Statistics'; 
import { Link } from 'react-router-dom';

export const Dashboard = ({setActiveIndex}) => {

    return (
                <>
                        <h1>Dashboard</h1>
                        <MainStatistics setActiveIndex={setActiveIndex} />
                        <div className="recent-applications">
                        <h2>Recent Applications</h2>
                        <MainTable />
                        <Link to="/Pending" onClick={() => setActiveIndex(1)}>Show All</Link>
                        </div>     
                </> 
    )
}
