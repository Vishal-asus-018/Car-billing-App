import React from 'react'
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';


export default function CarForm() {
  const carModels = [
    { name: 'Model A', cost: 50000 },
    { name: 'Model B', cost: 60000 },
    // Add more car models as needed
  ];

  const [selectedCar, setSelectedCar] = useState(carModels[0]);
  const [insurance, setInsurance] = useState(false);
  const [additionalAccessories, setAdditionalAccessories] = useState(false);
  const [dealerDiscount, setDealerDiscount] = useState(0);
  const [error, setError] = useState('');

  const calculateTotalCost = () => {
    let totalCost = selectedCar.cost;

    if (insurance) {
      totalCost += 5000; // Assuming insurance cost
    }

    if (additionalAccessories) {
      totalCost += 2000; // Assuming additional accessories cost
    }

    const maxDiscount = 30000;
    if (dealerDiscount > maxDiscount) {
      setError(`Maximum discount should not exceed ${maxDiscount}. Only ${maxDiscount} will be applied.`);
      totalCost -= maxDiscount;
    } else if ((dealerDiscount > 0) && (!insurance && !additionalAccessories)) {
      setError('Any one of the additional features has to be added');
    } else {
      totalCost -= dealerDiscount;
      setError('');
    }

    return totalCost;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const totalCost = calculateTotalCost();
    // Handle form submission or display the total cost as needed
    console.log('Total Cost:', totalCost);
  };
  return (
     <form onSubmit={handleFormSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="car-model-label">Car Model</InputLabel>
        <Select
          labelId="car-model-label"
          id="car-model-select"
          value={selectedCar.name}
          onChange={(e) => setSelectedCar(carModels.find(model => model.name === e.target.value))}
        >
          {carModels.map(model => (
            <MenuItem key={model.name} value={model.name}>{model.name} - ₹{model.cost}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography>Insurance:</Typography>
        <Checkbox checked={insurance} onChange={() => setInsurance(!insurance)} />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Typography>Additional Accessories:</Typography>
        <Checkbox checked={additionalAccessories} onChange={() => setAdditionalAccessories(!additionalAccessories)} />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Dealer Discount"
          type="number"
          value={dealerDiscount}
          onChange={(e) => setDealerDiscount(Number(e.target.value))}
        />
      </FormControl>

      {error && <Typography variant="body2" color="error" gutterBottom>{error}</Typography>}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  )
}
