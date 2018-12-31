import React from 'react';
import {Icon} from 'react-icons-kit'
import proptype from 'prop-types'
import {bubble2} from 'react-icons-kit/icomoon/bubble2'

class ForumQuestionCard extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history,brief, added, comments, slug} = this.props;
        return(
            <div className={'forumQuestionCard'} onClick={() => history.push('/forum/question/'+slug)}>
                <div className={'questionBrief'}> {brief}</div>
                <div className={'props'}>
                    <div className={'questionAdded'}>Added: {added}</div>
                    <span><Icon icon={bubble2}/> {comments}</span>
                </div>
            </div>
        )
    }
}

ForumQuestionCard.propTypes = {
    history: proptype.object.isRequired,
    brief: proptype.string.isRequired,
    added: proptype.string.isRequired,
    comments: proptype.number.isRequired,
    slug: proptype.string.isRequired,
};

export default ForumQuestionCard;