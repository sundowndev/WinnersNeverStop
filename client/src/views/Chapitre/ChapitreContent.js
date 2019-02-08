import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid/Grid';


const ChapitreContent = ({articleTitle1, articleContent1, articleTitle2, articleContent2, picture1, otherArticles}) => (
    <section className="ChapitreContent">
        <Grid></Grid>
        <div className="dualContent">
            <div className="articlePicture">
                <div className="greyPlaceholderForPicture" style={picture1}></div>
            </div>
            <div className="articleOne">
                <p className="title">{articleTitle1}</p>
                <p className="content">{articleContent1}</p>
            </div>
        </div>
        <div className="articleList">
            {otherArticles.map(article => 
                <div className="article">
                    <p className="title">{article.title}</p>
                    <p className="content">{article.text}</p>
                </div>
            )}
        </div>
        <div className="anchor"></div>
    </section>
);

ChapitreContent.propTypes = {
    picture1: PropTypes.object.isRequired,
    articleTitle1: PropTypes.string.isRequired,
    articleContent1: PropTypes.string.isRequired,
    articleTitle2: PropTypes.string.isRequired,
    articleContent2: PropTypes.string.isRequired,
    otherArticles: PropTypes.array.isRequired
}


export default ChapitreContent;