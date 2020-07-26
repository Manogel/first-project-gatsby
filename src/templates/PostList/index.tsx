import React from 'react';
import { graphql } from 'gatsby';
// import * as S from './styles';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import PostItem from '../../components/PostItem';

interface IPostListProps {
  data: {
    allMarkdownRemark: {
      nodes: [
        {
          frontmatter: {
            background: string;
            category: string;
            date: string;
            description: string;
            title: string;
          };
          timeToRead: string;
          fields: {
            slug: string;
          };
        },
      ];
    };
  };
}

const PostList: React.FC<IPostListProps> = ({ data }) => {
  const postList = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map((post) => {
        const { background, category, date } = post.frontmatter;
        const { description, title } = post.frontmatter;
        const { timeToRead, fields } = post;

        return (
          <PostItem
            slug={fields.slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
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
      }
    }
  }
`;

export default PostList;
