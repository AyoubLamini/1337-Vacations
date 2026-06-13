import img1 from '../images/1.jpg'

export const RightTopBar = ({setTheme, isLightActive, setIsLightActive, isDarkActive, setIsDarkActive, setCls }) => {
  const myIcon = 'material-icons-sharp';

  return (
    <div className="top">
      <button onClick={() => setCls('clicked')} id='menu-btn'>
        <span className={myIcon}>menu</span>
      </button>
      <div className="theme-toggler">
        <span className={isLightActive ? myIcon + ' active' : myIcon } onClick={() => {setTheme('lightmode'); setIsLightActive(true); setIsDarkActive(false);}}>light_mode</span>
        <span className={isDarkActive ? myIcon + ' active' : myIcon } onClick={() => {setTheme('darkmode'); setIsDarkActive(true); setIsLightActive(false);}}>dark_mode</span>
      </div>
      <div className="profile">
        <div className="info">
          <p>Hey, <b>Hatim</b></p>
          <small className='text-muted'>Admin</small>
        </div>
        <div className="profile-photo">
          <img className='logo' src={img1} alt="img not found" />
        </div>
      </div>
    </div>
  );
}


