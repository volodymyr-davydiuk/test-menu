import {gql} from '@apollo/client';

export const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      data {
        id
        attributes {
          title
          url
        }
      }
    }
  }
`;