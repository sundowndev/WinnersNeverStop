import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';

const ChapitreContent = ({iFrameWidth, iFrameHeight}) => (
    <section className="ChapitreContent">
        <Grid></Grid>
        <div className="dualContent">
            <div className="articlePicture">
                <div className="greyPlaceholderForPicture"></div>
            </div>
            <div className="articleOne">
                <p className="title">article one title</p>
                <p className="content">article one content</p>
            </div>
        </div>
        <div className="articleTwo">
            <p className="title">article two title</p>
            <p className="content">article two content</p>
        </div>
        <div className="playerVideo">
            <iframe
                title="player"
                width={iFrameWidth}
                height={iFrameHeight}
                sandbox="allow-same-origin allow-scripts"
                src="https://peertube.cpy.re/videos/embed/da2b08d4-a242-4170-b32a-4ec8cbdca701"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    </section>
);

ChapitreContent.propTypes = {
    // index: PropTypes.number.isRequired
    iFrameWidth: PropTypes.string.isRequired,
    iFrameHeight: PropTypes.string.isRequired
}


export default ChapitreContent;