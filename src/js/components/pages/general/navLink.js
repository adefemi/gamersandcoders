import React from 'react';
import {Link} from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'

class NavLink extends React.Component{
    static OpenSideBar(){
        let SideBar = document.getElementById('sideBar');
        if(SideBar.classList.contains("closed")){
            SideBar.classList.remove("closed");
        }
    }

    render(){
        return(
            <div className="navRight">
                <ul>
                    <li><Link to={'/'} className={'active'}>Home</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/forum'}>Forum</Link></li>
                    <li><Link to={'/store'}>Store</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
                <button className={'mobileToggler'} onClick={() => NavLink.OpenSideBar()}><Icon icon={threeVertical}/></button>
                <button className={'loginButton'}><Link to={'/login'}>Login</Link></button>
            </div>
        )
    }
}

export default NavLink;