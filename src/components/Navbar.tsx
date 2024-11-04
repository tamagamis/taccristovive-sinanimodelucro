import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Users, BookOpen, Calendar, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: 'Inicio',
      icon: <Home className="w-5 h-5" />,
      path: '/'
    },
    {
      name: 'Iglesia',
      icon: <Users className="w-5 h-5" />,
      path: '/church',
      dropdown: [
        { name: 'Información', items: ['Misión', 'Visión', 'Compromiso Social', 'Descripción de Cargos'] },
        { name: 'Organización', items: ['Estructura Organizacional', 'Mapa Conceptual', 'Gestión Administrativa', 'Gestión Ministerial'] },
        { name: 'Blog', path: '/blog' },
        { name: 'Calendario', path: '/calendar' }
      ]
    },
    {
      name: 'Ministerios',
      icon: <Heart className="w-5 h-5" />,
      path: '/ministries',
      dropdown: [
        { name: 'Ministerio Infantil', path: '/ministry/infantil' },
        { name: 'Ministerio NewG', path: '/ministry/newg' },
        { name: 'Ministerio de Fradeva', path: '/ministry/fradeva' },
        { name: 'Ministerio de Damas', path: '/ministry/damas' },
        { name: 'Ministerio de Jóvenes', path: '/ministry/jovenes' }
      ]
    },
    {
      name: 'Servicios',
      icon: <BookOpen className="w-5 h-5" />,
      path: '/services',
      dropdown: ['Mensajes', 'Servicios Dominicales', 'Servicio Semanal', 'Herramientas']
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
              <img 
                src="https://lh6.googleusercontent.com/cFO2o3Bx7Qu1JcmF8JjuHvHqPqp5RhcZ--nrAqnUygItg-2G-E8COYFC4r1yZYnfLQ5Zh-mNJpUnm1BR6h3YUI4=w16383"
                alt="TACCRISTO VIVE"
                className="h-10 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-blue-600">TACCRISTO VIVE</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : handleNavigation(item.path)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {Array.isArray(item.dropdown) ? 
                      item.dropdown.map((subItem) => (
                        typeof subItem === 'string' ? (
                          <button
                            key={subItem}
                            onClick={() => handleNavigation(`${item.path}/${subItem.toLowerCase()}`)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {subItem}
                          </button>
                        ) : (
                          <div key={subItem.name}>
                            {subItem.path ? (
                              <button
                                onClick={() => handleNavigation(subItem.path)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                              >
                                {subItem.name}
                              </button>
                            ) : (
                              <>
                                <span className="block px-4 py-2 text-sm text-gray-700 font-semibold">
                                  {subItem.name}
                                </span>
                                {subItem.items && (
                                  <div className="pl-4">
                                    {subItem.items.map((nestedItem) => (
                                      <button
                                        key={nestedItem}
                                        onClick={() => handleNavigation(`${item.path}/${nestedItem.toLowerCase()}`)}
                                        className="block w-full text-left px-4 py-1 text-xs text-gray-600 hover:bg-blue-50"
                                      >
                                        {nestedItem}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )
                      )) : null}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => {
                    if (item.dropdown) {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    } else {
                      handleNavigation(item.path);
                    }
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-auto" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-8 space-y-1">
                    {Array.isArray(item.dropdown) &&
                      item.dropdown.map((subItem) => (
                        typeof subItem === 'string' ? (
                          <button
                            key={subItem}
                            onClick={() => handleNavigation(`${item.path}/${subItem.toLowerCase()}`)}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {subItem}
                          </button>
                        ) : (
                          <div key={subItem.name}>
                            {subItem.path ? (
                              <button
                                onClick={() => handleNavigation(subItem.path)}
                                className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                              >
                                {subItem.name}
                              </button>
                            ) : (
                              <>
                                <span className="block px-3 py-2 text-sm font-semibold text-gray-600">
                                  {subItem.name}
                                </span>
                                {subItem.items && (
                                  <div className="pl-4">
                                    {subItem.items.map((nestedItem) => (
                                      <button
                                        key={nestedItem}
                                        onClick={() => handleNavigation(`${item.path}/${nestedItem.toLowerCase()}`)}
                                        className="block w-full text-left px-3 py-1 text-xs text-gray-500 hover:text-blue-600"
                                      >
                                        {nestedItem}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;