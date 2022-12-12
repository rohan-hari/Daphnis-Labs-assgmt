import React from 'react';
import './product-card.css';

export default function ProductCard() {
  return (
    <div className="card">
      <img class="card-img" src="/img-prod.png" />

      <div className="card-title">Favipiravir 400mg (Fabiflu) tablets</div>
      <div className="card-price">
        <span className="total-price">Rs 1,775</span>&nbsp;/&nbsp;
        <span className="payment-method">stripe</span>
      </div>
      <div className="company-details">
        <span className="company-name">Glenmark Pharmaceutical Limited</span>
        <span className="company-location">PARVAT PATIYA, SURAT, GUJRAT</span>
      </div>
      <div className="action">
        <button>
          <i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp; Contact
          Supplier
        </button>
      </div>
    </div>
  );
}
