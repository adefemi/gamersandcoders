import React from 'react'
import Proptypes from 'prop-types'

class SubLoader extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className={!this.props.background ? 'subLoader' : 'subLoader background'}>
                <div className={'sub-outer'}>
                    <div className={'sub-inner'}> </div>
                    <div className={'sub-inner'}> </div>
                    <div className={'sub-inner'}> </div>
                    <div className={'sub-inner'}> </div>
                </div>
            </div>
        )
    }
}

SubLoader.propTypes = {
    background: Proptypes.bool.isRequired
};

export default SubLoader

