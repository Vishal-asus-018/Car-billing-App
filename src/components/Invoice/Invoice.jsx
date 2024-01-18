// import React from 'react'
import { Container, Grid, Paper, Typography } from "@mui/material"
import './invoice.css';
import logo from './../../assets/logo.jpg';
import { useLocation } from "react-router-dom";

const Invoice = () => {
    const { state } = useLocation()
    const { firstName, lastName, email, contactNumber, billingAddress, selectedCar, carCost, fixedCharges, additionalCharges, dealerDiscount, totalCost } = state;
    const date = new Date();
    const dDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));


    const invoiceGenerator = () => {
        return '' + Math.floor(Math.random() * 1000000);
    }
    return (
        <div className="container" >
            <Container maxWidth='md' className='box'>
                <div className="title">
                    <img src={logo} alt="logo" className="img" />
                    <Typography color={'primary'} variant="h3" className="company">Fasmho Energy System</Typography>
                </div>
                <Container className="fields" maxWidth='lg' style={{ margin: '25px 0', borderRadius: 10 }}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} style={{ padding: 20, display: 'flex' }}>
                                <Grid item container columns={2} style={{ width: '50%', display: 'flex', flexDirection: 'column' }} >
                                    <Typography>Invoice No</Typography>
                                    <Typography>Invoice Date</Typography>
                                    <Typography>Due Date</Typography>
                                </Grid>
                                <Grid item container columns={1} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography>: {'FES' + invoiceGenerator()}</Typography>
                                    <Typography>: {'' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()}</Typography>
                                    <Typography>: {'' + dDate.getDate() + '-' + (dDate.getMonth() + 1) + '-' + dDate.getFullYear()}</Typography>
                                </Grid>
                            </Paper>
                        </Grid>


                    </Grid>
                </Container>

                <Container className="fields" maxWidth='lg' style={{ margin: '0 0', borderRadius: 10 }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: 20, display: 'flex' }}>
                                <Typography></Typography>
                                <Grid item container columns={2} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography>First Name</Typography>
                                    <Typography>Last Name</Typography>
                                    <Typography>Email</Typography>
                                    <Typography>Contact Number</Typography>
                                    <Typography>Address</Typography>
                                </Grid>
                                <Grid item container columns={2} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography> : {firstName}</Typography>
                                    <Typography> : {lastName}</Typography>
                                    <Typography> : {email}</Typography>
                                    <Typography> : {contactNumber}</Typography>
                                    <Typography> : {billingAddress}</Typography>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: 20, display: 'flex' }}>
                                <Grid item container columns={2} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography>Car Model</Typography>
                                    <Typography>Car Cost</Typography>
                                    <Typography>TCS Charges</Typography>
                                    <Typography>RTO Charges</Typography>
                                    <Typography>Insurance</Typography>
                                    <Typography>Additional Accessories</Typography>
                                    <Typography>Dealer Discount</Typography>
                                    <Typography>Total Amount</Typography>
                                </Grid>
                                <Grid item container columns={2} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography> : {selectedCar.name}</Typography>
                                    <Typography> : {carCost}</Typography>
                                    <Typography> : {fixedCharges.tcsCharges ? '11,000' : ''}</Typography>
                                    <Typography> : {fixedCharges.rtoCharges ? '1,13,990' : ''}</Typography>
                                    <Typography> : {additionalCharges.insurance ? '47300' : ''}</Typography>
                                    <Typography> : {additionalCharges.additionalAccessories ? '15000' : ''}</Typography>
                                    <Typography> : {dealerDiscount}</Typography>
                                    <Typography> : {totalCost}</Typography>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}

export default Invoice
