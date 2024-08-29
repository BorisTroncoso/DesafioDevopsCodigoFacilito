import React from 'react';

const Hours = () => {
  const getCurrentHours = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Domingo) - 6 (Sábado)
    let hours;

    switch (dayOfWeek) {
      case 0: // Domingo
      case 6: // Sábado
        hours = '9:00 AM - 8:00 PM';
        break;
      default: // Lunes a Viernes
        hours = '10:00 AM - 4:00 PM';
        break;
    }

    return hours;
  };

  return (
    <div>
      <h3>Horario de hoy:</h3>
      <p>{getCurrentHours()}</p>
    </div>
  );
};

export default Hours;// Placeholder to host a component
