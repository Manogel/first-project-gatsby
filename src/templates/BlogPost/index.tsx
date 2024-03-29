import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import * as S from '../../components/Post/styles';
import RecommendedPosts from '../../components/RecommendedPosts';
import Comments from '../../components/Comments';

interface IBlogPostProps {
  data: {
    markdownRemark: {
      fields: {
        slug: string;
      };
      frontmatter: {
        background: string;
        category: string;
        date: string;
        description: string;
        title: string;
      };
      timeToRead: string;
      html: string;
    };
  };
  pageContext: {
    nextPost?: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    previousPost?: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPost: React.FC<IBlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments title={post.frontmatter.title} url={post.fields.slug} />
    </Layout>
  );
};

export const query = graphql`
  query FindPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        background
        category
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
      }
      timeToRead
      fields {
        slug
      }
      html
    }
  }
`;

export default BlogPost;
