import React from 'react';
import NavBrand from './navBrand'
import NavLink from './navLink'

class HeaderFixed extends React.Component{
    constructor(props){
        super(props);
        window.onscroll = (e) => this.handleScroll(e);
        this.headerFixed = null;
        this.goupContain = null;
    }

    componentDidMount(){
        this.headerFixed = document.getElementById('headerFixed');
        this.goupContain = document.getElementById('goUp');
    }

    handleScroll(e){
        let scrollY = window.scrollY;
        if(scrollY >= 600){
            if(this.headerFixed.classList.contains("closed")){
                this.headerFixed.classList.remove("closed");
            }
        }
        else{
            if(!this.headerFixed.classList.contains("closed")){
                this.headerFixed.classList.add("closed");
            }
        }

        if(scrollY >= 800){
            if(this.goupContain.classList.contains("closed")){
                this.goupContain.classList.remove("closed");
            }
        }
        else{
            if(!this.goupContain.classList.contains("closed")){
                this.goupContain.classList.add("closed");
            }
        }
    }

    render(){
        return(
            <div id={'headerFixed'} className={'headerFixed closed'}>
                <div className={'inner'}>
                    <NavBrand/>
                    <NavLink/>
                </div>
            </div>
        )
    }
}


export default HeaderFixed