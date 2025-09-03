// deals/Buttons.tsx
import React from 'react';
import type { ButtonsProps, DealCategory } from '../data/deals-data';
import "../style/deals.css";

const Buttons: React.FC<ButtonsProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: { key: DealCategory; label: string }[] = [
    { key: 'AllDeals', label: 'All Deals' },
    { key: 'FlashSales', label: 'Flash Sales' },
    { key: 'DailyDeals', label: 'Daily Deals' },
    { key: 'WeeklySpecials', label: 'Weekly Specials' },
    { key: 'MegaDeals', label: 'Mega Deals' }
  ];

  return (
    <div className="deal-buttons">
      {categories.map((category) => (
        <button
          key={category.key}
          className={`btn ${category.key.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)}-btn ${
            activeCategory === category.key ? 'active' : ''
          }`}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;