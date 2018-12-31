import React from 'react';
import {connect} from 'react-redux';


class Footer extends React.Component{


    render(){
        return(
            <div className={'footer'}>
                <div>
                    Gamer/Coders &copy; 2018, All Rights Reserved. Developed By
                    <a href="http://www.adefemiconsult.com" target={'_blank'}>Adefemiconsult</a>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        userStatus: state.userStatus, backEndLinks: state.backEndLinks, settingContent : state.settingContent
    })
}
export default connect(mapStateToProps)(Footer);
