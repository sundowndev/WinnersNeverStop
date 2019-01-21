import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
// import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const ChapitreIntro = () => (
    <section className="ChapitreIntro">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
    </section>
);

ChapitreIntro.propTypes = {
    // index: PropTypes.number.isRequired
}


export default ChapitreIntro;