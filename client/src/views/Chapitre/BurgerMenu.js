import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const BurgerMenu = ({open, toggleState, imgUrl, index, incrementIndex, decrementIndex}) => (
    <section className="BurgerMenu">
        {!open &&
            <div className="svgContainer">
                <div className="icon" onClick={toggleState}>
                    <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Chapitre-Open" transform="translate(-1333.000000, -93.000000)" fill="#FAFAFA">
                                <g id="Burger-Menu" transform="translate(1333.000000, 93.500000)">
                                    <circle id="Oval-2" cx="2.03125" cy="2.03125" r="2.03125"></circle>
                                    <circle id="Oval-2-Copy" cx="10.96875" cy="2.03125" r="2.03125"></circle>
                                    <circle id="Oval-2-Copy-2" cx="10.96875" cy="10.4270833" r="2.03125"></circle>
                                    <circle id="Oval-2-Copy-3" cx="2.03125" cy="10.4270833" r="2.03125"></circle>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        }
        {open &&
            <div>
                <div className="svgContainer">
                    <div className="icon black" onClick={toggleState}>
                        <svg width="14px" height="13px" viewBox="0 0 14 13" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Chapitre-Open" transform="translate(-1334.000000, -77.000000)" fill="#0b1636">
                                    <g id="Group" transform="translate(1340.750000, 83.750000) rotate(90.000000) translate(-1340.750000, -83.750000) translate(1334.750000, 76.750000)">
                                        <path d="M5.43436755,13.2638847 C5.6257672,13.511676 7.5,13.9757586 7.5,12.076238 C4.1422029,7.52541268 2.20485205,5.25 1.68794746,5.25 C0.912590577,5.25 0.235524325,5.72194693 0,6.68748598 C3.49531194,10.9065575 5.30676779,13.0986904 5.43436755,13.2638847 Z" id="Oval-2" transform="translate(3.750000, 9.375000) scale(-1, 1) translate(-3.750000, -9.375000) "></path>
                                        <path d="M9.93436755,13.2638847 C10.1257672,13.511676 12,13.9757586 12,12.076238 C8.6422029,7.52541268 6.70485205,5.25 6.18794746,5.25 C5.41259058,5.25 4.73552433,5.72194693 4.5,6.68748598 C7.99531194,10.9065575 9.80676779,13.0986904 9.93436755,13.2638847 Z" id="Oval-2"></path>
                                        <path d="M9.93436755,8.01388467 C10.1257672,8.26167602 12,8.72575863 12,6.82623805 C8.6422029,2.27541268 6.70485205,0 6.18794746,0 C5.41259058,0 4.73552433,0.471946935 4.5,1.43748598 C7.99531194,5.65655754 9.80676779,7.84869044 9.93436755,8.01388467 Z" id="Oval-2" transform="translate(8.250000, 4.125000) scale(1, -1) translate(-8.250000, -4.125000) "></path>
                                        <path d="M5.43436755,8.01388467 C5.6257672,8.26167602 7.5,8.72575863 7.5,6.82623805 C4.1422029,2.27541268 2.20485205,0 1.68794746,0 C0.912590577,0 0.235524325,0.471946935 0,1.43748598 C3.49531194,5.65655754 5.30676779,7.84869044 5.43436755,8.01388467 Z" id="Oval-2" transform="translate(3.750000, 4.125000) rotate(180.000000) translate(-3.750000, -4.125000) "></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="view">
                    <Grid></Grid>
                    <div className="currentChapter" style={imgUrl}>
                        <div className="container">
                            <div className="info">
                                <div className="arrowSection">
                                    <img onClick={decrementIndex} className="arrowUp" src="/assets/img/arrow-down.svg" alt="arrow up"></img>
                                    <span className="index">0{index + 1}</span>
                                    <img onClick={incrementIndex} className="arrowDown" src="/assets/img/arrow-down.svg" alt="arrow down"></img>
                                </div>
                                <span className="title">title placeholder</span>
                            </div>
                            <div className="barres">
                                <hr className={index === 0 ? 'index1 active': 'index1'}></hr>
                                <hr className={index === 1 ? 'index2 active': 'index2'}></hr>
                                <hr className={index === 2 ? 'index3 active': 'index3'}></hr>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <a className="link" href="/about">
                    A propos
                </a>
            </div>
        }
    </section>
);

BurgerMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleState: PropTypes.func.isRequired,
    imgUrl: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    incrementIndex: PropTypes.func.isRequired,
    decrementIndex: PropTypes.func.isRequired,
}


export default BurgerMenu;