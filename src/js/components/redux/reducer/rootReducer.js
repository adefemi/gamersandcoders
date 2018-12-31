import React from 'react'
import {combineReducers} from 'redux'

//import reducers
import {backEndLinks} from './extras';
import {setAdminActive, setForumContent, setActiveLink, setSettingContent,
    setUserContent, setStoreContent, setBlogContent} from './contentReducer';


const ReducerAll = combineReducers({
    backEndLinks : backEndLinks,
    userStatus : setAdminActive,
    userContent : setUserContent,
    storeContent : setStoreContent,
    blogContent : setBlogContent,
    forumContent: setForumContent,
    settingContent : setSettingContent,
    activeLink: setActiveLink,
});

export default ReducerAll