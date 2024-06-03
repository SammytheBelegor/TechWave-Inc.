import React from 'react';
import './ProductPage.css';
import image1 from '../img/image1.jpg';

const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="content-container">
                <div className="product-header">
                    <div className="product-image-container">
                        <img src={image1} alt="TechWave XR" />
                    </div>
                    <div className="product-title">
                        <h1>Welcome to TechWave XR</h1>
                        <p>The TechWave XR is the latest in virtual reality technology, offering an immersive experience like no other.</p>
                    </div>
                </div>
                <div className="product-details">
                    <div className="features">
                        <h2>Features</h2>
                        <ul>
                            <li>Immersive 360° view</li>
                            <li>High-resolution display</li>
                            <li>Advanced motion tracking</li>
                            <li>Ergonomic design</li>
                            <li>Wireless connectivity</li>
                        </ul>
                    </div>
                    <div className="specifications">
                        <h2>Specifications</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Display</td>
                                    <td>4K OLED</td>
                                </tr>
                                <tr>
                                    <td>Field of View</td>
                                    <td>110 degrees</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>500 grams</td>
                                </tr>
                                <tr>
                                    <td>Battery Life</td>
                                    <td>6 hours</td>
                                </tr>
                                <tr>
                                    <td>Connectivity</td>
                                    <td>Bluetooth, Wi-Fi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
