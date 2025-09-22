"use client";
import { useState } from 'react';

import LeadCard from "../components/Lead-management-comp/LeadCard.js";
import LeadDetailsPanel from "../components/Lead-management-comp/LeadDetailsPanel.js";

const categories = [
  { key: "newLeads", label: "New Leads", tag: "hot" },
  { key: "contacted", label: "Contacted", tag: "warm" },
  { key: "qualified", label: "Qualified", tag: "qualified" },
  { key: "proposal", label: "Proposal Sent", tag: "proposal" },
];

const leadsData = {
  newLeads: [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '+1 (555) 123-456', lastContact: '2024-07-24' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 (555) 987-654', lastContact: '2024-07-21' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '+1 (555) 456-789', lastContact: '2024-07-26', }
  ],
  contacted: [
    { id: 4, name: 'Alice Smith', email: 'alice@contacted.com', phone: '+1 (555) 111-222', lastContact: '2024-07-28' },
    { id: 5, name: 'Bob Johnson', email: 'bob@contacted.com', phone: '+1 (555) 333-444', lastContact: '2024-07-27' },
    { id: 6, name: 'Charlie Brown', email: 'charlie@contacted.com', phone: '+1 (555) 555-666', lastContact: '2024-07-25' }
  ],
  qualified: [
    { id: 7, name: 'Alice Smith', email: 'alice@qualified.com', phone: '+1 (555) 777-888', lastContact: '2024-07-29' },
    { id: 8, name: 'Bob Johnson', email: 'bob@qualified.com', phone: '+1 (555) 999-000', lastContact: '2024-07-30' },
    { id: 9, name: 'Charlie Brown', email: 'charlie@qualified.com', phone: '+1 (555) 123-987', lastContact: '2024-07-31' }
  ],
  proposal: [
    { id: 7, name: 'Alice Smith', email: 'alice@qualified.com', phone: '+1 (555) 777-888', lastContact: '2024-07-29' },
    { id: 8, name: 'Bob Johnson', email: 'bob@qualified.com', phone: '+1 (555) 999-000', lastContact: '2024-07-30' },
    { id: 9, name: 'Charlie Brown', email: 'charlie@qualified.com', phone: '+1 (555) 123-987', lastContact: '2024-07-31' }
  ]
};

export default function LeadManagementPage() {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadSelect = (lead) => {
    setSelectedLead(lead);
  };

  const handleCloseDetails = () => {
    setSelectedLead(null);
  };

  return (
    <div className="min-h-screen ">
      <div className="mx-auto max-w-full">
        <div className="relative overflow-x-auto flex">
          <div className="flex-1 ">
            <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] lg:h-[calc(100vh-120px)]">


              {/* New Leads Column */}
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">New Leads</h2>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {leadsData.newLeads.length}
                    </span>
                  </div>
                </div>
                <div className="flex-1 overflow-x-auto p-4 space-y-3">
                  {leadsData.newLeads.map(lead => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      isSelected={selectedLead?.id === lead.id}
                      onSelect={handleLeadSelect}
                      tag="hot"
                    />
                  ))}
                </div>
              </div>

              {/* Contacted Column */}
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Contacted</h2>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {leadsData.contacted.length}
                    </span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {leadsData.contacted.map(lead => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      isSelected={selectedLead?.id === lead.id}
                      onSelect={handleLeadSelect}
                      tag="warm"
                    />
                  ))}
                </div>
              </div>

              {/* Qualified Column */}
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Qualified</h2>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {leadsData.qualified.length}
                    </span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {leadsData.qualified.map(lead => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      isSelected={selectedLead?.id === lead.id}
                      onSelect={handleLeadSelect}
                      tag="qualified"
                    />
                  ))}
                </div>
              </div>
              {/* Proposal Sent Column */}
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Proposal Sent</h2>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {leadsData.proposal.length}
                    </span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {leadsData.proposal.map(lead => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      isSelected={selectedLead?.id === lead.id}
                      onSelect={handleLeadSelect}
                      tag="proposal"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>



          {/* Lead Details Panel */}
          {selectedLead && (
            <div className="  absolute top-0 right-0 h-full w-80 shadow-lg z-50 md:block hidden">
              <div className="h-full flex flex-col bg-white">

                <div className="flex-shrink-0">
                  <LeadDetailsPanel
                    lead={selectedLead}
                    onClose={handleCloseDetails}
                    isScrollable={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Detail Panel - Full screen overlay */}
          {selectedLead && (
            <div className="fixed inset-0  bg-white z-50 md:hidden">
              <LeadDetailsPanel
                lead={selectedLead}
                onClose={handleCloseDetails}
                isScrollable={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



