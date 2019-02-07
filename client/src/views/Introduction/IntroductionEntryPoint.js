import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const Introduction = ({ categories, isLoading }) => (
    <section className="Introduction">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
        <h1>Chapitre 1</h1>
    </section>
);

Introduction.propTypes = {
    index: PropTypes.number.isRequired
}


export default Introduction;