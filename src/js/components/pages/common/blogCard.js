import React from 'react';
import {Icon} from 'react-icons-kit'
import proptype from 'prop-types'

import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp';
import {eye} from 'react-icons-kit/fa/eye';
import {bubble2} from 'react-icons-kit/icomoon/bubble2'

class BlogCard extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history,coverImage, title, content, like, view, commentCount, slug} = this.props;
        return(
            <div className={'blog-card'}>
                <div className={'image-con'}>
                    <img src={coverImage} alt=""/>
                </div>
                <div className={'context'}>
                    <div className={'details'}>
                        <div className={'title'}>{title}</div>
                        <div className={'content'}>
                            {content}
                        </div>
                        <div className={'props'}>
                            <li><Icon icon={thumbsOUp}/><span>{like}</span></li>
                            <li><Icon icon={eye}/><span>{view}</span></li>
                            <li><Icon icon={bubble2}/><span>{commentCount}</span></li>
                        </div>
                    </div>
                    <button onClick={() => history.push('/blog/'+slug)}>
                        continue Reading
                    </button>
                </div>
            </div>
        )
    }
}

BlogCard.propTypes = {
    history: proptype.object.isRequired,
    coverImage: proptype.string.isRequired,
    title: proptype.string.isRequired,
    content: proptype.string.isRequired,
    like: proptype.number.isRequired,
    view: proptype.number.isRequired,
    commentCount: proptype.number.isRequired,
    slug: proptype.string.isRequired,
};

export default BlogCard;