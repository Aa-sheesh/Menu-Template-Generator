import React from 'react';
import { Template } from '../types';
import { Download } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
  isSelected: boolean;
}

export function TemplateCard({ template, onSelect, isSelected }: TemplateCardProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
        isSelected ? 'ring-4 ring-blue-500' : 'hover:shadow-xl'
      }`}
      onClick={() => onSelect(template)}
    >
      <img
        src={template.background}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{template.name}</h3>
        <p className="text-gray-600 text-sm">{template.description}</p>
        <div className="flex items-center mt-2 text-gray-500 text-sm">
          <Download size={16} className="mr-1" />
          <span>{template.downloads} downloads</span>
        </div>
      </div>
    </div>
  );
}