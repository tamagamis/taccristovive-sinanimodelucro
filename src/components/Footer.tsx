import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TACCRISTO VIVE DE ANTÓN</h3>
            <p className="text-gray-400">Transformando vidas a través del amor de Cristo</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Antón, Coclé, Panamá</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+507 XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@taccristovive.org</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horarios de Servicio</h3>
            <div className="space-y-2 text-gray-400">
              <p>Domingo: 9:00 AM - 11:00 AM</p>
              <p>Miércoles: 7:00 PM - 8:30 PM</p>
              <p>Grupos Pequeños: Varios horarios</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TACCRISTO VIVE DE ANTÓN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;