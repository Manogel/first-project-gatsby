import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link to="/" activeStyle={{ color: 'red' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About Link</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default About;
