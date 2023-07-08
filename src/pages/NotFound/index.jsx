import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container style={{backgroundColor:"tomato"}}>
        <Row>
            <Col md={12} className='text-center'>
                <h1 className='text-center text-white'>404</h1>
                <p className='text-center text-white'>Página no encontrada, viejo borracho</p>
                <img src="../../../public/1.png" alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default NotFound
