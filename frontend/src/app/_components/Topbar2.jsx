import { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiCreditCard } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import Flag from 'react-world-flags';

export default function TopBar() {
  const [selectedCurrency, setSelectedCurrency] = useState('Currency');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = [
    { code: 'EU', label: 'EURO' },
    { code: 'IN', label: 'INR' },
    { code: 'NP', label: 'NPR' },
    { code: 'US', label: 'USD' },
  ];

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency.label);
    setIsOpen(false);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="text-gray-800 shadow-sm text-sm">
      <div className="w-full mx-auto bg-white flex justify-between items-center py-2 px-8 2xl:px-56 text-base border-b border-gray-200">
        
        <div></div>

        <div className="flex items-center space-x-4 md:space-x-6">
          
          <a href="/cart" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="hidden sm:inline">View Cart</span> 
          </a>
          
          {/* Currency Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center bg-white px-2 py-1 rounded-md text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedCurrency}</span>
              <RiArrowDropDownLine className="ml-2 text-xl" />
            </button>

            {isOpen && (
              <div
                className="absolute bg-white text-black w-40 mt-1 rounded-md shadow-lg z-50"
                style={{ top: '100%', left: 0 }}
              >
                {currencies.map((currency) => (
                  <div
                    key={currency.code}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleCurrencySelect(currency)}
                  >
                    <Flag code={currency.code} className="inline-block mr-2 w-6 h-4" />
                    {currency.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
