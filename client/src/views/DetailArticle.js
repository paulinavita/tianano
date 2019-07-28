import React, { useEffect } from "react";
import { connect } from "react-redux";
import { detailArticleApi } from "../store/actions/articleActions";
import Writer from "../components/Writer";
import Header from "../components/Header";

const DetailArticle = props => {
  const { location, detailArticle } = props;

  useEffect(() => {
    props.detailArticleApi(location.state.slug);
  }, []);

  return (
    <>
      <Header />
      <div className="container border">
        {detailArticle.posts && detailArticle.posts[0] && (
          <div className="row">
            <div className="card">
              <div className="card-body ">
                <h2
                  className="card-title"
                  dangerouslySetInnerHTML={{
                    __html: detailArticle.posts[0].title
                  }}
                />
                <hr />
                <p
                  className="card-text justify-content-center"
                  dangerouslySetInnerHTML={{
                    __html: detailArticle.posts[0].content
                  }}
                />
              </div>
            </div>
            <Writer {...detailArticle.posts[0].author} />
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.article.isLoading,
    detailArticle: state.article.detailArticle
  };
};

const mapDispatchToProps = {
  detailArticleApi
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailArticle);
