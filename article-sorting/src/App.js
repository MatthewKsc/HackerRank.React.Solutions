import "h8k-components";

import Articles from "./components/Articles";

import "./App.css";
import {useState} from "react";

const sortArticlesByMostUpvoted = (articlesToSort) => articlesToSort.sort((a, b) => b.upvotes - a.upvotes);

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(() => sortArticlesByMostUpvoted([...articles]));

  const handleMostUpvoted = () => {
    const sortedByUpvotes = sortArticlesByMostUpvoted(sortedArticles);
    setSortedArticles([...sortedByUpvotes]);
  };

  const handleMostRecent = () => {
    const sortedByDate = sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedArticles([...sortedByDate]);
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={ sortedArticles } />
      </div>
    </>
  );
}

export default App;
