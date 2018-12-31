import React from 'react';
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

import ActiveUserNav from './activeUserNAV'

class NavbarMain extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentPath: '/', linkList: []
        }
    }

    componentWillMount(){
        let a = window.location.pathname.split('/');
        this.setState({currentPath:window.location.pathname, linkList:a});
        $('div').scrollTop(0);
    }

    headerController(){
       $(document).ready(function () {
           let defaultHeight = $(window).height();
           let NavBarMain = $('.navbar2');
           let ScrollTopController = $('.ScrollTop');
           $('html, body, div').scroll(function () {
               let scrollFromTop = $(this).scrollTop();
               if(scrollFromTop >= defaultHeight){
                   NavBarMain.hasClass('slideUp') ? NavBarMain.removeClass('slideUp'):null;
               }
               else{
                   NavBarMain.hasClass('slideUp') ? null : NavBarMain.addClass('slideUp');
               }
           })
       })
    }

    render(){
        this.headerController();
        return(
            <div className={'navbar2 slideUp'}>
                <div className={'navbar-logo'}><i className={'fa fa-gamepad'}> </i></div>
                <nav>
                    <ul>
                        <li><Link to={'/'} className={this.state.currentPath === '/' ? 'active' : null}>Home</Link></li>
                        <li><Link to={'/blog'} className={this.state.linkList.includes('blog') ? 'active' : null}>Blog</Link></li>
                        <li><Link to={'/forum'} className={this.state.linkList.includes('forum') ? 'active' : null}>Forum</Link></li>
                        <li><Link to={'/store'} className={this.state.linkList.includes('store') ? 'active' : null}>Store</Link></li>
                        <li><Link to={'/contact'} className={this.state.currentPath === '/contact' ? 'active' : null}>Contact</Link></li>
                    </ul>
                </nav>
                {this.props.MainProps.get_ActiveUser === null || !this.props.MainProps.get_ActiveUser ?
                    <nav className={'nav-auth'}>
                        <Link to={'/login'}>Sign in <Icon type={'login'}/></Link>&nbsp; <span style={{color:'white'}}>/</span> &nbsp;<Link to={'/register'}>Sign up <Icon type={'user-add'}/></Link>
                    </nav>
                    :<ActiveUserNav Mainprops={this.props.MainProps}/>
                }

                <div className={'slider-toggler'} onClick={() => this.sliderToggler()}>
                    <i className={'fa fa-bars'}> </i>
                </div>
            </div>
        )
    }
}

export default NavbarMain;