import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const ChapitreFooter = ({index, decrementIndex, incrementIndex}) => (
    <section className="ChapitreFooter">
        <div className="footerButtons">
            <div className={index === 0 ? 'user-interaction left hidden': 'user-interaction left'}>
                <div onClick={decrementIndex} className="button">
                    <div className="white-space"></div>
                </div>
                <span className="description">previous chapter</span>
            </div>
            <div className={index === 1 ? 'user-interaction right hidden': 'user-interaction right'}>
                <div onClick={incrementIndex} className="button">
                    <div className="white-space"></div>
                </div>
                <span className="description">next chapter</span>
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
