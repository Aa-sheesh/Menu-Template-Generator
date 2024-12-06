import React, { useState } from 'react';
import { Template, CardData } from './types';
import { templates } from './data/templates';
import { TemplateCard } from './components/TemplateCard';
import { CardEditor } from './components/CardEditor';
import { CardPreview } from './components/CardPreview';
import { AdminPanel } from './components/AdminPanel';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { Shield } from 'lucide-react';

function MainApp() {
  const { adminState, toggleAdmin } = useAdmin();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [cardData, setCardData] = useState<CardData>({
    id: '',
    templateId: '',
    title: 'Your Special Event',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    location: 'Your Venue',
    message: 'Please join us for a wonderful celebration',
    hostName: 'Your Name',
    createdAt: new Date().toISOString(),
  });

  if (adminState.isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleAdmin}
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              <Shield className="mr-2" size={18} />
              Exit Admin Mode
            </button>
          </div>
          <AdminPanel />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Invitation Card Creator</h1>
          <button
            onClick={toggleAdmin}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            <Shield className="mr-2" size={18} />
            Admin Mode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
              <div className="grid gap-4">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onSelect={setSelectedTemplate}
                    isSelected={selectedTemplate?.id === template.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {selectedTemplate && (
              <>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Customize Your Invitation</h2>
                  <CardEditor cardData={cardData} onChange={setCardData} />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Preview</h2>
                  <CardPreview template={selectedTemplate} cardData={cardData} />
                  <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Download Invitation
                    </button>
                  </div>
                </div>
              </>
            )}

            {!selectedTemplate && (
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600">
                  Please select a template from the left to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <MainApp />
    </AdminProvider>
  );
}

export default App;