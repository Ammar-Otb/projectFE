import React from "react";

const CommentModal = ({ open, children }) => {
	if (!open) return null;
	return <div>{children}</div>;
};

export default CommentModal;
