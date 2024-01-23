import { Card, CardBody, CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const Products = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
     
      <CardBody>
      <Link to={`/product/${product._id}`}>    
      <CardTitle as="div">
<strong>{product.name}</strong>

      </CardTitle>
      </Link>  

      <Card.Text as= "h3">
            ${product.price}
      </Card.Text>
      </CardBody>
    </Card>
  )
}

export default Products
