import React from 'react';
import { CardProps } from './beer-card.props';

import './beer-card.styles.scss';

export default function BeerCard({ name, tagline, description, image_url, first_brewed, brewers_tips }: CardProps) {
  return (
    <main id="main-content">
      <div className="card">
        <img className="card-image" src={image_url} alt={name} />
        <div className="card-body">
          <p>
            <i className="fas fa-wine-bottle"></i>
            {name}
          </p>
          <h3>{tagline}</h3>
          <p className="card-main-text">{description}</p>
          <div className="card-footer">
            <img src={image_url} alt="Signature" />
            <div>
              <p className="card-signature">{brewers_tips}</p>
              <p className="card-motto">{first_brewed}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
