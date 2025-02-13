import React, { useState } from "react";

const FeedbackSystem = () => {
  const [reviewAspects, setReviewAspects] = useState([
    { name: "Readability", upVote: 0, downVote: 0 },
    { name: "Performance", upVote: 0, downVote: 0 },
    { name: "Security", upVote: 0, downVote: 0 },
    { name: "Documentation", upVote: 0, downVote: 0 },
    { name: "Testing", upVote: 0, downVote: 0 },
  ]);

  const onUpvoteClick = (aspectName) => {
    const updatedAspects = reviewAspects.map((reviewAspect, index) => {
        if (aspectName === reviewAspect.name) {
            reviewAspect.upVote++;
        }

        return reviewAspect
    });

    setReviewAspects(updatedAspects);
  }

  const onDownvoteClick = (aspectName) => {
    const updatedAspects = reviewAspects.map((reviewAspect, index) => {
        if (aspectName === reviewAspect.name) {
            reviewAspect.downVote++;
        }

        return reviewAspect
    });

    setReviewAspects(updatedAspects);
  }

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {reviewAspects.map((aspect, index) => (
          <div key={index} className="pa-10 w-300 card">
            <h2>{aspect.name}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
                <button className="py-10 px-15" data-testid={`upvote-btn-${index}`} onClick={() => onUpvoteClick(aspect.name)}>
                👍 Upvote
                </button>
                <button className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`} onClick={() => onDownvoteClick(aspect.name)}>
                👎 Downvote
                </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                Upvotes: <strong>{aspect.upVote}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                Downvotes: <strong>{aspect.downVote}</strong>
            </p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
