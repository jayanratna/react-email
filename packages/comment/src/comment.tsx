import * as React from "react";

export interface CommentProps {
  children: React.ReactNode
}

function toChildren(children) {
  const comment = document.createComment(children)
  return [comment]
}

export const Comment = React.forwardRef<Comment, Readonly<CommentProps>>(
  ({ children, ...props }, forwardRef) => {
    return React.createElement.bind(null, React.Fragment, {
      key: 'comment'
    }).apply(null, toChildren(children))
  }
)
