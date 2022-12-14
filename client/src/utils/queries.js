import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query User {
    me {
      _id
      email
      phoneNum
      orders {
        _id
        createdAt
        message
        type
        userId
        totalPrice
        quantity
      }
      packages {
        _id
        carrier
        createdAt
        trackingNum
        userId
        notes
      }
      username
    }
  }
`;
