import { FormatDate } from '../../utils/FormatDate';
import React from 'react';
const Comment = ({ comment }) => {
    const { text, author, date } = comment;

    return (
        <p>
            {text}
            <br />
            {author} - {FormatDate(date)}
        </p>
    );
};

export default Comment;