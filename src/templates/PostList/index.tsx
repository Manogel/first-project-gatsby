import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import PostItem from '../../components/PostItem';
import Pagination from '../../components/Pagination';

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
  pageContext: {
    currentPage: number;
    numPages: number;
  };
}

const PostList: React.FC<IPostListProps> = (props) => {
  const { data, pageContext } = props;

  const postList = data.allMarkdownRemark.nodes;

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
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
