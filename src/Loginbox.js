import React from 'react';
class Loginbox  extends React.Component{
    render ( ){
        return (
        <section>
        
    <div className="wrapper">
      <div className="title">sign in</div>
      <form action="#">
        <div className="field">
          <input type="text" required/>
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a> </div>
        </div>
        <div className="field">
          <input type="submit" value="Login"/>
        </div>
        <div className="signup-link">Not a member? <a href="pages/signup.html">Signup now</a></div>
      </form>
    </div>
        </section>
        );
        }
}
export default Loginbox;