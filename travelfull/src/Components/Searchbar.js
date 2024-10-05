import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div 
      className="d-flex align-items-center"
      style={{
        maxwidth: '428px',
        minWidth: '350px',
        height: '48px',
        backgroundColor: '#EFF1F0',
        padding: '0 16px',
        border: 'none',
        borderRadius: '34px' //  Áp dụng border-radius lên element cha
      }}
    >
      <div 
        className="d-flex align-items-center justify-content-center me-3" 
        style={{
          width: '32px', 
          height: '32px', 
          borderRadius: '50%',
          backgroundColor: '#FAFBFA'
        }}
      >
         <Search size={24} color="#7A7E7D" />
        
      </div>

      <Form.Control
        type="text" 
        placeholder="Tìm kiếm" 
        className="border-0" 
        style={{ 
          backgroundColor: '#EFF1F0',
          width: 'calc(100% - 48px)',
          borderRadius: '34px' // Thêm border-radius cho Form.Control
      }} 
      />
    </div>
  );
};

export default SearchBar;