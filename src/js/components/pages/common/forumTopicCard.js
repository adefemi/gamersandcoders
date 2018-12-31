import React from 'react';
import {Icon} from 'react-icons-kit'
import proptype from 'prop-types'
import {bubbles4} from 'react-icons-kit/icomoon/bubbles4'

class ForumTopicCard extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history,title, added, questions, slug, about} = this.props;
        return(
            <div className={'forumTopicCard'} onClick={() => history.push('/forum/topic/'+slug)}>
                <div className={'topicIcon'}>
                    JP
                </div>
                <div className={'topicDetail'}>
                    <div className={'topicName'}>{title}</div>
                    <div className="topicAbout">{about}</div>
                    <div className={'props'}>
                        <div className={'topicAdded'}>Added: {added}</div>
                        <span><Icon icon={bubbles4}/> {questions}</span>
                    </div>
                </div>
            </div>
        )
    }
}

ForumTopicCard.propTypes = {
    history: proptype.object.isRequired,
    title: proptype.string.isRequired,
    added: proptype.string.isRequired,
    questions: proptype.number.isRequired,
    slug: proptype.string.isRequired,
    about: proptype.string,
};

export default ForumTopicCard;