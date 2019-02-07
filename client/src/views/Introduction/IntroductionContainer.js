import React, {Component} from 'react';
import IntroductionEntryPoint from './IntroductionEntryPoint';

class IntroductionContainer extends Component {
    state = {
        index: 0,
    } 
    componentDidMount() {

    }
    render() {
        return (
            <IntroductionEntryPoint></IntroductionEntryPoint>
        );
    }
}

export default IntroductionContainer