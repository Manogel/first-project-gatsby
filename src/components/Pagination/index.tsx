import React from 'react';

import { Link } from 'gatsby';
import * as S from './styles';

interface IPaginationProps {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  numPages: number;
  prevPage: string;
  nextPage: string;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
  const { prevPage, nextPage, numPages, isLast, isFirst, currentPage } = props;

  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>Página anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>Proxima página</Link>}
    </S.PaginationWrapper>
  );
};

export default Pagination;
