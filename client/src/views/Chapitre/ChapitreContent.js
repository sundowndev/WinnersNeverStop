import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';
// import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const ChapitreContent = () => (
    <section className="ChapitreContent">
        <Grid></Grid>
        <div className="header">
            <ProjectName></ProjectName>
        </div>
    </section>
);

ChapitreContent.propTypes = {
    // index: PropTypes.number.isRequired
}


export default ChapitreContent;