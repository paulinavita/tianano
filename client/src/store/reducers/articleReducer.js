import {
  SUCCESS_HIT_API,
  API_LOADING,
  ERROR_HIT_API,
  INCREMENT_PAGE
} from "../dispatch/dispatch";

let initState = {
  isLoading: false,
  articles: [],
  page : 1,
  detailArticle: {},
  error: {}
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS_HIT_API: {
      switch (action.key) {
        case "articles":
          
          return {
            ...state,
            [action.key]: [...state.articles, ...action.payload.posts],
            isLoading: false
          };

        default:
          return {
            ...state,
            [action.key]: action.payload,
            isLoading: false
          };
      }
    }

    case INCREMENT_PAGE : {
      console.log(action, 'APAPAPA');
      
      return {
        ...state,
        [action.key]: action.payload,
      }
    }
    case API_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ERROR_HIT_API: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default:
      return { ...state };
  }
};

export default articleReducer;
