import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image2 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import {Icon} from 'react-icons-kit'
import {bubbles4} from 'react-icons-kit/icomoon/bubbles4'
import {eye} from 'react-icons-kit/fa/eye';

import SideBar from '../general/sideBar'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';
import ForumQuestionCard from '../common/forumQuestionCard';
import ForumTopicCard from '../common/forumTopicCard';

const initialState = {
    userStatus: null,
};


class forumTopicExplorer extends React.Component{
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
                    <div className={'sider'}>
                        <div className={'title'}>Forum Topic Title</div>
                        <div className={'about'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur exercitationem facere inventore laudantium, nam non optio perspiciatis porro quibusdam totam.</div>
                        <div className={'blogMainProps'}>
                            <li>Added: <span>2 days ago</span></li>
                            <li><Icon icon={eye}/> <span>20</span></li>
                            <li><Icon icon={bubbles4}/> <span>10</span></li>
                        </div>
                    </div>
                </div>
                <div className={'forumContent'}>
                    <div className={'contentLeft'}>
                        <div className={'contentHeading'}>Latest Questions</div>
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
                        <div >
                            <button className={'loadMoreButton'}>Load More</button>
                        </div>
                        <div className={'createTopic'}>
                            <div className={'contentHeading'}>Ask Your Question</div>
                            <form onSubmit={(e) => [e.preventDefault()]}>
                                <div className="formGroup">
                                    <label>Title</label>
                                    <input type="text"/>
                                </div>
                                <div className="formGroup">
                                    <label>Select Topic</label>
                                    <input type="text"/>
                                </div>
                                <div className={'formGroup'}>
                                    <label>Question Content</label>
                                    <textarea>

                                    </textarea>
                                </div>
                                <div className={'formGroup'}>
                                    <button className={'createForumTopicButton'}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={'contentRight'}>
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
                        <div className={'contentHeading'}>Popular Topics</div>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            added={'2 days ago'}
                            questions={20}
                            slug={'hello'}/>
                        <ForumTopicCard
                            history={this.props.history}
                            title={'Java Programming'}
                            added={'2 days ago'}
                            questions={20}
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

export default connect(mapStateToProps)(forumTopicExplorer);