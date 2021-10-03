import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'
import { clearProductDetails } from '../actions/productActions'


const ProductScreen = ({history,match}) => {

const [qty,setQty]  = useState(1)
const dispatch = useDispatch()

const productDetails = useSelector(state => state.productDetails)
const {loading, error , product} = productDetails

    useEffect(()=>{
     dispatch(listProductDetails(match.params.id))

     return () => {
        dispatch(clearProductDetails());
      }
      
    },[dispatch, match])

   const addToCardHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
   }

    return (
    <>
        <Link className='btn btn-primary my-3' to='/'>
            Go back
        </Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

                    <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} fluid className='rounded'/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="secondary">
                            <ListGroup.Item>
                                <h3> {product.name}</h3>

                            </ListGroup.Item>

                            <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}  />

                            </ListGroup.Item>


                            <ListGroup.Item>
                                Price: <b> {product.price}  </b>DKK
                            </ListGroup.Item>
                        

                            <ListGroup.Item>
                                Description: 
                                {product.description}
                            </ListGroup.Item>
                        
                        
                            
                        </ListGroup>

                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                
                            <ListGroup.Item>
                                
                                <Row>
                                    <Col> DKK </Col>
                            
                                    <Col>
                                    <strong>
                                        {product.price} 
                                    </strong>
                                    
                                    </Col>
                                
                                </Row>

                            </ListGroup.Item>

                                <ListGroup.Item>
                                
                                <Row>
                                    <Col> Status :   </Col>
                                            
                                        <Col>
                                        {product.countInStock >0 
                                        ? 'In Stock'
                                        : 'NOT'
                                        }
                                    </Col>
                                </Row>

                                </ListGroup.Item>


                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>QTY</Col>
                                            <Col>
                                            <Form.Control 
                                            as='select' 
                                            value={qty} 
                                            onChange={(e) => setQty(e.target.value)}
                                            >

                                                {[...Array(product.countInStock).keys()].map((x)=>(
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}

                                            </Form.Control>
                                            </Col>
                                        </Row>


                                    </ListGroup.Item>
                                )}
                                <ListGroup.Item >
                                    <Row>
                                        <Button onClick={addToCardHandler} className='btn-block' type='button' size="lg" disabled={
                                        product.countInStock === 0   
                                        } >
                                            Add to Cart
                                        </Button>
                                        </Row>
                                    </ListGroup.Item>
                        

                            </ListGroup>
                        
                        </Card>
                    </Col>
                    </Row>
        )}
        

    </>
    )
}

export default ProductScreen
