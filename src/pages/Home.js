import React, { useState, useEffect} from 'react';
import '../styles/AdminDashboard.css';
import '../styles/VacancyApplications.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Dashboard components
import {SideBar} from '../components/Sidebar' 
import { AsideTop } from '../components/Aside-Top'; 
import { RightTopBar } from '../components/Right';
import { RecentUpdates } from '../components/RecentUpdates';


// Main components :
import { Dashboard } from '../components/Dash-board';
import { Pending } from '../components/Pending-Apps';
import { Approved } from '../components/Approved-Apps';
import {Rejected} from '../components/Rejected-Apps';



function AdminDashboard () {
      // ----------------------------------------------------------------------------------------------------
      // ------------- Dark mode and light mode hundle (+in refresh) ----------------------------------------
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme !== null ? storedTheme : 'lightmode';
      });
      useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);

      // ----------------------------------------------------------------------------------------------------
      // ------------- Theme toggler Active hundle (+in refresh) ----------------------------------------

      const [isLightActive, setIsLightActive] = useState(() => {
        const storedIsLightActive = localStorage.getItem('isLightActive');
        return storedIsLightActive !== null ? JSON.parse(storedIsLightActive) : true;
      });
    
      const [isDarkActive, setIsDarkActive] = useState(() => {
        const storedIsDarkActive = localStorage.getItem('isDarkActive');
        return storedIsDarkActive !== null ? JSON.parse(storedIsDarkActive) : false;
      });
    
      useEffect(() => {
        localStorage.setItem('isLightActive', JSON.stringify(isLightActive));
      }, [isLightActive]);
    
      useEffect(() => {
        localStorage.setItem('isDarkActive', JSON.stringify(isDarkActive));
      }, [isDarkActive]);

      // -------------------------------------------------------------------------------------------------
      // ------------- Sidebar Active hundle (+ in refresh) -------------------------------------------
      const [activeIndex, setActiveIndex] = useState(() => {
        const storedActiveIndex = localStorage.getItem('activeIndex');
        return storedActiveIndex !== null ? parseInt(storedActiveIndex, 10) : 0;
      });
    
      useEffect(() => {
        localStorage.setItem('activeIndex', activeIndex.toString());
      }, [activeIndex]);

      // --------------------------------------------------------------------------------------------------

      const [cls, setCls] = useState(); // hundle aside close in mobile version

    
    return(
        <body className={theme === 'lightmode' 
        ? 'light-theme-variables' 
        : 'dark-theme-variables'
        }>
        <div className='container'>
                <aside className={cls}> {/* class of aside in media Query (for mobile) whether the menu is displayed or closed */}
                    <AsideTop 
                    setCls={setCls}
                    theme={theme} 
                    />
                    <SideBar 
                    
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    />
                </aside>
                <main>
                    <Routes>
                <Route path='/' element={<Dashboard 
                setActiveIndex={setActiveIndex}  />} />
                <Route path='/Pending' element={<Pending />} />
                <Route path='/Approved' element={<Approved />} />
                <Route path='/Rejected' element={<Rejected />} />
                </Routes>
                </main>

                <div className="right">
                    <RightTopBar
                        theme={theme}
                        setTheme={setTheme}
                        isLightActive={isLightActive}
                        setIsLightActive={setIsLightActive}
                        isDarkActive={isDarkActive}
                        setIsDarkActive={setIsDarkActive}
                        setCls={setCls}    />


                        {activeIndex === 0 ? <RecentUpdates /> : '' } {/* temporary solution, to hide the recent notifcation table   */}
                        {console.log(activeIndex)}
                        
                        
                </div>
        </div>
    </body>
        
    )
}
export default AdminDashboard;