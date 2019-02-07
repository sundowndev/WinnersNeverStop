import React, {Component} from 'react';
import Home from './Home';
// import moment from 'moment';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: null,
            end: null,
        };
        // this.startTimer = this.startTimer.bind(this);
        // this.endTimer = this.endTimer.bind(this);
        // this.pushIfHoldedEnough = this.pushIfHoldedEnough.bind(this);
        this.toggleAnim = this.toggleAnim.bind(this);
        this.whiteSpace = React.createRef();
        this.button = React.createRef();
    } 
    componentDidMount() {

    }
    toggleAnim() {
        let event = new Event('mousedown')
        this.button.current.dispatchEvent(event);
        let interval = window.setInterval(() => {
            this.whiteSpace.current.style.width = this.whiteSpace.current.style.width !== "" ? `${parseInt(this.whiteSpace.current.style.width) + 1}px` : '5px';
            this.whiteSpace.current.style.height = this.whiteSpace.current.style.height !== "" ? `${parseInt(this.whiteSpace.current.style.height) + 1}px` : '5px';
            if (parseInt(this.whiteSpace.current.style.width) >= 50)
                {
                    window.clearInterval(interval);
                    this.props.history.push('/article/1');
                }
        }, 10)
    }
    // pushIfHoldedEnough() {
    //     let width = parseInt(window.getComputedStyle(this.whiteSpace.current).getPropertyValue('width'));
    //     if (width >= 49) {
    //         this.props.history.push('/article/1')
    //     }
    // }
    render() {
        return (
            <Home
                // startTimer={this.startTimer}
                toggleAnim={this.toggleAnim}
                // checkHoldLvl={this.pushIfHoldedEnough}
                whiteSpace={this.whiteSpace}
                button={this.button}
            ></Home>
        );
    }
}

export default HomeContainer