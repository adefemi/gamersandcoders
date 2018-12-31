import React from 'react'
import {Icon} from 'react-icons-kit';
import {exclamation} from 'react-icons-kit/metrize/exclamation'


export default () => (
    <div className={'netErrorWrapper'}>
        <div>
            <Icon icon={exclamation} size={100}/>
        </div>
        <div className={'heading'}>Oops! Something went wrong.</div>
        <div className={'subHeading'}>
            This pages didn't load component contents correctly. We advise to check your network and try again
        </div>
    </div>
);