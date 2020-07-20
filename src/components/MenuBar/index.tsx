import React from 'react';
import { Home, Grid } from 'styled-icons/boxicons-solid';
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
  Bulb as Light,
} from 'styled-icons/boxicons-regular';

import * as S from './styles';

const MenuBar: React.FC = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink to="/search" title="Voltar para Home">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema">
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização">
          <Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
