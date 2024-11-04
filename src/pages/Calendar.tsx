import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    date: '2024-03-15',
    title: 'Aniversario de la Iglesia',
    type: 'celebration'
  },
  {
    date: '2024-03-20',
    title: 'Reunión de Líderes',
    type: 'meeting'
  }
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            {format(currentDate, 'MMMM yyyy', { locale: es })}
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4">
          {daysInMonth.map((day, idx) => {
            const dayEvents = events.filter(
              event => isSameDay(new Date(event.date), day)
            );

            return (
              <div
                key={idx}
                className={`min-h-[100px] p-2 border rounded-lg ${
                  isSameMonth(day, currentDate)
                    ? 'bg-white'
                    : 'bg-gray-50 text-gray-400'
                }`}
              >
                <div className="text-right mb-2">{format(day, 'd')}</div>
                {dayEvents.map((event, eventIdx) => (
                  <div
                    key={eventIdx}
                    className={`text-xs p-1 rounded mb-1 ${
                      event.type === 'celebration'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;