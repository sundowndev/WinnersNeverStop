import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
// import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const Chapitre = () => (
    <section className="ChapitreMenu">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
    </section>
);

Chapitre.propTypes = {
    // index: PropTypes.number.isRequired
}


export default Chapitre;