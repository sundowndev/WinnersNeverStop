import React from 'react';
import Grid from '../../components/Grid/Grid';
import ProjectName from '../../components/ProjectName/ProjectName';

const Propos = () => (

<section className="PagePropos">
    <Grid></Grid>
    <div className="header">
        <ProjectName></ProjectName>
    </div>

    <div className="apropos">
        <p className="title">À propos</p>
        <p className="introDescription">The text is derived from Ciceros De Finibus Bonorum et Malorum (On the Ends of Goods and Evils, or alternatively the Purposes of Good and Evil ). The original passage began neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit  translation Neither is there anyone who loves grief itself since.</p>
        <p className="introDescriptionSecond">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes. Le texte généré est du pseudo latin et peut donner l'impression d'être du vrai texte.</p>
    </div>
</section>
);

export default Propos;
