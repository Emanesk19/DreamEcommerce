import "./style.css";
import { Button, Stack, IconButton, ButtonGroup, Box, CardActions, CardContent, CardMedia, Grid, Typography, Card, Input, useTheme } from "@mui/material";
import * as Icon from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/MuiProductCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

// import {
//   addToCart,
//   adjustQuantity,
//   deleteFromCart,
//   LoadCurrentItem,
// } from "../../redux/reducers";

function ProductTrElement(props: any) {
  const theme = useTheme();


  let addToCart = props.addToCart;
  let adjustQuantity = props.adjustQuantity;
  let deleteFromCart = props.deleteFromCart;
  let deleteFromWish = props.deleteFromWish;
  const LoadCurrentItem = props.LoadCurrentItem;

  const [inputQty, setinputQty] = useState(props.product.qty);
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    const input = document.querySelector("input");
    const subTotalll = inputQty * props.product.price;
    setsubTotal(subTotal + subTotalll);
    let subTotShow = input?.parentNode?.parentNode?.children[4];
    if (subTotShow != undefined) subTotShow.innerHTML = `${subTotalll}`;
  }, [inputQty, setsubTotal, props.product.price]);

  const onChangeQuantity = (event: any) => {
    event.preventDefault();
    let btn = event.currentTarget;
    setinputQty(btn.value);
    adjustQuantity(props.product.id, btn.value);
    if (btn.value === btn.max) {
      alert("This is the last quantity for this product");
    }
    const subTotall = inputQty * props.product.price;
    setsubTotal(subTotal + subTotall);
    let subTotShow = btn.parentNode.parentNode.children[4];
    subTotShow.innerHTML = `${subTotall}`;
  };

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container alignItems="center" spacing={2} justifyContent="space-between">
          <Grid item xs={2} sm={2}>
            <CardMedia
              className="ProductCardMedia"
              sx={{ minHeight: { xs: 40, sm: 75 }, maxHeight: { xs: 50, sm: 75 }, width: { xs: 30, sm: 100 } }}
              image={props.product.src}
              title="green iguana"
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "14px", sm: "inherit" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="ProductCardTitle"
              >{props.product.name}</span>
              <span
                className="ProductCardDescription"
                style={{
                  display: "block",
                  marginTop: 0,
                  fontSize: "12px",
                  color: "lightgray",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  [theme.breakpoints.down('sm')]: {
                    
                  },
                }}
              >
                {props.product.description}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Input
                type="number"
                id="qty"
                name="qty"
                inputProps={{
                  min: "1",
                  max: props.product.maxQuantity,
                  step: "1",
                  sx: { width: { xs: "50px", sm: "50px" } },
                }}
                size="small"
                value={inputQty}
                onChange={onChangeQuantity}
                sx={{
                  width: { xs: "50px", sm: "50px" },
                  fontSize: { xs: "14px", sm: "inherit" },
                  textAlign: 'center'
                }} />
            </div>
          </Grid>
          <Grid item xs={1} sm={2}>
            <Typography variant="h6" color="black" sx={{ fontSize: { xs: "14px", sm: "inherit" } }}>
              <p className="ProductCardPrice">
                {props.product.price}
                <sup>birr</sup>
              </p>
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            <CardActions sx={{ justifyContent: 'center' }}>
              <IconButton>
                <DeleteIcon fontSize="small" sx={{ color: "#da3737" }} />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStatetoProps = (state: any) => {
  return {
    currentItem: state.rCart.currentItem,
  };
};

// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     addToCart: (e:any, product:any, id:any) => dispatch(addToCart(e, product, id)),
//     adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
//     deleteFromCart: (e, id) => dispatch(deleteFromCart(e, id)),
//     LoadCurrentItem: (product) => dispatch(LoadCurrentItem(product)),
//   };
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(ProductTrElement);
export default ProductTrElement;
