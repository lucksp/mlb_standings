import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
    #logo {
      width: 100px;
      margin-right: 8px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 18px;
    .link {
      margin-left: 8px;
      cursor: pointer;
      box-sizing: border-box;
      border-bottom: 2px solid #0f4fa3;

      &:hover {
        border-bottom: 2px solid #bf0d3e;
      }
    }
  }
`;

export default Header;
