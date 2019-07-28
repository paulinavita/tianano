import React, { useEffect } from "react";
import ArticleList from "../components/ArticleList";
import { connect } from "react-redux";
import { articleApi, incrementPage } from "../store/actions/articleActions";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Home = props => {
  const { isLoading, articles, articleApi, page, incrementPage } = props;

  const nextPage = () => {
    incrementPage (page + 1)
  };

  useEffect(() => {
    articleApi(page);
  }, [page]);

  return (
    <>
      <Header />
      <div className="container border py-5">
        <InfiniteScroll
          dataLength={articles.length}
          next={nextPage}
          hasMore={true}
          loader={<div className="row justify-content-center"><Loading /></div>}
        >
          {!isLoading && articles.length && (
            <div className="row">
              <ArticleList articles={articles} />
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.article.isLoading,
    articles: state.article.articles,
    page : state.article.page
  };
};

const mapDispatchToProps = { articleApi, incrementPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
