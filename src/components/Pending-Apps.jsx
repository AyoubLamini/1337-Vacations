import React, { useState} from 'react';



export const Pending = () => {
    const [cls, setCls] = useState(false); 
    const [decision, setDecision] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupAction, setPopupAction] = useState('');
    const [approveState, setApproveState] = useState(false) //  to set the state of Approve button state is disabled or not false = not disabled , true = disabled
    const [rejectState, setRejectState] = useState(false) //   to set the state of Reject button state is disabled or not false = not disabled , true = disabled

    const handlePopupConfirm = () => {
        setDecision(popupAction);
        setShowPopup(false);
        setCls(false);
        console.log(decision)
        console.log(popupAction);
    }

    const handlePopupCancel = () => {
        setShowPopup(false);
        setApproveState(false);  // setting the buttons state enabled after canceling
        setRejectState(false);

    }

    const handleApproveClick = () => {
        setPopupAction('approve');
        setPopupMessage('Are you sure you want to approve?');
        setShowPopup(true);

        setApproveState(true); // setting the buttons state disabled
        setRejectState(true);
        

    }

    const handleRejectClick = () => {
        setPopupAction('reject');
        setPopupMessage('Are you sure you want to reject?');
        setShowPopup(true);

        setApproveState(true);  // setting the buttons state disabled
        setRejectState(true);
    }

    return(
        <>
        <main>
                    <h1>Pending Applications</h1>
                    <div className="recent-applications">
                    <div className="applications">
            <div className={`popup ${showPopup ? 'active' : ''}`}>
                <div className="popup-content">
                    <p>{popupMessage}</p>
                    <div className="popup-buttons">
                        <button className='confirm' onClick={handlePopupConfirm}>Confirm</button>
                        <button className='cancel' onClick={handlePopupCancel}>Cancel</button>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr >
                        <th>Student</th>
                        <th>App Number</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className='table-rows' onClick={() => !decision && approveState === false && rejectState === false ? setCls(!cls) : ''} >
                        <td>Ayoub Lamini</td>
                        <td>1</td>
                        <td>14/03/2023</td>
                        <td>5 days</td>
                        <td className='warning'>Pending</td>
                    </tr>
                    <tr className={cls === true ? 'decision clicked' : 'decision closed'}>
                        <td colSpan={2}>
                            <button className='approve' disabled={approveState}  onClick={handleApproveClick}>Approve</button>
                        </td>
                        <td colSpan={3}>
                            <button className='decline' disabled={rejectState} onClick={handleRejectClick}>Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
                    </div>
                </main>
                
                

                </>
        
    );
}