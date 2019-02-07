import React, {Component} from 'react';
import ChapitreMenu from './ChapitreMenu';
import ChapitreIntro from './ChapitreIntro';
import ChapitreContent from './ChapitreContent';
import ChapitreFooter from './ChapitreFooter';
import BurgerMenu from './BurgerMenu';
import Player from './Player';
import { Element } from 'react-scroll'


class ChapitreContainer extends Component {
    state = {
        index: 0,
        articles: [],
        playerWidth: 0,
        playerHeight: 0,
        burgerState: false,
        isPlayerDisplayed: false
    }

    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {

        this.setState({
            index: parseInt(this.props.match.params.index - 1)
        })
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
                articles: data.data
            })
        })
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    generateStyleBackgroundImage = () => {
        // TODO get routes from api when it will be setted, for now blueBitmap is considered as placeholder

        return { backgroundImage: 'url("/assets/img/blueBitmap.png")'};
    }
    generateIntroPicture = () => {
        return { backgroundImage: 'url("/assets/img/chapter2.png")'}
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
                isPlayerDisplayed: false,
                burgerState: true
            })
            document.querySelector('body').style.overflow = "hidden";
        }
    }
    decrementIndex = () => {
        this.setState((previousState) => {
            if (previousState.index === 0) {
                return {
                    index: 2
                };
            }
            else {

                return {
                    index: previousState.index - 1
                }
            }
        }, () => {
            this.props.history.push(`/article/${this.state.index + 1}`)
        });
    }
    displayPlayer = () => {
        this.setState({
            isPlayerDisplayed: true
        })
        document.querySelector('body').style.overflow = "hidden";
    }
    hidePlayer = () => {

        this.setState({
            isPlayerDisplayed: false
        })
        document.querySelector('body').style.overflow = "auto";
    }
    incrementIndex = () => {
        this.setState((previousState) => {
            if (previousState.index === 2) {
                return {
                    index: 0
                };
            }
            else {

                return {
                    index: previousState.index + 1
                }
            }
        }, () => {
            this.props.history.push(`/article/${this.state.index + 1}`)
        });
    }
    render() {
        if (this.state.articles.length) {
            return (
                <div className="App">
                    {this.state.articles.length && 
                    <Element name="chapter">
                        <div className="animated fadeIn">
                            <BurgerMenu
                                open={this.state.burgerState}
                                toggleState={this.toggleBurgerState}
                                imgUrl={this.generateStyleBackgroundImage()}
                                index={this.state.index}
                                decrementIndex={this.decrementIndex}
                                incrementIndex={this.incrementIndex}
                                title={this.state.articles[this.state.index].title}
                                isPlayerVisible={this.state.isPlayerDisplayed}
                            ></BurgerMenu>
                            <Player
                                hidePlayer={this.hidePlayer}
                                isPlayerVisible={this.state.isPlayerDisplayed}
                                iFrameHeight={this.state.height.toString()}
                                iFrameWidth={this.state.width.toString()}
                            ></Player>
                            <ChapitreMenu
                                displayPlayer={this.displayPlayer}
                                title={this.state.articles[this.state.index].title}
                                imgUrl={this.generateStyleBackgroundImage()}
                            ></ChapitreMenu>
                            <ChapitreIntro
                                title={this.state.articles[this.state.index].description}
                                url="/assets/img/chapter2.png"
                            ></ChapitreIntro>
                            <ChapitreContent
                                articleTitle1={this.state.articles[this.state.index].content[0].title}
                                articleContent1={this.state.articles[this.state.index].content[0].text}
                                articleTitle2={this.state.articles[this.state.index].content[1].title}
                                articleContent2={this.state.articles[this.state.index].content[1].text}
                            ></ChapitreContent>
                            <ChapitreFooter
                                index={this.state.index}
                                decrementIndex={this.decrementIndex}
                                incrementIndex={this.incrementIndex}
                            ></ChapitreFooter>
                        </div>
                    </Element>
                }
                </div>
            );
        }
        else {
            return (
                <div className="App"></div>
            )
        }
    }
}

export default ChapitreContainer