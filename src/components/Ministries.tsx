import React from 'react';
import { Users, Music, Heart, Baby, BookOpen, Mic } from 'lucide-react';

const ministries = [
  {
    icon: <Music className="w-8 h-8" />,
    name: 'Ministerio de Alabanza',
    description: 'Adoración y música para glorificar a Dios'
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: 'Grupos Pequeños',
    description: 'Comunidad y crecimiento espiritual'
  },
  {
    icon: <Baby className="w-8 h-8" />,
    name: 'Ministerio Infantil',
    description: 'Formación espiritual para niños'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    name: 'Ministerio de Jóvenes',
    description: 'Actividades y mentoreo para jóvenes'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: 'Escuela Bíblica',
    description: 'Estudio profundo de la palabra'
  },
  {
    icon: <Mic className="w-8 h-8" />,
    name: 'Evangelismo',
    description: 'Alcance comunitario y misiones'
  }
];

const Ministries = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Ministerios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  {ministry.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{ministry.name}</h3>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;