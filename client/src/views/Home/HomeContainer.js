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
        this.whiteSpace = React.createRef();
    } 
    componentDidMount() {

    }
    // startTimer() {
    //     let start = moment();
    //     this.setState({
    //         start: start
    //     });
    //     console.debug('down');
    // }
    // endTimer() {
    //     console.debug(this.whiteSpace);
    //     console.debug(window.getComputedStyle(this.whiteSpace.current).getPropertyValue('width'));
    //     let end = moment();
    //     await this.setState({
    //         end: end
    //     });
    //     console.debug('up');
    //     this.computeDiff();
    // }
    pushIfHoldedEnough() {
        let width = parseInt(window.getComputedStyle(this.whiteSpace.current).getPropertyValue('width'));
        console.debug(width);
        if (width >= 49) {
            this.props.history.push('/introduction')
        }
        // let diff = this.state.end.diff(this.state.start);
        // console.debug(diff);
        // if (this.state.end.diff(this.state.start)) {
        //     this.props.history.push('/introduction');
        // }
    }
    render() {
        return (
            <Home
                // startTimer={this.startTimer}
                checkHoldLvl={this.pushIfHoldedEnough}
                whiteSpace={this.whiteSpace}
            ></Home>
        );
    }
}

export default HomeContainer