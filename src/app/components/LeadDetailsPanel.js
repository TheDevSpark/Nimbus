

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

export default function LeadDetailsPanel({ lead, onClose }) {
  if (!lead) return null;

  return (
    <div className="w-80 bg-white h-full p-4 border-l border-gray-200 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Lead Details: {lead.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Client Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <IconEmail className="text-gray-400" />
              <span>{lead.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="text-gray-400" />
              <span>{lead.phone}</span>
            </div>
            <div>
              <span className="text-gray-600">Property: 123 Oak St, Anytown</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Communication Log</h3>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded text-xs">
              <div className="font-medium">📞 Call on {lead.lastContact}</div>
              <div className="text-gray-600">Discussed initial property requirements and budget</div>
            </div>
            <div className="bg-gray-50 p-2 rounded text-xs">
              <div className="font-medium">📧 Email on 2024-07-25</div>
              <div className="text-gray-600">Sent property details and pricing information</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Notes</h3>
          <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
            Client is looking for a 3-bedroom, 2-bathroom house in a suburban area.
            Prefers modern amenities and good school district. Budget is flexible up to $300,000.
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700">
          Save Notes
        </button>
      </div>
    </div>
  );
}