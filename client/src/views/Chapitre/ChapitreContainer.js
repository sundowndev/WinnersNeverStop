import React, {Component} from 'react';
import ChapitreMenu from './ChapitreMenu';
import ChapitreIntro from './ChapitreIntro';
import ChapitreContent from './ChapitreContent';
import ChapitreFooter from './ChapitreFooter';
import BurgerMenu from './BurgerMenu';

class ChapitreContainer extends Component {
    state = {
        index: 0,
        articles: [],
        playerWidth: 0,
        playerHeight: 0,
        burgerState: false,
    }

    componentWillMount() {
        this.updateDimensions();
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
            console.debug('data : ');
            console.debug(data);
            this.setState({
                articles: data
            })
        })
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({width: window.innerWidth * 66 / 100, height: (window.innerWidth * 66 / 100 * 0.6) + 5});
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    getNextIndex = () => {
        return this.state.index + 1;
    }
    getPreviousIndex = () => {
        return this.state.index - 1;
    }
    generateStyleBackgroundImage = () => {
        // const images = require.context('../../assets/img/', true);
        // console.debug(images);
        // let bg = images('/blueBitmap.png');
        // console.debug(bg);
        // return { backgroundImage: `url(${bg}`};
        return { backgroundImage: 'url("assets/img/blueBitmap.png")'};
    }
    generateIntroPicture = () => {
        return { backgroundImage: 'url("assets/img/chapter2.png")'}
    }
    toggleBurgerState = () => {
        if (this.state.burgerState) {
            this.setState({
                burgerState: false
            })
            document.querySelector('body').style.overflow = "auto";
        }
        else {
            this.setState({
                burgerState: true
            })
            document.querySelector('body').style.overflow = "hidden";
        }
    }
    decrementIndex = () => {
        this.setState({
            index: 0
        })
    }
    incrementIndex = () => {
        this.setState({
            index: 1
        })
    }
    render() {
        return (
            <div>
                <BurgerMenu
                    open={this.state.burgerState}
                    toggleState={this.toggleBurgerState}
                    imgUrl={this.generateStyleBackgroundImage()}
                    index={this.state.index}
                    next={this.getNextIndex()}
                    prev={this.getPreviousIndex()}
                    decrementIndex={this.decrementIndex}
                    incrementIndex={this.incrementIndex}
                ></BurgerMenu>
                <ChapitreMenu
                    title="Le monde de l'esport et sa professionnalisation"
                    imgUrl={this.generateStyleBackgroundImage()}
                    test="../../assets/img/blueBitmap.png"
                ></ChapitreMenu>
                <ChapitreIntro
                    title="title placholder"
                    url="assets/img/chapter2.png"
                ></ChapitreIntro>
                <ChapitreContent
                    iFrameHeight={this.state.height.toString()}
                    iFrameWidth={this.state.width.toString()}
                ></ChapitreContent>
                <ChapitreFooter
                    index={this.state.index}
                    decrementIndex={this.decrementIndex}
                    incrementIndex={this.incrementIndex}
                ></ChapitreFooter>
            </div>
        );
    }
}

export default ChapitreContainer