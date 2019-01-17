import React, {Component} from 'react';
import ChapitreMenu from './ChapitreMenu';
import axios from 'axios';

class ChapitreContainer extends Component {
    state = {
        index: 0,
    }
    componentDidMount() {
        axios.defaults.headers.get['content-type'] = 'application/json';
        // axios.defaults.headers.get['accept'] = 'application/json';
        axios.get('http://127.0.0.1:3000/chapters').then(data => {
            console.debug(data);
        })
    }
    render() {
        return (
            <ChapitreMenu></ChapitreMenu>
        );
    }
}

export default ChapitreContainer