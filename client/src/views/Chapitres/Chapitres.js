import React from 'react';
import ProjectName from '../../components/ProjectName/ProjectName';

const Chapitres = ({ categories, isLoading }) => (
    <section className="Chapitres">
        <div className="header">
            <ProjectName></ProjectName>
            <h1>Chapitre 1</h1>
        </div>
    </section>
);

Chapitres.propTypes = {

}


export default Chapitres;