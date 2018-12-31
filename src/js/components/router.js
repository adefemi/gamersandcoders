import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import jwt from 'jwt-decode'

import Index from './pages/home/index'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import BlogHome from './pages/blogContent/index'
import BlogExplorer from './pages/blogContent/blogExplorer'
import ForumHome from './pages/forumContent/index'
import ForumTopicExplorer from './pages/forumContent/forumTopicExplorer'
import ForumQuestionExplorer from './pages/forumContent/forumQuestionExplorer'
import StoreHome from './pages/storeContent/index'

import MainLoader from './pages/general/mainloader';

import {actionWithoutData, setContent} from './redux/actions'
import {verifyauth} from "./pages/general/miscellaneous";
import {SiteData} from "./pages/data/siteMain";
import NetError from './pages/general/netError';

const initialState = {
    loading: true, errorStatus: false,
};

class Router extends React.Component{
    constructor(props) {
        super(props);

        this.state = initialState;

        setTimeout(() => {
            this.setState({loading: false})
        }, 200)
    }

    componentWillMount(){
        this.getContents();
        this.verifyUser();
    }

    verifyUser(){
        if(verifyauth()){
            let token = JSON.parse(localStorage.getItem(SiteData.name+'-user'));
            let parsedData = jwt(token.access);
            let url = this.props.backEndLinks.user + parsedData.id;
            this.props.actionWithoutData('get',url).then(
                (rem) => {
                    this.props.setContent("SET_USER_ACTIVE", rem.data);
                },
                (err) => {
                    localStorage.removeItem(SiteData.name+'-user');
                    this.props.setContent("SET_USER_ACTIVE", null);
                }
            );
        }
        else{
            localStorage.removeItem(SiteData.name+'-user');
            this.props.setContent("SET_USER_ACTIVE", null);
        }
    }

    getContents(){
        this.setState({errorStatus: false});
        this.state.errorStatus = false;
        let url = "";

        //Get Setting Images
        url = this.props.backEndLinks.pageSettingImage;
        this.props.actionWithoutData('get', url).then(
            (res) => {
                this.props.settingContent.images = res.data;
                this.props.setContent("SET_SETTING_CONTENT", this.props.settingContent);
            },
            (err) => {
                this.setState({errorStatus:true})
            }
        );
        //Get Setting Socials
        url = this.props.backEndLinks.pageSettingSocial;
        this.props.actionWithoutData('get', url).then(
            (res) => {
                this.props.settingContent.socials = res.data;
                this.props.setContent("SET_SETTING_CONTENT", this.props.settingContent);
            },
            (err) => {
                this.setState({errorStatus:true})
            }
        );
        //Get Setting Contact
        url = this.props.backEndLinks.pageSettingContact;
        this.props.actionWithoutData('get', url).then(
            (res) => {
                this.props.settingContent.contacts = res.data;
                this.props.setContent("SET_SETTING_CONTENT", this.props.settingContent);
            },
            (err) => {
                this.setState({errorStatus:true})
            }
        );
    }

    render(){
        return(
            this.state.loading ? <MainLoader/> :
        this.state.errorStatus? <NetError /> :
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Index}/>
                        <Route exact path={'/login'} component={Login}/>
                        <Route exact path={'/register'} component={Register}/>
                        <Route exact path={'/blog'} component={BlogHome}/>
                        <Route exact path={'/blog/:slug'} component={BlogExplorer}/>
                        <Route exact path={'/forum'} component={ForumHome}/>
                        <Route exact path={'/forum/topic/:slug'} component={ForumTopicExplorer}/>
                        <Route exact path={'/forum/question/:slug'} component={ForumQuestionExplorer}/>
                        <Route exact path={'/store'} component={StoreHome}/>
                    </Switch>
                </BrowserRouter>
        )
    }
}
function mapStateToProps(state) {
    return({
        userStatus: state.userStatus, settingContent: state.settingContent, backEndLinks: state.backEndLinks,
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        actionWithoutData: actionWithoutData, setContent: setContent,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);