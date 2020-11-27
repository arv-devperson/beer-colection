import React from 'react';
import { Card } from 'components/beer-card';

interface CardListProps {
  beers: Models.BeerInfo[];
}

export default function CardList({ beers }: CardListProps) {
  return (
    <>
      {beers.map((beer) => (
        <Card
          id={beer.id}
          key={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          first_brewed={beer.first_brewed}
          description={beer.description}
          image_url={beer.image_url}
          brewers_tips={beer.brewers_tips}
        ></Card>
      ))}
    </>
  );
}
