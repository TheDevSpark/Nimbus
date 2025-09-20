
"use client";
import { useState } from 'react';

// Icons
const IconEmail = ({ className }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.7a11.054 11.054 0 004.237 4.237l1.313-3.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// LeadCard Component
export default function LeadCard({ lead, isSelected, onSelect }) {
  return (
    <div
      className={`p-3 border rounded-lg cursor-pointer transition-colors ${isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:bg-gray-50'
        }`}
      onClick={() => onSelect(lead)}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm text-gray-900">{lead.name}</h3>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">New</span>
      </div>

      <div className="space-y-1 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <IconEmail className="text-gray-400" />
          <span className="truncate">{lead.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconPhone className="text-gray-400" />
          <span>Last contact: {lead.lastContact}</span>
        </div>
      </div>
    </div>
  );
}