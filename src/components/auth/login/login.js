import './login.css';
import {logIn, signUp} from "../../../store/actions/authActions";
import {useState} from "react";
import {connect} from "react-redux";

const LoginPage = (props) => {
    console.log(localStorage.getItem('access_token'))
    const [formData, setFormData] = useState({
        email: ``,
        password: ``
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const handleOk = (e) => {
        console.log(formData)
        props.logIn(formData)
        props.history.push('/')
    };

    return (
        <div className="container">
            <br/>
            <form className="loginForm">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleOk}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <br/>
        </div>
    );
}

const mapStateToProps = state => {}


const mapDispatchToProps = {
    logIn: logIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);