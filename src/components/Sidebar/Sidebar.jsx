import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  const category = [
    {
      title: 'Related Category',
      menu: [
        'Paracetamol Tablets',
        'Paracetamol Syrup',
        'Paracetamol Powder',
        'Aceclofenac',
        'Magaladrate Simethicone Oral Suspension',
        'Mefanamic Paracetamol Syrup',
      ],
    },
    {
      title: 'Related Brands',
      menu: [
        'Cipmol Paracetamol',
        'Pandal Paracetamol Tablets',
        'Combiflam',
        'Crocin Tablets',
        'Calpol Paracetamol Tablets',
        'Sumo Tablets',
      ],
    },
    {
      title: 'Business Type',
      menu: ['Wholesaler', 'Manufacturer', 'Retailer', 'Exporter'],
    },
    {
      title: 'Strength',
      menu: ['500mg', '650mg'],
    },
    {
      title: 'Manufacturer',
      menu: ['Intas Pharmaceutical Ltd', 'Alkem Laboratories Ltd'],
    },
    {
      title: 'Prescription/Non prescription',
      menu: ['Intas Pharmaceutical Ltd', 'Alkem Laboratories Ltd'],
    },
  ];

  return (
    <>
      <div className="sidebar-container">
        {category.map((option) => (
          <div className="sidebar">
            <div className="sidebar-title">{option.title}</div>
            {option.menu.map((menu) => (
              <a className="sidebar-menu" href="./">
                {menu}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
