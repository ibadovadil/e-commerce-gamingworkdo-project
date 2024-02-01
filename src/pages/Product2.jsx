// import React, { useState } from "react";
// import Navigation from "../components/Navigation";
// import { Button, Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import ShopCard from "../components/ShopCard";
// import Accordion from "../../node_modules/@mui/material/Accordion";
// import AccordionSummary from "../../node_modules/@mui/material/AccordionSummary";
// import AccordionDetails from "../../node_modules/@mui/material/AccordionDetails";
// import Typography from "../../node_modules/@mui/material/Typography";
// import ExpandMoreIcon from "../../node_modules/@mui/icons-material/ExpandMore";
// // import { useContext } from "react";
// // import { LangContext } from "../context/LangContext";

// const Products = () => {
//   // const [lang, setLang] = useContext(LangContext);

//   const prState = useSelector((state) => state.pr);
//   const [catProduct, setcatProduct] = useState([]);
//   const [brandproduct, setbrandproduct] = useState([]);
//   const resetFilters = () => {
//     setcatProduct([]);
//     setbrandproduct([]);
//   };

//   const handleClick = (cat) => {
//     const catData = prState.filter((p) => p.type === cat);
//     setcatProduct(catData);
//   };
//   const handleClicktwo = (cattwo) => {
//     const catDatatwo = prState.filter((p) => p.brand === cattwo);
//     setbrandproduct(catDatatwo);
//   };

//   return (
//     <div className="products">
//       <Navigation />
//       <Container className="products">
//         <div>
//           <button
//             className="btn btn-outline-primary"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasWithBackdrop"
//             aria-controls="offcanvasWithBackdrop"
//           >
//             Filter Products
//           </button>
//           <div>
//             <div classname=" btn btn-outline-warning">
//               <div
//                 className="offcanvas offcanvas-start"
//                 tabIndex={-1}
//                 id="offcanvasWithBackdrop"
//                 aria-labelledby="offcanvasWithBackdropLabel"
//               >
//                 <div className="offcanvas-header">
//                   <h5
//                     className="offcanvas-title"
//                     id="offcanvasWithBackdropLabel"
//                   >
//                     Filter Products
//                   </h5>
//                   <Button
//                     className="btn btn-secondary"
//                     type="button"
//                     onClick={resetFilters}
//                   >
//                     Reset Filter
//                   </Button>

//                   <button
//                     type="button"
//                     className="btn-close text-reset"
//                     data-bs-dismiss="offcanvas"
//                     aria-label="Close"
//                   />
//                 </div>
//                 <div className="offcanvas-body">
//                   <div>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel1a-content"
//                         id="panel1a-header"
//                       >
//                         <Typography>Type</Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography>
//                           <ul className="list-group">
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Console");
//                               }}
//                             >
//                               Console
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Chair");
//                               }}
//                             >
//                               Chair
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Game Pc");
//                               }}
//                             >
//                               Game Pc
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Monitor");
//                               }}
//                             >
//                               Monitor
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Headset");
//                               }}
//                             >
//                               Headset
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Card");
//                               }}
//                             >
//                               Card
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Joystick");
//                               }}
//                             >
//                               Joystick
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClick("Keycaps");
//                               }}
//                             >
//                               Keycaps
//                             </button>
//                           </ul>
//                         </Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                     <Accordion>
//                       <AccordionSummary
//                         expandIcon={<ExpandMoreIcon />}
//                         aria-controls="panel2a-content"
//                         id="panel2a-header"
//                       >
//                         <Typography>Brand</Typography>
//                       </AccordionSummary>
//                       <AccordionDetails>
//                         <Typography>
//                           <ul className="list-group">
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Samsung");
//                               }}
//                             >
//                               Samsung
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("XFX");
//                               }}
//                             >
//                               XFX
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Electrobot");
//                               }}
//                             >
//                               Electrobot
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Kepler Brooks");
//                               }}
//                             >
//                               Kepler Brooks
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("HyperX");
//                               }}
//                             >
//                               HyperX
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("KandE");
//                               }}
//                             >
//                               KandE
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Sony PS5");
//                               }}
//                             >
//                               Sony PS5
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("LG");
//                               }}
//                             >
//                               LG
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Lenovo");
//                               }}
//                             >
//                               Lenovo
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Acer");
//                               }}
//                             >
//                               Acer
//                             </button>
//                             <button
//                               className="list-group-item"
//                               onClick={() => {
//                                 handleClicktwo("Vulutre");
//                               }}
//                             >
//                               Vulutre
//                             </button>
//                           </ul>
//                         </Typography>
//                       </AccordionDetails>
//                     </Accordion>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Row className="shopmain">
//             {brandproduct.length === 0
//               ? prState.map((item) => (
//                   <ShopCard
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     price={item.price}
//                     color={item.color}
//                     image={item.image}
//                     availability={item.availability}
//                     type={item.type}
//                     typeaz={item.typeaz}
//                     brand={item.brand}
//                     alldata={item}
//                   />
//                 ))
//               : catProduct.map((item) => (
//                   <ShopCard
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     price={item.price}
//                     color={item.color}
//                     image={item.image}
//                     availability={item.availability}
//                     type={item.type}
//                     typeaz={item.typeaz}
//                     brand={item.brand}
//                     alldata={item}
//                   />
//                 ))}
//             :
//             {brandproduct.map((item) => (
//               <ShopCard
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 color={item.color}
//                 image={item.image}
//                 availability={item.availability}
//                 type={item.type}
//                 typeaz={item.typeaz}
//                 brand={item.brand}
//                 alldata={item}
//               />
//             ))}
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Products;
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShopCard from "../components/ShopCard";
import Accordion from "../../node_modules/@mui/material/Accordion";
import AccordionSummary from "../../node_modules/@mui/material/AccordionSummary";
import AccordionDetails from "../../node_modules/@mui/material/AccordionDetails";
import Typography from "../../node_modules/@mui/material/Typography";
import ExpandMoreIcon from "../../node_modules/@mui/icons-material/ExpandMore";
// import { useContext } from "react";
// import { LangContext } from "../context/LangContext";

