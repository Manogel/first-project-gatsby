import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

import {
  Container,
  ProfileLink,
  ProfileAuthor,
  ProfileDescription,
  ProfilePosition,
} from './styles';

interface IQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      position: string;
      author: string;
    };
  };
}

const Profile: React.FC = () => {
  const data = useStaticQuery<IQuery>(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          position
          author
        }
      }
    }
  `);

  const { author, position, title } = data.site.siteMetadata;

  return (
    <Container>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>{author}</ProfileDescription>
    </Container>
  );
};

export default Profile;
