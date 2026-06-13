import { useState} from 'react';
import {Link} from 'react-router-dom'
export const SideBar = ({ setActiveIndex, activeIndex}) => {
    const myIcon = 'material-icons-sharp'
    

return(
    <div className='sidebar'>
        <Link to="/" className={activeIndex === 0 ? 'active' : ''} onClick={() => setActiveIndex(0)}>
            <span className={myIcon}>grid_view</span>
            <h3>Dashboard</h3>
        </Link>
        <Link to="/Pending" className={activeIndex === 1 ? 'active' : ''} onClick={() => setActiveIndex(1)}>
            <span className={myIcon}>pending_actions</span>
            <h3>Pending </h3>
        </Link>
        <Link to="/Approved" className={activeIndex === 2 ? 'active' : ''} onClick={() => setActiveIndex(2)}>
            <span className={myIcon}>inventory</span>
            <h3>Approved </h3>
        </Link>
        <Link to="/Rejected" className={activeIndex === 3 ? 'active' : ''} onClick={() => setActiveIndex(3)}>
            <span className={myIcon}>cancel</span>
            <h3>Rejected </h3>
        </Link>
        <Link to="#">
            <span className={myIcon}>logout</span>
            <h3>Logout</h3>
        </Link>
    </div>
)
}