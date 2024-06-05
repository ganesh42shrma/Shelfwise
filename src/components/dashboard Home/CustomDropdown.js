// src/components/CustomDropdown.js
import React, { useState } from 'react';
import './CustomDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const CustomDropdown = ({ pageSize, handlePageSizeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = [10, 50, 100];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="custom-select-container">
      <div className="selected-option" onClick={toggleDropdown}>
        Show  {pageSize} <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map(size => (
            <li
              key={size}
              className={`option-item ${hoveredOption === size ? 'hovered' : ''}`}
              onClick={() => {
                handlePageSizeChange(size);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHoveredOption(size)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              Show {size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
