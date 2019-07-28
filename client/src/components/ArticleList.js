import React from "react";
import Article from "./Article";
import { connect } from "react-redux";
import Loading from "./Loading";

const ArticleList = props => {
  const { articles, isLoading } = props;

  return (
    <>
      {articles && articles.length
        ? articles.map(article => {
            return isLoading ? (
              <Loading />
            ) : (
              <div key={article.id} className="col-md-6 col-xs-12">
                <Article  {...article} />
              </div>
            );
          })
        : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.article.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(ArticleList);
