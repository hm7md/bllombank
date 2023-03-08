import './Signup.css';
import React from 'react';
class Signup extends React.Component{


render () {
    return (
        
  <div className="container"> 
    <h1 className="main-header">Account Application Form</h1>
    <hr/>
    <form id="app-form" action="">
    <fieldset className="sub-container" id="basic-details">
      <h2 className="sub-heading">Basic Details</h2>
      <hr/>
        <label htmlFor="dropdown" className="standard-label">
          Title<span className="required">*</span>
          <br/>
          <select  id="dropdown" className="standard-select" required>
            <option value="select" disabled >Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </label>
        <label htmlFor="firstname" className="standard-label">
          First Name<span className="required">*</span>
          <input className="standard-input" name="firstname" id="firstname" type="text" placeholder="First name..." required/>
        </label>
        <label htmlFor="middlenames" className="standard-label">
          Middle Names (If Applicable)
          <input className="standard-input" name="middlename" id="middlename" type="text" placeholder="Middle names..."/>
        </label>
        <label htmlFor="lastname" className="standard-label">
          Last Name<span className="required">*</span>
          <input className="standard-input" name="lastname" id="lastname" type="text" placeholder="Last name..." required/>
        </label>
        <label htmlFor="phone-number" className="standard-label">
          Phone Number<span className="required">*</span>
          <input className="standard-input" type="tel" id="phone" name="phone" pattern='^\+?\d{10,12}' placeholder="Example: 01925999111" required/>
        </label>
        <label htmlFor="email-address" className="standard-label">
          Email<span className="required">*</span>
          <input className="standard-input" id="email-address" type="email" placeholder="Your email address..." required/>
        </label>
        <label htmlFor="Password" className="standard-label">
            password<span className="required">*</span>
            <input className="standard-input" id="password" type="password" placeholder="type your password" required/>
            <div id="message">
              <h3>password must contain the following</h3>
              <p id="letter" className="invalid">A <b> lowercase </b> letter </p>
              <p id="capital" className="invalid">A <b> capital (uppercase) </b> letter </p>
              <p id="number" className="invalid">A <b> number </b> </p>
              <p id="length" className="invalid"> minimum <b> 8 character </b> </p>
            </div>
        </label>
        <label htmlFor="DOB" className="standard-label">
          Date of Birth<span className="required">*</span>
          <input className="standard-input" type="date" name="DOB" id="DOB" required/>
        </label>
        <label htmlFor="accounttype" className="standard-label">
          What type of account are you applying for?<span className="required">*</span>
          <br/>
          <select  id="account-select" className="standard-select" required>
            <option value="select" disabled>Choose Account</option>
            <option value="basic-current">Basic Current Account</option>
            <option value="premium-current">Premium Current Account</option>
            <option value="instant-saver">Instant Access Savings Account</option>
            <option value="lifetime-isa">Lifetime ISA</option>
            <option value="help-to-buy">Help to Buy ISA</option>
          </select>
        </label>
        <button type="button" id="show-address"> Continue </button>
      </fieldset>
      
      <fieldset className="sub-container" id="address-history">
        <h2 className="sub-heading">Address History</h2>
        <hr/>
        <h3 className="small-heading">Are you currently a UAE resident?</h3>
        <label htmlFor="yes" className="radio-label">
          <input className="radio-input" name="UK-res" value="yes" id="yes" type="radio"/>Yes
        </label>
        <label htmlFor="no" className="radio-label">
          <input className="radio-input" name="UK-res" value="no" id="no" type="radio"/>No
        </label>
        <p id="non-uk">We're really sorry. We currently only offer banking services to Uae residents.</p>
        <div id="current-address">
          <h3 className="small-heading">Current Address</h3>
          <label htmlFor="line1" className="standard-label">
            Address line 1<span className="required">*</span>
            <input className="standard-input" type="text" required/>
          </label>
          <label htmlFor="line2" className="standard-label">
            Address line 2
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="town-city" className="standard-label">
            Town/City<span className="required">*</span>
            <input className="standard-input" type="text" required/>
          </label>
          <label htmlFor="county" className="standard-label">
            County
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="postcode" className="standard-label">
            Post Code<span className="required">*</span>
            <input className="standard-input" type="text" maxLength="8" required/>
          </label>
          <h3 className="small-heading">Have you lived at any other address within the last 5 years?</h3>
          <label htmlFor="yes-prev" className="radio-label">
            <input className="radio-input" name="UAE-res" value="yes" id="yes-prev" type="radio"/>Yes
          </label>
          <label htmlFor="no-prev" className="radio-label">
            <input className="radio-input" name="Uae-res" value="no" id="no-prev" type="radio"/>No
          </label>
        </div>
        <div id="previous-address">
          <h3 className="small-heading">Previous Address</h3>
          <label htmlFor="line1" className="standard-label">
            Address line 1<span className="required">*</span>
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="line2" className="standard-label">
            Address line 2
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="town-city" className="standard-label">
            Town/City<span className="required">*</span>
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="county" className="standard-label">
            County
            <input className="standard-input" type="text"/>
          </label>
          <label htmlFor="postcode" className="standard-label">
            Post Code<span className="required">*</span>
            <input className="standard-input" type="text" maxLength="8"/>
          </label>
        </div>
        <button type="button" id="get-consent">Continue</button>
      </fieldset>

      <fieldset className="sub-container" id="your-consent">
        <h2 className="sub-heading">Your Consent</h2>
        <hr/>
        <label className="standard-label" id="credit-search" htmlFor="credit-search">
          Tick the box below to allow the bank to use the details you have provided to conduct a credit search if necessary.
          <br/>
        <input type="checkbox" id="credit-click" name="credit-search"/> <br/>
        </label>
        <label className="standard-label" htmlFor="info-request" id="info-request">
          Tick the box below to allow the bank to contact you via email if further information is needed to progress your application.
          <br/>
          <input type="checkbox" id="info-click" name="info-request"/><br/>
        </label>
        <input id="submit-app" type="submit" name="submit" value="Submit Application"/> 
      </fieldset>
    </form>
    <button type="submit" className="btn btn-success">Submit</button>
    
  </div>

     );
}
}
export default Signup;