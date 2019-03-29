import React from "react";

const RequestComment = ({commentName, commentDate, commentContents}) => (

  <div className="request-comment">
          <p>
            <span class="request-commenter">{commentName}</span>
            <span class="comment-date">{commentDate}</span>
          </p>

          <p>{commentContents}</p>
        </div>
)

export default RequestComment;