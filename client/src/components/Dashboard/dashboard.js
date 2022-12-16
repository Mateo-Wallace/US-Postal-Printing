import React from "react";
import { CURRENT_USER } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import Carousel from 'react-material-ui-carousel'
import Item from './carouselitem'
import carousel from '../../utils/carousel.json'




function InnerDashboard() {
    const { loading, data } = useQuery(CURRENT_USER)

    const userData = data?.me || {};
    
    if (loading) {
        return(
          <h2>LOADING...</h2>
        )
      }


    return (
      <> 
        <h2 style={{textAlign: 'center'}}>Hello</h2>
        <h1 style={{textAlign: 'center', textDecoration: 'underline', marginBottom: '10%', fontFamily: 'Gill Sans, sans-serif'}}>{userData.username}!</h1>
        <Carousel>
            {
                carousel.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
        </>
    )
}

export default InnerDashboard;