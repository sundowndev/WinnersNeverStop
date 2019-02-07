import React from 'react';
import PropTypes from 'prop-types';
import ProjectName from '../../components/ProjectName/ProjectName';
import Grid from '../../components/Grid/Grid';

const Home = ({ whiteSpace, checkHoldLvl, toggleAnim, button }) => (
    <section className="Home">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
        
        <div className="introduction">
            <p className="title">L'esport fait vivre !</p>
            <p className="introDescription">La différence entre les gagnants et les perdants se voit à la grandeur face à la pression. Leur capacité à persévérer et ne jamais arrêter de s'entraîner. Découvrez les coulisses d’une discipline sportive qui se développe de plus en plus, et en particulier en France.</p>
            <div className="user-interaction">
                <div ref={button} className="button" onClick={toggleAnim}>
                    <div ref={whiteSpace} className="white-space"></div>
                </div>
                <span className="description">Cliquez pour découvrir</span>
            </div>
        </div>
    </section>
);

Home.propTypes = {
    // startTimer: PropTypes.func.isRequired,
    // endTimer: PropTypes.func.isRequired,
    // checkHoldLvl: PropTypes.func.isRequired,
    toggleAnim: PropTypes.func.isRequired,
    whiteSpace: PropTypes.object.isRequired,
    button: PropTypes.object.isRequired
}


export default Home;
