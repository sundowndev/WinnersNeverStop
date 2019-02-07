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
        this.pushIfHoldedEnough = this.pushIfHoldedEnough.bind(this);
        this.toggleAnim = this.toggleAnim.bind(this);
        this.whiteSpace = React.createRef();
    } 
    componentDidMount() {

    }
    toggleAnim() {
        console.debug(this.whiteSpace.current)
        window.setInterval(() => {
            this.whiteSpace.current.width = window.getComputedStyle(this.whiteSpace.current).getPropertyValue('width') + 1;
        }, 20)
    }
    pushIfHoldedEnough() {
        let width = parseInt(window.getComputedStyle(this.whiteSpace.current).getPropertyValue('width'));
        if (width >= 49) {
            this.props.history.push('/article/1')
        }
    }
    render() {
        return (
            <Home
                // startTimer={this.startTimer}
                toggleAnim={this.toggleAnim}
                checkHoldLvl={this.pushIfHoldedEnough}
                whiteSpace={this.whiteSpace}
            ></Home>
        );
    }
}

export default HomeContainer