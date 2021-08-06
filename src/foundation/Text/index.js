import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  titleCapa: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.titleCapa.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.titleCapa.fontWeight};
  `,

  titleCapaXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.titleCapaXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.titleCapaXS.fontWeight};
  `,

  subTitleCapa: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.subTitleCapa.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.subTitleCapa.fontWeight};
  `,

  subTitleCapaXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.subTitleCapaXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.subTitleCapaXS.fontWeight};
  `,

  logoCabecalho: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.logoCabecalho.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.logoCabecalho.fontWeight};
  `,

  logoCabecalhoXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.logoCabecalhoXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.logoCabecalhoXS.fontWeight};
  `,

  itemCabecalho: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.itemCabecalho.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.itemCabecalho.fontWeight};
  `,

  itemCabecalhoXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.itemCabecalhoXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.itemCabecalhoXS.fontWeight};
  `,

  sectionTitle: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.sectionTitle.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.sectionTitle.fontWeight};
  `,

  sectionTitleXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.sectionTitleXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.sectionTitleXS.fontWeight};
  `,

  cardTitle: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.cardTitle.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.cardTitle.fontWeight};
  `,

  cardTitleXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.cardTitleXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.cardTitleXS.fontWeight};
  `,

  cardText: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.cardText.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.cardText.fontWeight};
  `,

  badgeXS: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.badgeXS.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.badgeXS.fontWeight};
  `,

  badge: css`
    font-size: ${({ theme: { theme } }) => theme.typographyVariants.badge.fontSize};
    font-weight: ${({ theme: { theme } }) => theme.typographyVariants.badge.fontWeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  ${propToStyle('textAlign')}
  color: ${(props) => props.color};
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      variant={variant}
      as={tag}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = { tag: 'span', variant: 'paragraph1' };
