import React, {Component} from 'react';
import ChapitreMenu from './ChapitreMenu';
import axios from 'axios';

class ChapitreContainer extends Component {
    state = {
        index: 0,
        articles: []
    }
    componentDidMount() {

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Accept', 'application/json');

        var myInit = { method: 'GET',
                       headers: myHeaders,
                       mode: 'cors',
                       cache: 'default' };

        fetch('http://127.0.0.1:3000/chapters',myInit).then(function(response) {
            return response.json();
        }).then(data => {
            console.debug(data);
            this.setState({
                articles: data
            })
        })



    }
    render() {
        return (
            <ChapitreMenu></ChapitreMenu>
        );
    }
}

export default ChapitreContainer