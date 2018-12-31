import React from 'react';
import {Icon} from 'react-icons-kit'
import proptype from 'prop-types'

import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp';
import {eye} from 'react-icons-kit/fa/eye';
import {download2} from 'react-icons-kit/icomoon/download2'
import { Rate } from 'antd';

class StoreCard extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {history,title, coverImage, like, view, download, rating, slug, arrange} = this.props;
        return(
            <div className={arrange < 1 ?'storeCard blue': 'storeCard red'} onClick={() => history.push('/store/'+slug)}>
                <div className={'imageCon'}>
                    <img src={coverImage} alt=""/>
                </div>
                <div className={'title'}>{title}</div>
                <div className={'props'}>
                    <li><Icon icon={thumbsOUp}/><span>{like}</span></li>
                    <li><Icon icon={eye}/><span>{view}</span></li>
                    <li><Icon icon={download2}/><span>{download}</span></li>
                </div>
                <div>
                    <Rate disabled defaultValue={rating} />
                </div>
            </div>
        )
    }
}

StoreCard.propTypes = {
    history: proptype.object.isRequired,
    title: proptype.string.isRequired,
    coverImage: proptype.string.isRequired,
    like: proptype.number.isRequired,
    view: proptype.number.isRequired,
    download: proptype.number.isRequired,
    rating: proptype.number.isRequired,
    slug: proptype.string.isRequired,
    arrange: proptype.number.isRequired,
};

export default StoreCard;