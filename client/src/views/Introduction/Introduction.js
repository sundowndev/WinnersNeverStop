import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';

const Introduction = ({ categories, isLoading }) => (
    <section className="Introduction">
        <div className="header">
            <h1>Chapitre 1</h1>
            <ProjectName></ProjectName>
        </div>
    </section>
);

Introduction.propTypes = {

}


export default Introduction;