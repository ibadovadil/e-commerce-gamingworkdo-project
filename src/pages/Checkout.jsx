// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import SingleCard from "../components/SingleCard";
// import { Col, Container, Row } from "react-bootstrap";

// function Checkout() {
//   const products = useSelector((p) => p);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = "/";
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Container>
//       <h1>aoirchvmersdsddsdsdsdssddsdsdsdsdshg</h1>
//      <Row>
//         {products.slice(0, 15).map((item) => (
//         <Col lg={4}>
//               <SingleCard
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 type={item.type}
//                 brand={item.brand}
//                 availability={item.availability}
//               />
//         </Col>
//           ))}
//      </Row>
//     </Container>
//   );
// }

// export default Checkout;
import React from 'react'

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

export default Checkout
