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
mutation editUser($username: String!, $email: String!, $password: String, $phoneNum: String) {
  editUser (username: $username, email: $email, password: $password, phoneNum: $phoneNum){
    email
    username
    password
    phoneNum
  }
}
`;

export const DELETE_USER = gql`
mutation deleteUser{
  deleteUser{
    _id
    username
    email
  }
}
`;

export const ADD_PACKAGE = gql`
mutation addPackage($trackingNum: String!, $carrier: String!, $notes: String) {
  addPackage(trackingNum: $trackingNum, carrier: $carrier, notes: $notes) {
    _id
    carrier
    createdAt
    trackingNum
    userId
    notes
  }
}
`;

export const EDIT_PACKAGE = gql`
mutation editPackage($packageId: ID!, $trackingNum: String, $carrier: String, $notes: String) {
  editPackage(packageId: $packageId, trackingNum: $trackingNum, carrier: $carrier, notes: $notes) {
    _id
  }
}`;

export const DELETE_PACKAGE = gql`
mutation deletePackage($packageId: ID!) {
  deletePackage(packageId: $packageId) {
    _id
  }
}`;
