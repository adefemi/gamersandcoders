import React from 'react';
import {connect} from 'react-redux';
import Image1 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import Image2 from '../../../../assets/images/yosemite-park-2933024_960_720.jpg'
import Image3 from '../../../../assets/images/svo5607rt-130016-Villages-Marketplace-Click-on-thumbnail-for-more-information.jpg'
import Image4 from '../../../../assets/images/volkswagen-polo-sport-edition_625x300_1528544720118.jpg'
import proptype from 'prop-types'

import StoreCard from '../common/storeCard'


const initialState = {
    userStatus: null,
};

class HomeStore extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history} = this.props;
        return(
            <div className={'homeStore'}>
                <div className={'storeContent'}>
                    <StoreCard history={history} title={"Hunger Game"} coverImage={Image1}
                               like={100} view={500} download={30} rating={4} slug={"hello"} arrange={1}/>
                    <StoreCard history={history} title={"The Revenger"} coverImage={Image2}
                               like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                    <StoreCard history={history} title={"The Iron Fist"} coverImage={Image3}
                               like={100} view={500} download={30} rating={3} slug={"hello"} arrange={1}/>
                    <StoreCard history={history} title={"Make Me Run"} coverImage={Image4}
                               like={100} view={500} download={30} rating={5} slug={"hello"} arrange={0}/>
                </div>
            </div>
        )
    }
}

HomeStore.propTypes = {
    history : proptype.object.isRequired
};

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(HomeStore);