import React, { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Celebración del Aniversario de la Iglesia',
    date: '2024-03-15',
    content: 'Únete a nosotros para celebrar otro año de bendiciones...',
    author: 'Pastor Principal',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '2',
    title: 'Retiro de Jóvenes 2024',
    date: '2024-04-01',
    content: 'Un tiempo especial de renovación espiritual para nuestra juventud...',
    author: 'Ministerio de Jóvenes',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar publicaciones..."
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>{format(new Date(post.date), 'dd MMMM yyyy', { locale: es })}</span>
                <span>{post.author}</span>
              </div>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                Leer más →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;