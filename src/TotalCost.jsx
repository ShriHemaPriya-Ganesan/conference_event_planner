import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

// TotalCost component receives totalCosts and ItemsDisplay as props
const TotalCost = ({ totalCosts, ItemsDisplay }) => {
    const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;

    return (
        <div className="pricing-app">
            <div className="display_box">
                <div className="header">
                    {/* Header section displaying a preheading */}
                    <p className="preheading"><h3>Total cost for the event</h3></p>
                </div>
                <div>
                    {/* Displaying the total cost in a formatted manner */}
                    <h2 id="pre_fee_cost_display" className="price">
                        ${total_amount}
                    </h2>

                    {/* Rendering items by passing the ItemsDisplay component as a prop */}
                    <div className="render_items">
                        <ItemsDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting the TotalCost component for use in other parts of the application
export default TotalCost;
