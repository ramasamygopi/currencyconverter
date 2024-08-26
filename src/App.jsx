import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Logo from './assets/logo.jfif';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        console.log(res);
        setExchangeRate(res.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <>
      <div className="currencyconverter">
        <div className="box">
          <img src={Logo} alt="" />
        </div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="Amt">Amount</label>
            <input type="text" id="Amt" value={amount} onChange={handleChange} />
          </div>
          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency</label>
            <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">United States Dollar (USD)</option>
<option value="EUR">Euro (EUR)</option>
<option value="JPY">Japanese Yen (JPY)</option>
<option value="GBP">British Pound Sterling (GBP)</option>
<option value="AUD">Australian Dollar (AUD)</option>
<option value="CAD">Canadian Dollar (CAD)</option>
<option value="CHF">Swiss Franc (CHF)</option>
<option value="CNY">Chinese Yuan (CNY)</option>
<option value="INR">Indian Rupee (INR)</option>
<option value="RUB">Russian Ruble (RUB)</option>
<option value="BRL">Brazilian Real (BRL)</option>
<option value="ZAR">South African Rand (ZAR)</option>
<option value="MXN">Mexican Peso (MXN)</option>
<option value="SGD">Singapore Dollar (SGD)</option>
<option value="HKD">Hong Kong Dollar (HKD)</option>
<option value="KRW">South Korean Won (KRW)</option>
<option value="TRY">Turkish Lira (TRY)</option>
<option value="NOK">Norwegian Krone (NOK)</option>
<option value="SEK">Swedish Krona (SEK)</option>
<option value="NZD">New Zealand Dollar (NZD)</option>

            </select>
          </div>
          <div className="input-container">
            <label htmlFor="toCurrency">To Currency</label>
            <select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">United States Dollar (USD)</option>
<option value="EUR">Euro (EUR)</option>
<option value="JPY">Japanese Yen (JPY)</option>
<option value="GBP">British Pound Sterling (GBP)</option>
<option value="AUD">Australian Dollar (AUD)</option>
<option value="CAD">Canadian Dollar (CAD)</option>
<option value="CHF">Swiss Franc (CHF)</option>
<option value="CNY">Chinese Yuan (CNY)</option>
<option value="INR">Indian Rupee (INR)</option>
<option value="RUB">Russian Ruble (RUB)</option>
<option value="BRL">Brazilian Real (BRL)</option>
<option value="ZAR">South African Rand (ZAR)</option>
<option value="MXN">Mexican Peso (MXN)</option>
<option value="SGD">Singapore Dollar (SGD)</option>
<option value="HKD">Hong Kong Dollar (HKD)</option>
<option value="KRW">South Korean Won (KRW)</option>
<option value="TRY">Turkish Lira (TRY)</option>
<option value="NOK">Norwegian Krone (NOK)</option>
<option value="SEK">Swedish Krona (SEK)</option>
<option value="NZD">New Zealand Dollar (NZD)</option>

              {/* Add other currencies here */}
            </select>
          </div>
          <div className="result">
            <p>
              {amount} {fromCurrency} is equal to: {convertedAmount} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
