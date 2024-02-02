import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import "../styles/MuiProductCard.css";

const MuiProductCard = ( props:any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="ProductCardsDiv">
        {products.map((product) => (
          <Card
            sx={{ maxWidth: 250, maxHeight: 375 }}
            key={product["id"]}
            className="ProductCard"
          >
            {/* ********************************** PRODUCT IMAGE *************************************************** */}
            <CardMedia
              className="ProductCardMedia"
              sx={{ height: 200 }}
              image={`../imgimg/${product["productImage"]}`}
              title="green iguana"
            />
            <CardContent>
              {/* ********************************** PRODUCT NAME *************************************************** */}
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="ProductCardTitle">
                  {product["productName"]}
                </span>
              </Typography>
              {/* ********************************** PRODUCT PRICE *************************************************** */}
              <Typography variant="h6" color="black">
                <p className="ProductCardPrice">
                  {product["price"]}
                  <sup>birr</sup>
                </p>
              </Typography>
            </CardContent>
            <CardActions style={{ marginTop: "-20px" }}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                {/* ********************************** PRODUCT RATING *************************************************** */}
                <Grid item xs={9}>
                  <Box className="ProductCardRatingBox">
                    <p className="ProductCardRatingNumber">
                      <StarIcon className="StarIcon" />
                      <span style={{ fontWeight: "lighter" }}>|</span>{" "}
                      {product["rating"]}
                    </p>
                  </Box>
                </Grid>
                {/* ********************************** PRODUCT CART *************************************************** */}
                <Grid item xs={3}>
                  <IconButton>
                    <ShoppingBasketOutlinedIcon
                      fontSize="large"
                      color="primary"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MuiProductCard;
