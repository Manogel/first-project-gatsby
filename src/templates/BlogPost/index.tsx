import React from 'react';
import { graphql } from 'gatsby';
// import * as S from './styles';

interface IBlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const BlogPost: React.FC<IBlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export const query = graphql`
  query FindPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        category
        background
      }
      html
    }
  }
`;

export default BlogPost;
