import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';


const ChapitreContent = ({iFrameWidth, iFrameHeight, articleTitle1, articleContent1, articleTitle2, articleContent2}) => (
    <section className="ChapitreContent">
        <Grid></Grid>
        <div className="dualContent">
            <div className="articlePicture">
                <div className="greyPlaceholderForPicture"></div>
            </div>
            <div className="articleOne">
                <p className="title">{articleTitle1}</p>
                <p className="content">{articleContent1}</p>
            </div>
        </div>
        <div className="articleTwo">
            <p className="title">{articleTitle2}</p>
            <p className="content">{articleContent2}</p>
        </div>
        <div className="anchor"></div>
    </section>
);

ChapitreContent.propTypes = {
    // iFrameWidth: PropTypes.string.isRequired,
    // iFrameHeight: PropTypes.string.isRequired,
    articleTitle1: PropTypes.string.isRequired,
    articleContent1: PropTypes.string.isRequired,
    articleTitle2: PropTypes.string.isRequired,
    articleContent2: PropTypes.string.isRequired,
}


export default ChapitreContent;