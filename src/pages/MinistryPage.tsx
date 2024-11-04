import React from 'react';
import { useParams } from 'react-router-dom';
import { ministries } from '../data/ministries';
import { Calendar, Users } from 'lucide-react';

const MinistryPage = () => {
  const { id } = useParams();
  const ministry = ministries.find(m => m.id === id);

  if (!ministry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Ministerio no encontrado</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{ministry.name}</h1>
        <div className="flex items-center space-x-4">
          <Users className="w-6 h-6" />
          <span>Líder: {ministry.leader}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={ministry.leaderPhoto}
            alt={ministry.leader}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Mensaje del Líder</h2>
          <p className="text-gray-600">{ministry.leaderMessage}</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Misión</h2>
            <p className="text-gray-600">{ministry.mission}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Visión</h2>
            <p className="text-gray-600">{ministry.vision}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
        <ul className="list-disc list-inside space-y-2">
          {ministry.objectives.map((objective, index) => (
            <li key={index} className="text-gray-600">{objective}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Actividades y Eventos</h2>
          <Calendar className="w-6 h-6 text-blue-600" />
        </div>
        {ministry.activities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministry.activities.map((activity) => (
              <div key={activity.id} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{activity.date}</p>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No hay actividades programadas actualmente.</p>
        )}
      </div>
    </div>
  );
};

export default MinistryPage;