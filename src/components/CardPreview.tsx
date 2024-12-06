import React from 'react';
import { CardData, Template } from '../types';

interface CardPreviewProps {
  template: Template;
  cardData: CardData;
}

export function CardPreview({ template, cardData }: CardPreviewProps) {
  return (
    <div className={`relative w-full ${
      template.layout === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
    } rounded-lg overflow-hidden shadow-lg`}>
      <img
        src={template.background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-3xl font-serif mb-4">{cardData.title}</h2>
        <p className="text-lg mb-2">
          {new Date(cardData.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="mb-4">{cardData.time}</p>
        <p className="text-lg mb-6">{cardData.location}</p>
        <p className="italic mb-6">{cardData.message}</p>
        <p className="text-lg font-semibold">Hosted by {cardData.hostName}</p>
      </div>
    </div>
  );
}