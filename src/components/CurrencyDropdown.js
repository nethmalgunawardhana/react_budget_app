import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';

const CurrencyDropdown = () => {
    const { currency, setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Currency ({currency})
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCurrencyChange('$')}>$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('£')}>£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('€')}>€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('₹')}>₹ Rupee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrencyDropdown;