import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ categories, isLoading }) => (
    <section className="Home">
        <div className="header">
            <p className="title">#WinnersNeverStop</p>
            <div className="burger">
                <ul className="ul">
                    <li className="li"></li>
                    <li className="li"></li>
                    <li className="li"></li>
                    <li className="li"></li>
                </ul>
            </div>
        </div>
    </section>
);

Home.propTypes = {

}


export default Home;