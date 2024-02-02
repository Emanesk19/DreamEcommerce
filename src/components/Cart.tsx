import "../styles/style.css";
import { Container, Table, Button, Box, Stack, Grid, Card, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ProductTrElement from "../ProductSlider/tableUtility";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/MuiProductCard.css'
import SampleNavBar from "./SampleNavBar";
function CartListPage(props: any) {
  const theme = useTheme();

  const mockProduct = {
    id: 1,
    src: "../img/BlackDress.jpg",
    name: "Mock Product",
    price: 10.99,
    qty: 1,
    maxQuantity: 10,
    description: "hello my friend let subTotShow = input?.parentNode?.parentNode?"
  };

  let cart = props.cart || [];

  const [subTotalPrice, setsubTotalPrice] = useState(0);
  const [tax, setTax] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item?: any) => {
      price += item.qty * item.price;
    });
    setsubTotalPrice(price);
    setTotalPrice(price + tax);
    // if (cart.length === 0) {
    //   setTax(0);
    //   let cartShow = document.querySelector(".cartShow");
    //   let table = document.querySelector("Card") as HTMLElement | null;
    //   if (table !== null) {
    //     table.style.display = "none";
    //   }
    //   if (cartShow != null) {
    //     cartShow.innerHTML += "No Products in cart list";
    //   }
    // }
  }, [cart, totalPrice, setTotalPrice, tax, setTax]);

  return (<>
    <SampleNavBar />
    <Box sx={{ marginTop: 5, marginBottom: 5 }}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9} lg={8}>
            <Typography sx={{
              textAlign: 'left',
              '@media (min-width: 1400px)': {
                marginLeft: '-120px',
              },
            }}>
              <h3
                style={{
                  alignSelf: 'left', marginBottom: '1rem',
                }}>
                Cart List
              </h3>
            </Typography>
            <Stack direction="row" >
              <Box
                sx={{
                  width: '100%',
                  '@media (min-width: 1400px)': {
                    width: '120%',
                    marginLeft: -20,
                  },
                }}
                className="cartShow">
                {/* <Table
                  sx={{ border: '1px solid', borderColor: 'grey.500' }}
                  size="small"
                >
                  <thead>
                    <tr>
                      <th>Product Img</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((product: any, idx: any) => (
                    <Router>
                      <ProductTrElement
                        product={mockProduct}
                        isWish={false}
                        isCart={true}
                      />
                      </Router>
                    ))}
                  </tbody>
                </Table> */}

                <div className="ProductCardsDiv">
                  <Card
                    sx={{ width: 1000 }}
                    key={mockProduct["id"]}
                    className="ProductCard"
                  >
                    <Box sx={{ width: '100%' }}>
                      <Grid container alignItems="center" >
                        <Grid item xs={2}>
                          <Typography variant="body2" color="textSecondary" align="center">
                            Image
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" color="textSecondary" align="center">
                            Product Name
                          </Typography>
                        </Grid>
                        <Grid item xs={3.7}>
                          <Typography variant="body2" color="textSecondary" align="center">
                            Quantity
                          </Typography>
                        </Grid>
                        <Grid item xs={0}>
                          <Typography variant="body2" color="textSecondary" align="center">
                            Price
                          </Typography>
                        </Grid>

                      </Grid>
                    </Box>

                    {cart?.map((product: any, idx: any) => (
                      <Router>
                        <ProductTrElement
                          product={product}
                          isWish={false}
                          isCart={true}
                        />
                      </Router>
                    ))}
                  </Card>
                </div>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={10} md={3} lg={4} sx={{
            display: 'flex', justifyContent: 'flex-end', '@media (min-width: 1400px)': {
              // width: '120%',
              marginTop: 5
            },
          }}>
            <Box
              className="cartSum"
              sx={{
                margin: '30px',
                width: '60%',
                height: '37vh',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'light',
                padding: '1rem',
                marginTop: '1rem',
                '@media (min-width: 1400px)': {
                  // width: '120%',
                  // marginLeft: 20,
                },
              }}
            >
              <h5 style={{ textAlign: 'left', marginBottom: '0rem', paddingBottom: '0.5rem' }}>Cart Price</h5>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h6 style={{ fontWeight: 'normal' }}>Tax :</h6>
                <span>{tax}$</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h6 style={{ fontWeight: 'normal' }}>SubTotal Price :</h6>
                <span>{subTotalPrice}$</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <h6>Total Price :</h6>
                <span>{totalPrice}$</span>
              </div>
              <Button color="secondary" sx={{ mt: 0, width: '100%', bgcolor: "#da3737" }} variant="contained" >
                Check Out
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );

}

// const mapStateToProps = (state) => {
//   return {
//     cart: state.rCart.cart,
//   };
// };

// export default connect(mapStateToProps)(CartListPage);
export default CartListPage;
