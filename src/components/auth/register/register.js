import './register.css';
import {useState} from "react";
import {signUp} from "../../../store/actions/authActions";
import {connect} from "react-redux";

const RegisterPage = (props) => {
    const [formData, setFormData] = useState({
        email: ``,
        password: ``,
        name: ``
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const handleSave = () => {
        console.log(formData)
        props.signUp(formData)
    };

    return (
        <div className="container">
            <br/>
            <form className='registerForm'>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name='name' placeholder="Enter name" value={formData.name} onChange={handleChange} />
                </div>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name='email' placeholder="Enter email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' placeholder="Enter password" value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSave}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            <br/>
        </div>
    );
}

const mapStateToProps = state => {}


const mapDispatchToProps = {

    signUp: signUp,


}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);