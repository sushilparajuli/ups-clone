import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

const GET_ORDERS = gql`
  query GETORDERS   {
    getOrders {
      name
      value {
        Address
        City
        Lat
        carrier
        Lng
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;