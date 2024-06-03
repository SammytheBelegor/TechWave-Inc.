// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import ContactInfo from './components/ContactInfo';
import NewsFeed from './components/NewsFeed';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProductPage />} />
                        <Route path="/order" element={<OrderForm />} />
                        <Route path="/contact" element={<ContactInfo />} />
                        <Route path="/news" element={<NewsFeed />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
