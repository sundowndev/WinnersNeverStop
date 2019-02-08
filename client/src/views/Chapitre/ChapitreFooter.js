import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const ChapitreFooter = ({index, decrementIndex, incrementIndex}) => (
    <section className="ChapitreFooter">
        <div className="footerButtons">
            <div className="user-interaction left">
                <Link activeClass="active" to="video" spy={true} smooth={true} duration={500}>
                    <div onClick={decrementIndex} className="button">
                        <img src="/assets/img/arrow-down.svg" className="arrowLeft" alt="flêche vers la gauche"></img>
                    </div>
                </Link>
                <span className="description">chapitre précédent</span>
            </div>
            <div className="user-interaction right">
                <Link activeClass="active" to="video" spy={true} smooth={true} duration={500}>
                    <div onClick={incrementIndex} className="button">
                        <img src="/assets/img/arrow-down.svg" className="arrowRight" alt="flêche vers la droite"></img>
                    </div>
                </Link>
                <span className="description">chapitre suivant</span>
            </div>
        </div>
    </section>
);
ChapitreFooter.propTypes = {
    index: PropTypes.number.isRequired,
    decrementIndex: PropTypes.func.isRequired,
    incrementIndex: PropTypes.func.isRequired
}


export default ChapitreFooter;
