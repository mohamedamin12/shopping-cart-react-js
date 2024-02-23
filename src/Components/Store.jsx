import React from 'react';
import { Col, Row } from "react-bootstrap";
import StoreItems from "../Data/StoreItems.json";
import StoreItem from './StoreItem';

const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row lg={3} md={2} xs={1} className='g-3'>
      {StoreItems.map((storeItem) => (
        <Col key={storeItem.id}>
        <StoreItem {...storeItem}/> 
        </Col>
      )) 
      
      }
      </Row>
    </>
  );
}

export default Store;
