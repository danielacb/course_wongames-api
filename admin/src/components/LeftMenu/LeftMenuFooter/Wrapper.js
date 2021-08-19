import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background: ${theme.main.colors.won.blue};
    bottom: 0;
    .poweredBy {
      width: 100%;
      bottom: 0;
      height: 4rem;
      padding-left: 2rem;
      padding-right: 15px;
      line-height: 3rem;
      background-color: ${theme.main.colors.won.blueLight};
      border-top: 2px solid ${theme.main.colors.won.blue};
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      vertical-align: middle;
    }
  `}
`;

const A = styled.a`
  color: ${({ theme }) => theme.main.colors.won.orange};
  &:hover {
    color: ${({ theme }) => theme.main.colors.won.orange};
    text-decoration: underline;
  }
`;

export default Wrapper;
export { A };
