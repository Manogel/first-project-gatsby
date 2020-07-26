import React from 'react';

import { PageProps, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

interface IPostList {
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
}

const IndexPage: React.FC<PageProps> = () => {
  const { allMarkdownRemark } = useStaticQuery<IPostList>(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  `);

  const postList = allMarkdownRemark.nodes;

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

export default IndexPage;
