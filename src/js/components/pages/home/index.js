import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image1 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import {Icon} from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'

import SideBar from '../general/sideBar'
import HomeBlog from './blogs'
import HomeForum from './forums'
import HomeStore from './stores'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';

const initialState = {
    userStatus: null,
};

class Homepage extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={'wrapper'}>
                <GoUp/>
                <HeaderFixed/>
                <SideBar/>

                <div className={'homeHeading'} style={{backgroundImage: "url("+Image1+")"}}>
                    <div className={'homeNavbar'}>
                        <NavBrand/>
                        <NavLink/>
                    </div>
                    <div className={'centerer'}>
                        <div className={'title'}>Welcome to Gamers/Coders</div>
                        <div className={'subTitle'}>We provide and avenue for gamers and coders to come together and make the world a better place!</div>
                    </div>
                </div>

                <HomeBlog history={this.props.history}/>
                <HomeForum history={this.props.history}/>
                <HomeStore history={this.props.history}/>
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

export default connect(mapStateToProps)(Homepage);