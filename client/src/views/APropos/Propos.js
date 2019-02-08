import React, {Component} from 'react';
import Grid from '../../components/Grid/Grid';

class Propos extends Component {
    constructor(props){
       super(props);
       this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack(){
        this.props.history.goBack();
    }


    componentDidMount() {

    }
    render() {
        return (
            <section className="PagePropos">
                <Grid></Grid>
                <div className="header">
                    <div onClick={this.goBack} className="arrowContainer">
                        <img className="arrowBack" src="/assets/img/arrow-down.svg" alt="retour"></img>
                    </div>
                </div>

                <div className="apropos">
                    <p className="title">À propos</p>
                    <p className="introDescription">Nous sommes un groupe de 5 étudiants à HETIC et nous avons travaillé durant 5 mois sur un projet d’étude nécessitant la réalisation d’un web-documentaire.</p>
                    <p className="introDescriptionSecond">Winners Never Stop est un projet destiné à étudier la place de l’esport en France, les législations qui l’encadrent et les formations qui se mettent en place. Nous sommes tout les 5 des amateurs et passionnés de l’e-sport et nous espérons sincèrement que ce projet vous plaira.</p>
                </div>
            </section>
        );
    }
}


export default Propos;
