import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, ThemeProvider, Typography, createTheme, styled } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Login from './components/Login';
import User from './User';
import YourComponent from './components/Muiaccordion';
import MuiFilterPannel from './components/MuiFilterPanel';
import CartListPage from './components/Cart';
import MuiProductCard from './components/MuiProductCard';
import { Provider } from 'react-redux';
import store from './redux/store';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#da3737", // Replace with your desired primary color
    },
  },
});
function App() {
  const mockProduct = [
    {
      id: 1,
      src: "../img/BlackDress.jpg",
      name: "Mock Product",
      price: 10.99,
      qty: 1,
      maxQuantity: 10,
      description: "hello my friend let subTotShow = input?.parentNode?.parentNode?"
    },
    {
      id: 1,
      src: "./img/WhiteDress.jpg",
      name: "Mock Product",
      price: 10.99,
      qty: 1,
      maxQuantity: 10,
      description: "hello my friend let subTotShow = input?.parentNode?.parentNode?"
    }
  ];
  return (
    <ThemeProvider theme={theme}>
    <div>
      {/* <CartListPage cart={mockProduct} /> */}
      {/* <MuiFilterPannel/> */}
      {/* <User/> */}
      <Provider store={store}>
      <Login/>
      </Provider>
      {/* <MuiProductCard/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
