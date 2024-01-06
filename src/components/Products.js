import React, { useState  , useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {Add} from '../store/cartSlice';
const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        //
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{return res.json()})
        .then(result => setProducts(result) )
    } ,[]);

    const addProductToCart = (product) => {
        // useDispatch(Add(product));
        
        dispatch(Add(product));
    }

  return (
    <>
    <h1>Products Dashboard</h1>
    <div className="row" >
    {products.map((product)=>{
        return (
            <div className="col-md-3" syle={{marginBottom:'10px'}} >
            <Card key={product.id} className="h-100">
                <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:'100px' ,height:'130px'}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price} $
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{background:'white'}} >
      <Button variant="primary" onClick={()=>{addProductToCart(product)}} >Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
        );
    })}
    </div>
    </>
  )
}

export default Products