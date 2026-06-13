import img1 from '../images/1.jpg'
import img2 from '../images/2.png'
import img3 from '../images/3.png'


export const RecentUpdates = () => {
    return(
        <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
            <div className="update">
                <div className="profile-photo">
                    <img src={img2} alt="img not found" />
                </div>
                <div className="message">
                    <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                    <small className='text-muted'>2 minutes Ago</small>
                </div>
            </div>
            <div className="update">
                <div className="profile-photo">
                    <img src={img3} alt="img not found" />
                </div>
                <div className="message">
                    <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                    <small className='text-muted'>2 minutes Ago</small>
                </div>
            </div>
            <div className="update">
                <div className="profile-photo">
                    <img src={img1} alt="img not found" />
                </div>
                <div className="message">
                    <p><b>Ayoub Lamini</b> Applied for a vacancy in 2022/12/26</p>
                    <small className='text-muted'>2 minutes Ago</small>
                </div>
            </div>
        </div>
    </div>
    )
}