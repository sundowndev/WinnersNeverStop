import React, {Component} from 'react';
import ChapitreMenu from './ChapitreMenu';
import ChapitreIntro from './ChapitreIntro';
import ChapitreContent from './ChapitreContent';

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
    generateStyleBackgroundImage = () => {
        // const images = require.context('../../assets/img/', true);
        // console.debug(images);
        // let bg = images('/blueBitmap.png');
        // console.debug(bg);
        // return { backgroundImage: `url(${bg}`};
        return { backgroundImage: 'url("assets/img/blueBitmap.png")'};
    }
    render() {
        return (
            <div>
                <ChapitreMenu
                    title="Le monde de l'esport et sa professionnalisation"
                    imgUrl={this.generateStyleBackgroundImage()}
                    test="../../assets/img/blueBitmap.png"
                ></ChapitreMenu>
                <ChapitreIntro></ChapitreIntro>
                <ChapitreContent></ChapitreContent>
            </div>
        );
    }
}

export default ChapitreContainer