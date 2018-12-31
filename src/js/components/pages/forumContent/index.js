import React from 'react';
import {connect} from 'react-redux';
import Image2 from '../../../../assets/images/svo5607rt-130016-Villages-Marketplace-Click-on-thumbnail-for-more-information.jpg'

import SideBar from '../general/sideBar'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';
import ForumTopicCard from '../common/forumTopicCard';
import ForumQuestionCard from '../common/forumQuestionCard';

const initialState = {
    userStatus: null,
};

class Forumpage extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={'wrapper forumWrapper'}>
                <GoUp/>
                <HeaderFixed/>
                <SideBar/>

                <div className={'blogHeading'} style={{backgroundImage: "url("+Image2+")"}}>
                    <div className={'homeNavbar'}>
                        <NavBrand/>
                        <NavLink/>
                    </div>
                    <div className={'centerer'}>
                        <div className={'title'}>Gamers/Coders Forum</div>
                        <div className={'subTitle'}>Get the latest on gaming and code oriented activities out their, all at your grasp...</div>
                    </div>
                </div>

                <div className="forumContent">
                    <div className="contentLeft">
                        <div className={'contentHeading'}>Recently Created Topics</div>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolorum molestias odit repudiandae vel! Amet beatae esse necessitatibus rerum?'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>

                        <div >
                            <button className={'loadMoreButton'}>Load More</button>
                        </div>

                        <div className={'createTopic'}>
                            <div className={'contentHeading'}>Create New Topic</div>
                            <form onSubmit={(e) => [e.preventDefault()]}>
                                <div className="formGroup">
                                    <label>Title</label>
                                    <input type="text"/>
                                </div>
                                <div className={'formGroup'}>
                                    <label>About Topic</label>
                                    <textarea>

                                    </textarea>
                                </div>
                                <div className={'formGroup'}>
                                    <button className={'createForumTopicButton'}>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contentRight">
                        <div className={'contentHeading'}>Recent Questions</div>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>

                        <div className={'contentHeading'}>Top Questions</div>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>
                        <ForumQuestionCard
                            history={this.props.history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eaque fugit quia sed sequi.`}
                            added={'20 days ago'}
                            comments={12}
                            slug={'hello'}/>
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

export default connect(mapStateToProps)(Forumpage);