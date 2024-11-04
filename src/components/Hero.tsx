import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">TACCRISTO VIVE DE ANTÓN</h1>
        <p className="text-xl mb-8">Transformando vidas a través del amor de Cristo</p>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
            <Calendar className="w-6 h-6" />
            <div className="text-left">
              <p className="font-semibold">Domingo</p>
              <p className="text-sm">9:00 AM - 11:00 AM</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
            <MapPin className="w-6 h-6" />
            <div className="text-left">
              <p className="font-semibold">Ubicación</p>
              <p className="text-sm">Antón, Coclé, Panamá</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
            <Clock className="w-6 h-6" />
            <div className="text-left">
              <p className="font-semibold">Servicios Semanales</p>
              <p className="text-sm">Miércoles 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;