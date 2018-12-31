import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {cross} from 'react-icons-kit/entypo/cross'
import {home} from 'react-icons-kit/icomoon/home'
import {newspaper} from 'react-icons-kit/icomoon/newspaper'
import {book} from 'react-icons-kit/icomoon/book'
import {folderOpen} from 'react-icons-kit/icomoon/folderOpen'
import {addressBook} from 'react-icons-kit/icomoon/addressBook'
import {login} from 'react-icons-kit/iconic/login'


class Sidebar extends React.Component{
    constructor(props){
        super(props);

    }

    static closeSideBar(){
        let SideBar = document.getElementById('sideBar');
        if(!SideBar.classList.contains("closed")){
            SideBar.classList.add("closed");
        }
    }
    render(){
        return(
            <div id={'sideBar'} className={'mobileSideBar closed'}>
                <div className={'sideBarTitle'}>Menu</div>
                <ul>
                    <li><Link to={'/'}><span><Icon icon={home}/></span>Home</Link></li>
                    <li><Link to={'/'}><span><Icon icon={newspaper}/></span>Blog</Link></li>
                    <li><Link to={'/'}><span><Icon icon={book}/></span>Forum</Link></li>
                    <li><Link to={'/'}><span><Icon icon={folderOpen}/></span>Store</Link></li>
                    <li><Link to={'/'}><span><Icon icon={addressBook}/></span>Contact</Link></li>
                </ul>
                <button className={'loginButton'}>Login <Icon icon={login}/></button>
                <button className={'sideBarClose'} onClick={() => Sidebar.closeSideBar()}><Icon size={20} icon={cross}/></button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(Sidebar);