import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image1 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import {Icon} from 'react-icons-kit';
import {login} from 'react-icons-kit/iconic/login';

const initialState = {
    userStatus: null, username: "", password: ""
};

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = initialState
    }
    render(){
        return(
            <div className={'wrapper'}>
                <div className={'authContainer'}>
                    <div className={'authContent'}>
                        <div className={'title'}><Link to={'/'}>Gamers/Coders</Link></div>
                        <div className={'subTitle'}>
                            Have an account already? then login <Link to={'/login'}>Here!</Link>
                        </div>
                        <form className={'authForm'} onSubmit={(e) => [e.preventDefault(), alert()]}>
                            <div className="formGroup">
                                <label>email</label>
                                <input
                                    placeholder={'email'}
                                    required
                                    autoComplete={"off"}
                                    type="email" value={this.state.username}
                                    onChange={(e)=>this.setState({username: e.target.value})}/>
                            </div>
                            <div className="formGroup">
                                <label>username</label>
                                <input
                                    placeholder={'username'}
                                    required
                                    autoComplete={"off"}
                                    type="text" value={this.state.username}
                                    onChange={(e)=>this.setState({username: e.target.value})}/>
                            </div>
                            <div className="formGroup">
                                <label>password</label>
                                <input
                                    placeholder={'password'}
                                    required
                                    autoComplete={"off"}
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e)=>this.setState({password: e.target.value})}/>
                            </div>
                            <div className={'switch'}>
                                <input name={'rememberMe'} type="checkbox"/>
                                <div className={'switchStates'}> </div>
                            </div>

                            <div className={'inputGroup'}>
                                <button className={'loginButton'} type={'submit'}>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(Register);