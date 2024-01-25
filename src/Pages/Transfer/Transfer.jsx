import './Transfer.scss';
import React, { useState } from 'react';

const MoneyTransferPage = () => {
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [AccNum, setAccNum] = useState('');
  const [isTransactionPending, setTransactionPending] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };

  const handleAccNumChange = (event) => {
    setAccNum(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Assuming you would perform some validation before setting the transaction as pending
    setTransactionPending(true);
  };

  return (
    <div>
      <h2 className='trf'>Money Transfer</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <label>
          Account Number
          <input type="number" value={AccNum} onChange={handleAccNumChange} />
        </label>
        <br />
        <label>
          Bank Name:
          <input type="text" value={bankName} onChange={handleBankNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isTransactionPending && <div className='pending'><p className=''>Transaction is pending. Please wait for approval of request. Our customer support will contact you in a moment </p> </div>}
    </div>
  );
};

export default MoneyTransferPage;
