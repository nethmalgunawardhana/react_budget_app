import React, { useContext } from 'react';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'; // Import BiPlusCircle
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

   

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button 
                    onClick={event => increaseAllocation(props.name)}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        marginRight: '5px'
                    }}
                >
                    <BiPlusCircle 
                        size='1.5em'
                        style={{ color: '#90EE90' }}
                    />
                </button>
            </td>
            <td>
                <button 
                    onClick={event => decreaseAllocation(props.name)}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        marginRight: '5px'
                    }}
                >
                    <BiMinusCircle 
                        size='1.5em'
                        style={{ color: 'red' }}
                    />
                </button>
            </td>
          
        </tr>
    );
};

export default ExpenseItem;
