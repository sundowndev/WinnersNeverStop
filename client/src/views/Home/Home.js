import React from 'react';
import PropTypes from 'prop-types';
import ProjectName from '../../components/ProjectName/ProjectName';
import Grid from '../../components/Grid/Grid';

const Home = ({ whiteSpace, checkHoldLvl }) => (
    <section className="Home">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
        <div className="introduction">
            <p className="title">Découvrez l'eSport</p>
            <p className="introDescription">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes. Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.</p>
            <div className="user-interaction">
                <div className="button"onMouseUp={checkHoldLvl}>
                    <div ref={whiteSpace} className="white-space"></div>
                </div>
                <span className="description">Hold to discover</span>
            </div>
        </div>
        <div className="footer">
            
        </div>
    </section>
);

Home.propTypes = {
    // startTimer: PropTypes.func.isRequired,
    // endTimer: PropTypes.func.isRequired,
    checkHoldLvl: PropTypes.func.isRequired,
    whiteSpace: PropTypes.object.isRequired
}


export default Home;