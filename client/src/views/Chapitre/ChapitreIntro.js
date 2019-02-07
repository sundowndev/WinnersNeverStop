import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';
import { Element } from 'react-scroll'

const ChapitreIntro = ({title, player}) => (
    <Element name="article" className="video">
        <section className="ChapitreIntro animated fadeIn">
            <Grid></Grid>
            <div className="intro">
                <div className="title">
                    {title}
                </div>
                <div className="picture">
                    <div className="playerInfo">
                        <span className="name">{player.name}</span><br></br>
                        <span className="tag">{player.tag}</span>
                    </div>
                    <img src={player.pictureUrl} alt="player"></img>
                </div>
            </div>
        </section>
    </Element>
);
ChapitreIntro.propTypes = {
    title: PropTypes.string.isRequired,
    // url: PropTypes.string.isRequired,
    player: PropTypes.object.isRequired
}


export default ChapitreIntro;