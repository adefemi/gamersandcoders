import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image1 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import {Icon} from 'react-icons-kit';
import {login} from 'react-icons-kit/iconic/login';

const initialState = {
    userStatus: null, username: "", password: ""
};

class Login extends React.Component{
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
                            Don't have an account yet? create one <Link to={'/register'}>Here!</Link>
                        </div>
                        <form className={'authForm'} onSubmit={(e) => [e.preventDefault(), alert()]}>
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
                            <div className={'inputGroup inline'}>
                                <input name={'rememberMe'} type="checkbox"/>
                                <label htmlFor="rememberMe">keep me logged in...</label>
                            </div>

                            <div className={'inputGroup'}>
                                <button className={'loginButton'} type={'submit'}>Login</button>
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

export default connect(mapStateToProps)(Login);