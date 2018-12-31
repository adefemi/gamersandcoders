import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Image2 from '../../../../assets/images/splinter_cell_blacklist.jpg'
import {Icon} from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'
import {bubble2} from 'react-icons-kit/icomoon/bubble2'
import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp';
import {thumbsODown} from 'react-icons-kit/fa/thumbsODown';
import {eye} from 'react-icons-kit/fa/eye';

import SideBar from '../general/sideBar'
import Footer from '../general/footer'
import HeaderFixed from '../general/headerFixed'
import NavBrand from '../general/navBrand'
import NavLink from '../general/navLink'
import GoUp from '../general/go_up';
import BlogCard from '../common/blogCard';

const initialState = {
    userStatus: null,
};

export const testContent = `<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deserunt eaque fugiat, inventore ipsam laboriosam, nam necessitatibus numquam, odio omnis perferendis qui saepe temporibus unde voluptatem voluptatum. Iure, molestiae?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deserunt eaque fugiat, inventore ipsam laboriosam, nam necessitatibus numquam, odio omnis perferendis qui saepe temporibus unde voluptatem voluptatum. Iure, molestiae?</p>
<h3>Lorem ipsum dolor sit amet, consectetut</h3>
<ol>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum!</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum!</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, nostrum!</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
</ol>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis ea eius eum eveniet in inventore ipsa, maxime nostrum officiis porro quos sunt tempora totam veniam. Aliquid dicta doloremque et ipsa ipsum, iure repudiandae vitae? Ab aliquam debitis error excepturi illum itaque maxime officia officiis perferendis provident quidem ullam, veritatis!</p>
`

class BlogExplorer extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={'wrapper blogExplorer'}>
                <GoUp/>
                <HeaderFixed/>
                <SideBar/>

                <div className={'blogHeading'} style={{backgroundImage: "url("+Image2+")"}}>
                    <div className={'homeNavbar'}>
                        <NavBrand/>
                        <NavLink/>
                    </div>
                    <div className={'sider'}>
                        <div className={'title'}>Blog Title</div>
                        <div className={'blogMainProps'}>
                            <li>Added: <span>2 days ago</span></li>
                            <li><Icon icon={eye}/> <span>20</span></li>
                            <li><Icon icon={thumbsOUp}/> <span>200</span></li>
                            <li><Icon icon={thumbsODown}/> <span>20</span></li>
                            <li><Icon icon={bubble2}/> <span>10</span></li>
                        </div>
                    </div>
                </div>
                <div className={'blogExplorerContent'}>
                    <div className={'contentRight'}>
                        <div className={'imageControl'}>
                            <img src={Image2} alt=""/>
                        </div>
                        <div className={'activeBlogContext'} dangerouslySetInnerHTML={{__html: testContent}} />
                        <div className={'commentContainer'}>
                            <div className={'commentHeading'}>14 Comments</div>
                            <div className={'commentCard'}>
                                <div className={'avatar'}>
                                    <div className={'avatarLogo'}>
                                        CJ
                                    </div>
                                </div>
                                <div className={'commentContent'}>
                                    <div className={'commentContext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolor dolores enim eos iure molestias rem sint tempora veritatis.</div>
                                    <div className={'commentProps'}>
                                        <li>Posted By: <span>Username</span></li>
                                        <li>Added: <span>2 days ago</span></li>
                                        <li><Icon icon={bubble2}/> <span>10</span></li>
                                    </div>

                                </div>
                            </div>
                            <div className={'commentCard'}>
                                <div className={'avatar'}>
                                    <div className={'avatarLogo'}>
                                        CJ
                                    </div>
                                </div>
                                <div className={'commentContent'}>
                                    <div className={'commentContext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolor dolores enim eos iure molestias rem sint tempora veritatis.</div>
                                    <div className={'commentProps'}>
                                        <li>Posted By: <span>Username</span></li>
                                        <li>Added: <span>2 days ago</span></li>
                                        <li><Icon icon={bubble2}/> <span>10</span></li>
                                    </div>

                                </div>
                            </div>
                            <div className={'commentCard'}>
                                <div className={'avatar'}>
                                    <div className={'avatarLogo'}>
                                        CJ
                                    </div>
                                </div>
                                <div className={'commentContent'}>
                                    <div className={'commentContext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolor dolores enim eos iure molestias rem sint tempora veritatis.</div>
                                    <div className={'commentProps'}>
                                        <li>Posted By: <span>Username</span></li>
                                        <li>Added: <span>2 days ago</span></li>
                                        <li><Icon icon={bubble2}/> <span>10</span></li>
                                    </div>

                                </div>
                            </div>
                            <div className={'commentCard'}>
                                <div className={'avatar'}>
                                    <div className={'avatarLogo'}>
                                        CJ
                                    </div>
                                </div>
                                <div className={'commentContent'}>
                                    <div className={'commentContext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores dolor dolores enim eos iure molestias rem sint tempora veritatis.</div>
                                    <div className={'commentProps'}>
                                        <li>Posted By: <span>Username</span></li>
                                        <li>Added: <span>2 days ago</span></li>
                                        <li><Icon icon={bubble2}/> <span>10</span></li>
                                    </div>

                                </div>
                            </div>
                            <div >
                                <button className={'loadMoreButton'}>Load More</button>
                            </div>
                        </div>

                        <div className={'commentAdd'}>
                            <div className={'commentAddHeading'}>Add Comment</div>
                            <form onSubmit={(e) => [e.preventDefault()]}>
                                <div className="formGroup">
                                    <textarea>

                                    </textarea>
                                </div>
                                <div className="formGroup">
                                    <label>Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="formGroup">
                                    <label>Email</label>
                                    <input type="text"/>
                                </div>
                                <div className="formGroup">
                                    <button className={'commentSubmitButton'}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={'contentLeft'}>
                        <div className={'contentHeading'}>Related Blogs</div>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image2}
                            title={'The migthy beast of no nation'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad culpa deleniti eius fugiat illo iure, libero modi quae vel!'}
                            like={5}
                            view={10}
                            commentCount={3}
                            slug={'hello'}/>
                        <BlogCard
                            history={this.props.history}
                            coverImage={Image2}
                            title={'The migthy beast of no nation'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad culpa deleniti eius fugiat illo iure, libero modi quae vel!'}
                            like={5}
                            view={10}
                            commentCount={3}
                            slug={'hello'}/>

                        <div className={'contentHeading'}>Active Tags</div>

                        <div className={'commentTagContainer'}>
                            <li>Programming</li>
                            <li>PS4</li>
                            <li>XBOX</li>
                            <li>React</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>python</li>
                            <li>prologue</li>
                            <li>laswell</li>
                        </div>

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

export default connect(mapStateToProps)(BlogExplorer);