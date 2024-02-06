import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import SampleNavBar from './SampleNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../reduxSaga/transactionActions';


const FancyTransactionPage = () => {
 
    const transactions = useSelector((state: any) => state.transactions.transactions);
    const dispatch = useDispatch();
  
    const [showAllTransactions, setShowAllTransactions] = useState(false);
    const [displayedTransactions, setDisplayedTransactions] = useState([]);
  
    useEffect(() => {
      dispatch(fetchTransactions());
    }, [dispatch]);
  
    useEffect(() => {
      const initialTransactions = transactions.slice(0, 6);
      setDisplayedTransactions(initialTransactions);
    }, [transactions]);
  
    const loadMoreTransactions = () => {
      setDisplayedTransactions(transactions);
      setShowAllTransactions(true);
    };
  
    const loadLessTransactions = () => {
      const initialTransactions = transactions.slice(0, 6);
      setDisplayedTransactions(initialTransactions);
      setShowAllTransactions(false);
    };
  return (
    <>
      <SampleNavBar />
      <div
        style={{
          backgroundColor: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box',
            marginTop: '20px',
            overflow: 'hidden',
          }}
        >
          <h3
            style={{
              color: '#da3737',
              marginBottom: '15px',
              textAlign: 'left',
              position: 'sticky',
              top: '0',
              zIndex: '1',
              background: '#fff',
            }}
          >
            Transaction History
          </h3>
          {!showAllTransactions ? (
          <Button variant="contained" color="error" onClick={loadMoreTransactions} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'right' }}>
            Load More
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={loadLessTransactions} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'right' }}>
            Load Less
          </Button>
        )}
          <TableContainer
            component={Paper}
            style={{  overflow: 'auto' }}
          >
            <Table style={{ borderCollapse: 'separate' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Purchaser Company</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedTransactions.map((transaction:any, index:any) => (
                  <TableRow
                    key={transaction.id}
                    style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#fff' }}
                  >
                    <TableCell>
                      <input type="checkbox" style={{ marginRight: '5px' }} />
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.purchaserCompany}</TableCell>
                    <TableCell
                      align="right"
                      style={{ color: transaction.amount < 0 ? '#da3737' : '#00a650' }}
                    >
                      {transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        
        </div>
      </div>
    </>
  );
};

export default FancyTransactionPage;

