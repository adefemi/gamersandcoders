import React from 'react';
import {connect} from 'react-redux';
import Image1 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import Image2 from '../../../../assets/images/yosemite-park-2933024_960_720.jpg'
import Image3 from '../../../../assets/images/svo5607rt-130016-Villages-Marketplace-Click-on-thumbnail-for-more-information.jpg'
import Image4 from '../../../../assets/images/volkswagen-polo-sport-edition_625x300_1528544720118.jpg'
import proptype from 'prop-types'

import BlogCard from '../common/blogCard';

const initialState = {
    userStatus: null,
};

class BlogList extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={'homeBlog'}>
                <div className={'contentList'}>

                    <div className={'blogMain'}>
                        <div className={'homeBlogTitle'}>Latest Blogs...</div>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image1}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi magnam magni sit sunt vel! Adipisci, alias aspernatur commodi consectetur cupiditate dolores error excepturi fugiat harum iste neque optio perspiciatis, quod quos rem. Eius eligendi eum impedit quisquam, sapiente tempore. Accusantium alias at atque blanditiis culpa laborum, numquam, perspiciatis porro, possimus quibusdam quo repudiandae sit. Aliquam animi aut commodi consequuntur, cumque delectus dicta dolore ducimus ea earum eius enim error est et fugiat illum ipsum, necessitatibus neque quod ratione repudiandae rerum unde? Ad deserunt dolore esse illum, laudantium omnis tempora ut. Dolor eos facilis, inventore ipsum laborum possimus temporibus.`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image1}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi magnam magni sit sunt vel! Adipisci, alias aspernatur commodi consectetur cupiditate dolores error excepturi fugiat harum iste neque optio perspiciatis, quod quos rem. Eius eligendi eum impedit quisquam, sapiente tempore. Accusantium alias at atque blanditiis culpa laborum, numquam, perspiciatis porro, possimus quibusdam quo repudiandae sit. Aliquam animi aut commodi consequuntur, cumque delectus dicta dolore ducimus ea earum eius enim error est et fugiat illum ipsum, necessitatibus neque quod ratione repudiandae rerum unde? Ad deserunt dolore esse illum, laudantium omnis tempora ut. Dolor eos facilis, inventore ipsum laborum possimus temporibus.`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image1}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi magnam magni sit sunt vel! Adipisci, alias aspernatur commodi consectetur cupiditate dolores error excepturi fugiat harum iste neque optio perspiciatis, quod quos rem. Eius eligendi eum impedit quisquam, sapiente tempore. Accusantium alias at atque blanditiis culpa laborum, numquam, perspiciatis porro, possimus quibusdam quo repudiandae sit. Aliquam animi aut commodi consequuntur, cumque delectus dicta dolore ducimus ea earum eius enim error est et fugiat illum ipsum, necessitatibus neque quod ratione repudiandae rerum unde? Ad deserunt dolore esse illum, laudantium omnis tempora ut. Dolor eos facilis, inventore ipsum laborum possimus temporibus.`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image1}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi magnam magni sit sunt vel! Adipisci, alias aspernatur commodi consectetur cupiditate dolores error excepturi fugiat harum iste neque optio perspiciatis, quod quos rem. Eius eligendi eum impedit quisquam, sapiente tempore. Accusantium alias at atque blanditiis culpa laborum, numquam, perspiciatis porro, possimus quibusdam quo repudiandae sit. Aliquam animi aut commodi consequuntur, cumque delectus dicta dolore ducimus ea earum eius enim error est et fugiat illum ipsum, necessitatibus neque quod ratione repudiandae rerum unde? Ad deserunt dolore esse illum, laudantium omnis tempora ut. Dolor eos facilis, inventore ipsum laborum possimus temporibus.`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                        <div >
                            <button className={'loadMoreButton'}>Load More</button>
                        </div>
                    </div>
                    <div className={'blogSide'}>
                        <div className={'homeBlogTitle'}>Top Blogs...</div>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image2}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aperiam at atque blanditiis consectetur cumque dicta iste iure laborum magni, natus nulla quisquam, sint totam ut vero voluptas voluptatum?`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image3}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nostrum provident voluptates. Aut delectus deleniti fugit, hic necessitatibus omnis quisquam sit tempora unde veniam voluptate.`}
                            like={200}
                            view={1000}
                            commentCount={100}
                            slug={`goooo`}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image4}
                            title={`Lorem ipsum dolor sit amet.`}
                            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aut blanditiis consequatur incidunt ipsa laudantium minus, molestias neque nobis quidem reiciendis suscipit vel! Consectetur dolorum eos officia optio unde!`}
                            like={20}
                            view={200}
                            commentCount={5}
                            slug={`goooo`}/>
                    </div>
                </div>
            </div>
        )
    }
}

BlogList.propTypes = {
    history: proptype.object.isRequired
};

function mapStateToProps(state) {
    return({
        userStatus : state.userStatus,
    })
}

export default connect(mapStateToProps)(BlogList);