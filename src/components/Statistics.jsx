import { useState } from "react"
import { Link } from "react-router-dom"
export const MainStatistics = ({setActiveIndex}) => {
    const myIcon = 'material-icons-sharp'
    const [pendingNum, setPuningNum] = useState(25) 
    const [approvedNum, setApprovedNum] = useState(14) 
    const [rejectedNum, setRejectedNum] = useState(11) 
    
    return(
        <div className="statistics">
                    <div className='pending'>
                    <Link to="/Pending" onClick={() => setActiveIndex(1)}>
                        <span className={myIcon}>pending_actions</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Pending Applications</h3>
                                <h1>{pendingNum}</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>81%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                        </Link>
                    </div>
                    {/*----------------End of Penidings -------------------------*/ }
                    <div className='approved'>
                    <Link to="/Approved" onClick={() => setActiveIndex(2)}>
                        <span className={myIcon}>done</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Approved Applications</h3>
                                <h1>{approvedNum}</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>65%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                        </Link>
                    </div>
                    {/*----------------End of approved -------------------------*/ }
                    <div className='disapproved'>
                    <Link to="/Rejected" onClick={() => setActiveIndex(3)}>
                        <span className={myIcon}>close</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Disaproved Applications</h3>
                                <h1>{rejectedNum}</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <b>35%</b>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 hours</small>
                        </Link>
                    </div>
                </div> 
    )
} 