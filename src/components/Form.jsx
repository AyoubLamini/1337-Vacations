import { useState } from "react";
import '../styles/Form.css'
import 'bootstrap/dist/css/bootstrap.css'
export const Form = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [fromError, setFromError] = useState()
    const [toError, setToError] = useState()

   // input styles when error 
    var success = {};
    var failed = {
        outline : '1px solid #DE3163'
    };

    // Create two date objects
    let dateFrom = new Date(from);
    let dateTo = new Date(to);
    // Create duration which is date 1 - date 2
    let duration = (dateTo - dateFrom) / (1000 * 60 * 60 * 24) || 0;
    // Creating current date variable
    let currentDate = new Date();
    
// ---------------------------------------------------------------------------
    // Pop up Setting 
    const [decision, setDecision] = useState('')
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupAction, setPopupAction] = useState('');
    const [buttonState, setButtonState] = useState(false) //  to set the state of Button button state is disabled or not false = not disabled , true = disabled
    const [showalert, setShowAlert] = useState(false) 
    
    const handlePopupConfirm = () => {
        setDecision(popupAction);
        setShowPopup(false);
        setShowAlert(true)
        
        console.log(decision)
        console.log(popupAction);
    }

    const handlePopupCancel = () => {
        setShowPopup(false);
        setButtonState(false);  // setting the buttons state enabled after canceling

    }
    // ---------------------------------------------------------------------------    
    // the function that handles the submitting
    function handleSubmit(e) {
        e.preventDefault();

        // from validation
        if (from.trim().length === 0) {
            setFromError('this field is required')
        }if ((((dateFrom - currentDate) / (1000 * 60 * 60 * 24)) + 0.8) < 2 ) {
            setFromError("This date should be at least 2 days after today") 
        }
        // to validation
        if (to.trim().length === 0) {
            setToError('this field is required') 
        }if ((dateTo - dateFrom) / (1000 * 60 * 60 * 24) < 5 ) {
            setToError("this date should be at least 5 days after the 'From' date ") 
        }
     
        
        if(fromError === '' && toError === '') {  
        setPopupAction('Submit');
        setPopupMessage(`Are you sure you want to apply for ${duration} days vacancy`);
        setShowPopup(true);
        setButtonState(true); // setting the buttons state disabled
        } 
        
      }
    return(
        <>
        <div className="container">
            <div className={`popup ${showPopup ? 'active' : ''}`}>
                <div className="popup-content">
                    <p>{popupMessage}</p>
                    <div className="popup-buttons">
                    <button className='confirm' onClick={handlePopupConfirm}>Confirm</button>
                       <button className='cancel' onClick={handlePopupCancel}>Cancel</button>
                    </div>
                </div>
            </div>
            <div className={`alert alert-success ${showalert ? 'visible' : ''}`} >Your application has been successfully sent</div>
                  <h1>Hello  Mr Ayoub Lamini</h1>
                  <p> Please choose your vacation dates carefully</p>
                 <form onSubmit={handleSubmit}>
                 <div className="">
                 </div>
                <div className='application-form' >
                <label htmlFor='from-date'>From :</label> 
                <input disabled={buttonState} style={fromError ? failed : success}  className="form-control"  onChange={(e) => setFrom(e.target.value) + setFromError('')} value={from} type='date' id='from-date' name='from-date' />
                <div>
                    {fromError == '' ? '' : <div className='error-message'>{fromError}</div>}
                </div>
                <label htmlFor='to-date'>To :</label>
                <input disabled={buttonState} style={toError ? failed : success}  className="form-control" onChange={(e) => setTo(e.target.value) + setToError('')} value={to}  type='date' id='to-date' name='to-date' />
                <div>
                    { toError == '' ? '' : <div className='error-message'>{toError} </div>}
                </div>
                <label htmlFor='to-date'>Duration (in days)</label>
                <input className="form-control" value={duration > 0 ? duration : '' } disabled='true'  type='text' id='to-date' name='to-date' />
                <button type="submit" disabled={buttonState}  className='btn btn-outline-success form-control'>Submit</button>
                </div>
                
            
             </form>
        </div>
      
     </>
    )
}