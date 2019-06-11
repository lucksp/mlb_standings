import styled from "styled-components";

const StyledHome = styled.div`
  .ReactTable {
    .rt-thead {
      .rt-th {
        &.-cursor-pointer {
          &.-sort-asc {
            box-shadow: inset 0 3px 0 0 #0f4fa3;
          }
          &.-sort-desc {
            box-shadow: inset 0 -3px 0 0 #0f4fa3;
          }
        }
      }
    }
    .column-header-group {
      background-color: #041e42;
      color: #fafafa;
    }
    .data-cell {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export default StyledHome;
