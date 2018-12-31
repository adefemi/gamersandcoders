import React from 'react';
import {Icon} from 'react-icons-kit';
import {chevronUp} from 'react-icons-kit/ionicons/chevronUp';
import $ from 'jquery'

class Go_up extends React.Component{
    constructor(props){
        super(props);
        this.goupContain = null;
    }

    componentDidMount(){
        this.goupContain = document.getElementById('goUp');
    }

    handleScroll(e){
        let scrollY = window.scrollY;
        console.log(scrollY);
        if(scrollY >= 800){
            if(!this.goupContain.classList.contains("closed")) return;
            this.goupContain.classList.remove("closed");
        }
        else{
            if(this.goupContain.classList.contains("closed")) return;
            this.goupContain.classList.add("closed");
        }
    }

    goup(){
        $('html, body, div').animate({scrollTop: 0}, 500)
    }

    render(){
        return(
            <div id={'goUp'} className={'goUp closed'} onClick={() => this.goup()}>
                <Icon icon={chevronUp}/>
            </div>
        )
    }
}

export default Go_up;