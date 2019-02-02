import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

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
                <div className="button firstButton">
                    <img src="/assets/img/music-player-play.svg" className="play" alt="play button"></img>
                </div>
                <span className="description">Voir la vidéo</span>
            </div>
            <div className="buttonSection">
                <div className="button">
                    <img src="/assets/img/arrow-down.svg" className="arrowDown" alt="flêche vers le bas"></img>
                </div>
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