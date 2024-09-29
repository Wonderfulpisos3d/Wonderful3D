import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = '¡Hola Wonderful3D! ¿Podrías ayudarme con la elaboración de un presupuesto para mi proyecto, por favor?';
    const phoneNumber = '17869055726'; // Replace with the recipient's phone number

    // Construct the WhatsApp URL with the message and phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick}
    className={`${
        'bg-green-600'
      } px-5 py-2 rounded text-white mb-2 text-lg md:mb-0 md:w-auto`}
    >
      Consulta tu presupuesto
    </button>
  );
};

export default WhatsAppButton;