const Products = () => {
  // const [lang, setLang] = useContext(LangContext);

  const prState = useSelector((state) => state.pr);
  const [catProduct, setcatProduct] = useState([]);
  const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");

  const resetFilters = () => {
    setcatProduct([]);
  };

  const handleClick = (cat) => {
    const catData = prState.filter((p) => p.type === cat);
    setcatProduct(catData);
    
  };
  const filterProductsByPrice = () => {
    const filteredProducts = prState.filter((item) => {
      const itemPrice = parseFloat(item.price);
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      return (isNaN(min) || itemPrice >= min) && (isNaN(max) || itemPrice <= max);
    });
    setcatProduct(filteredProducts);
  };
  

  return (
    <div className="products">
      <Navigation />
      <Container className="products">
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBackdrop"
            aria-controls="offcanvasWithBackdrop"
          >
            Filter Products
          </button>
          <div>
            <div classname=" btn btn-outline-warning">
              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasWithBackdrop"
                aria-labelledby="offcanvasWithBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBackdropLabel"
                  >
                    Filter Products
                  </h5>
                  <Button
                    className="btn btn-secondary"
                    type="button"
                    onClick={resetFilters}
                  >
                    Reset Filter
                  </Button>

                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Type</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul className="list-group">
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Console");
                              }}
                            >
                              Console
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Chair");
                              }}
                            >
                              Chair
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Game Pc");
                              }}
                            >
                              Game Pc
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Monitor");
                              }}
                            >
                              Monitor
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Headset");
                              }}
                            >
                              Headset
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Card");
                              }}
                            >
                              Card
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Joystick");
                              }}
                            >
                              Joystick
                            </button>
                            <button
                              className="list-group-item"
                              onClick={() => {
                                handleClick("Keycaps");
                              }}
                            >
                              Keycaps
                            </button>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
         
                    <div className="form-group mt-3">
  <label htmlFor="minPrice">Min Price:</label>
  <input
    type="number"
    id="minPrice"
    className="form-control"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
  />
</div>
<div className="form-group mt-3">
  <label htmlFor="maxPrice">Max Price:</label>
  <input
    type="number"
    id="maxPrice"
    className="form-control"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
  />
</div>
<button className="btn btn-primary mt-3" onClick={filterProductsByPrice}>
  Filter by Price
</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Row className="shopmain">
            {catProduct.length === 0
              ? prState.map((item) => (
                  <ShopCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    color={item.color}
                    image={item.image}
                    availability={item.availability}
                    type={item.type}
                    typeaz={item.typeaz}
                    brand={item.brand}
                    alldata={item}
                  />
                ))
              : catProduct.map((item) => (
                  <ShopCard
                  
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    color={item.color}
                    image={item.image}
                    availability={item.availability}
                    type={item.type}
                    typeaz={item.typeaz}
                    brand={item.brand}
                    alldata={item}
                  />
                ))}
          
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Products;
