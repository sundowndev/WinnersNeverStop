import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';
import { Link } from 'react-scroll'


const Chapitre = ({title, imgUrl}) => (
    <section className="ChapitreMenu" style={imgUrl}>
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
        <div className="menuTitle">
            <p>{title}</p>
        </div>
        <div className="userInteraction">
            <div className="buttonSection">
                <Link activeClass="active" className="test1" to="video" spy={true} smooth={true} duration={500} >
                    <div className="button firstButton">
                        <img src="/assets/img/music-player-play.svg" className="play" alt="play button"></img>
                    </div>
                </Link>
                <span className="description">Voir la vidéo</span>
            </div>
            <div className="buttonSection">
                <Link activeClass="active" className="test1" to="article" spy={true} smooth={true} duration={500} >
                    <div className="button" >
                        <img src="/assets/img/arrow-down.svg" className="arrowDown" alt="flêche vers le bas"></img>
                    </div>
                </Link>
                <span className="description">Lire l'article</span>
            </div>
        </div>
    </section>
);

Chapitre.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.object.isRequired
    // index: PropTypes.number.isRequired
}


export default Chapitre;