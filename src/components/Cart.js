import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Delete } from '../store/cartSlice';
const Cart = () => {
    
    const dispatch = useDispatch();  
 const productCart = useSelector((state)=>{
        return state.cart;
    });
    const DeleteProduct = (product)=>{
            dispatch(Delete(product));;
    }

    return (
        <>
        <h1>Cart</h1>
        <div className="row" >
    {productCart.map((product)=>{
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
      <Button variant="danger"  onClick={()=>{DeleteProduct(product)}} >Remove Item</Button>
      </Card.Footer>
    </Card>
    </div>
        );
    })}
    </div>
        
        </>
        
      );
}


export default Cart