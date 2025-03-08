import "h8k-components";

import Articles from "./components/Articles";

import "./App.css";

function App({ articles }) {
  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
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
        <Articles articles={articles} />
      </div>
    </>
  );
}

export default App;
