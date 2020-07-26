import React from 'react';

import * as S from './styles';

interface IRecommendedPostsProps {
  next?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  previous?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

const RecommendedPosts: React.FC<IRecommendedPostsProps> = (props) => {
  const { next, previous } = props;

  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  );
};

export default RecommendedPosts;
