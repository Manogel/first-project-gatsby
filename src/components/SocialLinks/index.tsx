import React from "react"
import Icons from "./icons"
import links from "./content"
import * as S from "./styles"

const SocialLinks: React.FC = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <S.SocialLinksItem key={i}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks
