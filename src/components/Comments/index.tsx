import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import * as S from './styles';

interface ICommentsProps {
  url: string;
  title: string;
}

const Comments: React.FC<ICommentsProps> = ({ url, title }) => {
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="maanogel"
        identifier={url}
        title={title}
        url="http://www.example.com/example-thread"
      />
    </S.CommentsWrapper>
  );
};

export default Comments;
