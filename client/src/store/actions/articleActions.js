import { HIT_API, INCREMENT_PAGE } from "../dispatch/dispatch";

export const articleApi = page => {
  return {
    type: HIT_API,
    url: `https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=${page}`,
    key: "articles"
  };
};

export const detailArticleApi = slug => {    
  return {
    type: HIT_API,
    url: `https://id.techinasia.com/wp-json/techinasia/3.0/posts/${slug}`,
    key: "detailArticle"
  };
};

export const incrementPage = page => {
    return {
        type: INCREMENT_PAGE,
        payload : page,
        key : 'page'
    }
}