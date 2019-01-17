import React from 'react';
import Grid from '../../components/Grid/Grid';
// import header from ...


const Credit = ({ whiteSpace, checkHoldLvl }) => (

<section className="PageCredit">
<Grid></Grid>

<div className="ContainerPageCredit">

<div className="DeveloperBlock">
    <p className="title">Développeurs</p>
    <h2 className="introDescription">Cerveaux Raphaël</h2>
    <h2 className="introDescription">Aimé Quentin</h2>
    <h2 className="introDescription">De jesus Mickael</h2>
</div>


<div className="ContainerFlex">
<div className="DesignerBlock">
    <p className="title">Designers</p>
    <h2 className="introDescription">Block Mathieu</h2>
    <h2 className="introDescription">De jesus Mickael</h2>
    <h2 className="introDescription">Chemin Aymeline</h2>
</div>

<div className="RemerciementBlock">
    <p className="title">Remerciement</p>
    <p className="introDescription">The texos De Finibusm (On the Ends of Goods and Evils, or alternatively the Purposes of Good and Evit, consectetur, adipisci velit  translation Neither is there anyone who loves grief itself since.</p>
</div>
</div>

</div>
</section>
);


export default Credit;
