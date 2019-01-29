import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const ChapitreIntro = ({title, url}) => (
    <section className="ChapitreIntro">
        <Grid></Grid>
        <div className="intro">
            <div className="title">
                {title}
            </div>
            <div className="picture">
                <div className="playerInfo">
                    <span className="name">name</span><br></br>
                    <span className="tag">tag</span>
                </div>
                <img src={url} alt="player"></img>
            </div>
        </div>
    </section>
);
ChapitreIntro.propTypes = {
    title: PropTypes.string.isRequired,
    // style: PropTypes.object.isRequired
    url: PropTypes.string.isRequired
    // index: PropTypes.number.isRequired
}


export default ChapitreIntro;