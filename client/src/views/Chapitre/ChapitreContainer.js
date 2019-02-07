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
        isPlayerDisplayed: false,
        players: [
            {
                tag: 'Next',
                name: 'Jordan Savelli',
                pictureUrl: '/assets/img/Next.png'
            },
            {
                tag: 'SpeedSelf',
                name: 'Thomas',
                pictureUrl: '/assets/img/SpeedSelf.png'
            },
            {
                tag: 'Targamas',
                name: 'Raphaël Crabbé',
                pictureUrl: '/assets/img/Targamas.png'
            }
        ]
    }

    componentWillMount() {
        this.updateDimensions();
    }
    componentDidUpdate() {
        if (this.state.isPlayerDisplayed){
            let el = document.getElementById('player').contentWindow
            console.debug(el);
            let video = document.querySelector('.video-js')
            console.debug(video);
        }
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
        let url = ''
        if (process.env.API_URL) {
            url = process.env.API_URL;
        }
        else {
            url = 'http://127.0.0.1:3000'
        }
        fetch(`${url}/chapters`,myInit).then(function(response) {
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

        return { backgroundImage: `url("/assets/img/${this.state.articles[this.state.index].thumbUrl}")`};
    }
    generatePicture = () => {
        return { backgroundImage: `url("/assets/img/${this.state.articles[this.state.index].content[0].thumbUrl}")`};
    }
    toggleBurgerState = () => {
        let id = null;
        const wheel = (event) => {
            window.clearTimeout(id);
            id = window.setTimeout(() => {
                if (event.deltaY < 0) {
                    this.decrementIndex();
                }
                else {
                    this.incrementIndex();
                }
            }, 60)
        }
        if (this.state.burgerState) {
            document.querySelector('body').style.overflow = "auto";
            document.querySelector('.currentChapter').removeEventListener('wheel', wheel, true);
            this.setState({
                burgerState: false
            })
        }
        else {
            this.setState({
                isPlayerDisplayed: false,
                burgerState: true
            }, () => {
                document.querySelector('.currentChapter').addEventListener('wheel', wheel, true);
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
                                videoUrl={this.state.articles[this.state.index].videoUrl}
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
                                player={this.state.players[this.state.index]}
                            ></ChapitreIntro>
                            <ChapitreContent
                                picture1={this.generatePicture()}
                                articleTitle1={this.state.articles[this.state.index].content[0].title}
                                articleContent1={this.state.articles[this.state.index].content[0].text}
                                articleTitle2={this.state.articles[this.state.index].content.length > 1 ? this.state.articles[this.state.index].content[1].title : null}
                                articleContent2={this.state.articles[this.state.index].content.length > 1 ? this.state.articles[this.state.index].content[1].text : null}
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