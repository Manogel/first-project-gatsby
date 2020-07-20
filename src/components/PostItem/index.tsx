import React from 'react';

import * as S from './styles';

interface IPostItemProps {
  slug: string;
  category: string;
  date: string;
  timeToRead: string;
  title: string;
  description: string;
  background?: string;
}

const PostItem: React.FC<IPostItemProps> = (props) => {
  const { slug, category, date, timeToRead, title, description } = props;
  const { background } = props;

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} * {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

export default PostItem;
