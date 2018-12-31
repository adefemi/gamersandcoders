import React from 'react';
import {connect} from 'react-redux';
import Image2 from '../../../../assets/images/yosemite-park-2933024_960_720.jpg'
import {Icon} from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'

import SideBar from '../general/sideBar'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';
import StoreCard from '../common/storeCard';
import Image1 from "../../../../assets/images/splinter_cell_blacklist.jpg";
import Image3
    from "../../../../assets/images/svo5607rt-130016-Villages-Marketplace-Click-on-thumbnail-for-more-information.jpg";
import Image4 from "../../../../assets/images/volkswagen-polo-sport-edition_625x300_1528544720118.jpg";

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
                        <div className={'title'}>Gamers/Coders Store</div>
                        <div className={'subTitle'}>Get the latest on gaming and code oriented activities out their, all at your grasp...</div>
                    </div>
                </div>

                <div className={'storeContainer'}>
                    <div className={'storeContentList'}>
                        <StoreCard history={history} title={"Hunger Game"} coverImage={Image1}
                                   like={100} view={500} download={30} rating={4} slug={"hello"} arrange={1}/>
                        <StoreCard history={history} title={"The Revenger"} coverImage={Image2}
                                   like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                        <StoreCard history={history} title={"The Iron Fist"} coverImage={Image3}
                                   like={100} view={500} download={30} rating={3} slug={"hello"} arrange={1}/>
                        <StoreCard history={history} title={"Make Me Run"} coverImage={Image4}
                                   like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                        <StoreCard history={history} title={"Hunger Game"} coverImage={Image1}
                                   like={100} view={500} download={30} rating={4} slug={"hello"} arrange={1}/>
                        <StoreCard history={history} title={"The Revenger"} coverImage={Image2}
                                   like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                        <StoreCard history={history} title={"The Iron Fist"} coverImage={Image3}
                                   like={100} view={500} download={30} rating={3} slug={"hello"} arrange={1}/>
                        <StoreCard history={history} title={"Make Me Run"} coverImage={Image4}
                                   like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                    </div>

                    <div className={'storeContentDisplay'}>
                        <button className={'loadMoreButton'}>Load More</button>
                    </div>
                </div>
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