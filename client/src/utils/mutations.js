import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const EDIT_USER = gql`
mutation editUser($username: String!, $email: String!, $password: String) {
  editUser (username: $username, email: $email, password: $password){
    email
    username
    password
  }
}
`;

export const ADD_PACKAGE = gql`
mutation addPackage($trackingNum: String!, $carrier: String) {
  addPackage(trackingNum: $trackingNum, carrier: $carrier) {
    _id
    carrier
    createdAt
    trackingNum
    userId
  }
}
`
