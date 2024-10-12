import React from 'react';
import { Range } from 'react-range';
import '../Style/Filter.css';
import '../fonts.css';

const GenericFilter = ({ filtersConfig, onFilterChange }) => {
  const handleInputChange = (key, value) => {
    onFilterChange(key, value);
  };

  return (
    <div className="filters-container">
      {filtersConfig.map((filter, index) => {
        switch (filter.type) {
          case 'range':
            return (
              <div key={index} className="price-range-slider">
                <h6>{filter.label}</h6>
                <Range
                  step={filter.step}
                  min={filter.min}
                  max={filter.max}
                  values={filter.values}
                  onChange={(values) => handleInputChange(filter.key, values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="slider-track"
                      style={{ ...props.style, height: '6px', width: '100%', backgroundColor: '#ccc' }}
                    >
                      <div
                        className="slider-range"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: `${(filter.values[0] / filter.max) * 100}%`,
                          width: `${((filter.values[1] - filter.values[0]) / filter.max) * 100}%`,
                          height: '6px',
                          backgroundColor: '#000',
                        }}
                      />
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="slider-thumb"
                      style={{ ...props.style, height: '18px', width: '18px', backgroundColor: '#000', cursor: 'pointer' }}
                    />
                  )}
                />
                <div className="price-range-labels">
                  <span>${filter.values[0]} - ${filter.values[1]}</span>
                </div>
              </div>
            );

          case 'checkbox':
            return (
              <div key={index} className="card-filter">
                <div className="card-header">
                  <h6>{filter.label}</h6>
                </div>
                <div className="card-body">
                  {filter.options.map((option, idx) => (
                    <div key={idx} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={option.value}
                        checked={filter.selected.includes(option.value)}
                        onChange={() => handleInputChange(filter.key, option.value)}
                      />
                      <label className="form-check-label" htmlFor={option.value}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default GenericFilter;
