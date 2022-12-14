import React from "react";
import { CURRENT_USER } from "../../utils/queries";
import { useQuery } from '@apollo/client';

function InnerDashboard() {
    const { loading, data } = useQuery(CURRENT_USER)

    const userData = data?.me || {};
    
    if (loading) {
        return(
          <h2>LOADING...</h2>
        )
      }

    return(
        <h1>Hello {userData.username}</h1>
    )
}

export default InnerDashboard;