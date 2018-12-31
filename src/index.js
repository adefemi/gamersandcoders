import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'antd/dist/antd.css';
import "video-react/dist/video-react.css"
import './assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import RootReducer from './js/components/redux/reducer/rootReducer'

const Store = createStore(RootReducer, applyMiddleware(thunk));

import Router from './js/components/router';

class Index extends React.Component{
    render(){
        return(
            <Provider store={Store}>
                <Router />
            </Provider>
        )
    }
}

ReactDom.render(<Index/>, wrapper);