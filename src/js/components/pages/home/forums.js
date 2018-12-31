import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'react-icons-kit'
import proptype from 'prop-types'

import ForumTopicCard from '../common/forumTopicCard'
import ForumQuestionCard from '../common/forumQuestionCard'


const initialState = {
    userStatus: null,
};

class HomeForum extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history} = this.props;
        return(
            <div className={'homeForum'}>
                <div className={'formContents'}>
                    <div className={'forumTopics'}>
                        <div className={'forumTitle'}>Forum Topics</div>
                        <ForumTopicCard history={history} title={'Topic Title'} added={'12-02-2018'} questions={20} slug={'hello'}/>
                        <ForumTopicCard history={history} title={'Topic Title'} added={'12-02-2018'} questions={20} slug={'hello'}/>
                        <ForumTopicCard history={history} title={'Topic Title'} added={'12-02-2018'} questions={20} slug={'hello'}/>
                        <ForumTopicCard history={history} title={'Topic Title'} added={'12-02-2018'} questions={20} slug={'hello'}/>
                    </div>
                    <div className={'forumQuestions'}>
                        <div className={'forumTitle'}>Latest Forum Questions</div>
                        <ForumQuestionCard
                            history={history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas quo sunt. Aliquam aliquid asperiores at corporis culpa ea earum exercitationem facilis impedit ipsum iste labore minima mollitia non pariatur provident quae quia ut, veritatis vero? Nisi nulla ut veritatis.`}
                            added={'12-02-2018'} comments={50} slug={'hello'}/>
                        <ForumQuestionCard
                            history={history}
                            brief={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quas quo sunt. Aliquam aliquid asperiores at corporis culpa ea earum exercitationem facilis impedit ipsum iste labore minima mollitia non pariatur provident quae quia ut, veritatis vero? Nisi nulla ut veritatis.`}
                            added={'12-02-2018'} comments={50} slug={'hello'}/>
                    </div>
                </div>
            </div>
        )
    }
}

HomeForum.propTypes = {
    history : proptype.object.isRequired
};

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(HomeForum);