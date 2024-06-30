import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        
        if (value > 20000) {
            alert("Budget cannot exceed 20000!");
            return;
        }

        if (value < totalExpenses) {
            alert(`Budget cannot be lower than the total expenses (${currency}${totalExpenses})!`);
            return;
        }

        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;