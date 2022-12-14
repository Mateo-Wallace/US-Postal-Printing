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
    }
    packages {
      _id
      carrier
      createdAt
      trackingNum
      userId
    }
    username
  }
}
`;
