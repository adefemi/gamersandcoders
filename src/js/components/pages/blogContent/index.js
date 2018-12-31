import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image2 from '../../../../assets/images/yosemite-park-2933024_960_720.jpg'
import {Icon} from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'

import SideBar from '../general/sideBar'
import BlogList from './blogList'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';

const initialState = {
    userStatus: null,
};

class Blogpage extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={'wrapper'}>
                <GoUp/>
                <HeaderFixed/>
                <SideBar/>

                <div className={'blogHeading'} style={{backgroundImage: "url("+Image2+")"}}>
                    <div className={'homeNavbar'}>
                        <NavBrand/>
                        <NavLink/>
                    </div>
                    <div className={'centerer'}>
                        <div className={'title'}>Gamers/Coders Blog</div>
                        <div className={'subTitle'}>Get the latest on gaming and code oriented activities out their, all at your grasp...</div>
                    </div>
                </div>

                <BlogList history={this.props.history}/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(Blogpage);