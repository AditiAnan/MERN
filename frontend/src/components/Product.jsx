import { Card, CardBody, CardTitle } from 'react-bootstrap'

import React from 'react'

const Products = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
     
      <CardBody>
      <a href={`/product/${product._id}`}>    
      <CardTitle as="div">
<strong>{product.name}</strong>

      </CardTitle>
      </a>  

      <Card.Text as= "h3">
            ${product.price}
      </Card.Text>
      </CardBody>
    </Card>
  )
}

export default Products
