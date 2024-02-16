import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { 
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 5, 28),
  },
  { 
    id: 'e2',
    title: 'Toilet Paper',
    amount: 899.32,
    date: new Date(2021, 1, 18),
  },
  { 
    id: 'e3',
    title: 'New Desk',
    amount: 342.78,
    date: new Date(2020, 7, 23),
  },
  { 
    id: 'e4',
    title: 'New TV',
    amount: 289.54,
    date: new Date(2020, 12, 12),
  },    
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return (
        [expense, ...prevExpenses]
      );
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;


