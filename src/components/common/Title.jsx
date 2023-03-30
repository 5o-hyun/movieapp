import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import styled, { css } from 'styled-components';

const Title = ({ name, icon, italic, fontSize }) => {
  return (
    <Container italic={italic} fontSize={fontSize}>
      <p className="mainTitle" italic={italic} fontSize={fontSize}>
        {name}
      </p>
      {icon && <MdKeyboardDoubleArrowRight className="rightIcon" />}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
  .mainTitle {
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '2rem')};
    font-weight: 400;
    font-style: italic;
    ${(props) => {
      if (!props.italic) {
        return css`
          font-style: normal;
        `;
      }
    }}
    @media ${({ theme }) => theme.devices.mobile} {
      font-size: ${(props) =>
        props.fontSize ? `${props.fontSize * 0.9}rem` : '1.8rem'};
    }
  }
  .rightIcon {
    width: ${(props) =>
      props.fontSize ? `${props.fontSize * 1.5}rem` : '3rem'};
    height: ${(props) =>
      props.fontSize ? `${props.fontSize * 1.5}rem` : '3rem'};
    cursor: pointer;
    @media ${({ theme }) => theme.devices.mobile} {
      width: ${(props) =>
        props.fontSize ? `${props.fontSize * 1.2}rem` : '2.4rem'};
      height: ${(props) =>
        props.fontSize ? `${props.fontSize * 1.2}rem` : '2.4rem'};
    }
  }
`;

export default Title;
