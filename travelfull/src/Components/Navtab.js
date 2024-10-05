import React, { useState } from "react";
import { BedDouble, Plane, ScrollText, Soup } from "lucide-react";
import '../Style/Style.css'; // Import file Style.css

const NavTab = () => {
  const [activeTab, setActiveTab] = useState("hotels");

  const tabs = [
    { label: "Khách sạn", icon: <BedDouble size={20} />, value: "hotels" },
    { label: "Chuyến bay", icon: <Plane size={20} />, value: "flights" },
    { label: "Khu vui chơi", icon: <ScrollText size={20} />, value: "suggestions" },
    { label: "Nhà hàng", icon: <Soup size={20} />, value: "restaurants" },
  ];

  const handleTabClick = (event, value) => {
    event.preventDefault();
    setActiveTab(value);
  };

  return (
    <div style={{ minWidth: '710px', whiteSpace: 'nowrap' }}>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.value} className={`nav-item ${activeTab === tab.value ? "active-tab" : ""}`}>
            <a
              href="/"
              className="nav-link d-flex align-items-center rounded-pill px-3 py-2"
              onClick={(event) => handleTabClick(event, tab.value)}
              style={{
                backgroundColor: activeTab === tab.value ? '#101133' : '#F7F8F8',
                color: activeTab === tab.value ? '#fff' : '#474A49',
                border: activeTab === tab.value ? '1px solid #101133' : '1px solid transparent'
              }}
            >
              <div
                className="icon-circle d-flex align-items-center justify-content-center me-2"
                style={{
                  backgroundColor: activeTab === tab.value ? '#fff' : '#F7F8F8',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                }}
              >
                <span style={{ color: activeTab === tab.value ? '#101133' : '#474A49' }}>
                  {tab.icon}
                </span>
              </div>
              <span>{tab.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTab;
