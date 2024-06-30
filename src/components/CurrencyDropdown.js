import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';

const CurrencyDropdown = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const currencies = [
        { symbol: '$', name: 'Dollar' },
        { symbol: '£', name: 'Pound' },
        { symbol: '€', name: 'Euro' },
        { symbol: '₹', name: 'Rupee' }
    ];

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency.symbol);
    };

    const getCurrentCurrencyName = () => {
        const currentCurrency = currencies.find(c => c.symbol === currency);
        return currentCurrency ? currentCurrency.name : '';
    };

    return (
        <Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: 'lightgreen' }} id="dropdown-basic">
                Currency ({currency} {getCurrentCurrencyName()})
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: 'lightgreen' }}>
                {currencies.map((curr) => (
                    <Dropdown.Item 
                        key={curr.symbol} 
                        onClick={() => handleCurrencyChange(curr)}
                    >
                        {curr.symbol} {curr.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrencyDropdown;