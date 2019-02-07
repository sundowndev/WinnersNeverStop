import React from 'react';
import PropTypes from 'prop-types';

const Player = ({isPlayerVisible, iFrameWidth, iFrameHeight, hidePlayer}) => (
    <section className="Player">
        {isPlayerVisible && 
            <div>
                <div onClick={hidePlayer} className="arrowContainer">
                    <img className="arrowBack" src="/assets/img/arrow-down.svg" alt="retour"></img>
                </div>
                <div className="playerVideo">
                    <iframe
                        title="player"
                        width={iFrameWidth}
                        height={iFrameHeight}
                        sandbox="allow-same-origin allow-scripts"
                        src="https://peertube.social/videos/embed/43c97e8b-5762-4bcd-b6eb-3686b98e2e0c"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        }
    </section>
)

Player.propTypes = {
    isPlayerVisible: PropTypes.bool.isRequired,
    iFrameWidth: PropTypes.string.isRequired,
    iFrameHeight: PropTypes.string.isRequired,
    hidePlayer: PropTypes.func.isRequired,
}

export default Player;