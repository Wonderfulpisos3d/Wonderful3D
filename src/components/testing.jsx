import React, { useState, useEffect } from 'react';

const Testing = () => {
  const [contarInscriptos, setContarInscriptos] = useState({});
  
  async function fetchData(url) {
    const limit = 50; // Cantidad de registros a traer por página
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Error:', response.status);
      return [];
    }

    const data = await response.json();
    const formattedData = data.result.map((lead) => {
      const fullName = `${lead.NAME} ${lead.LAST_NAME}`;
      const email = lead.EMAIL && lead.EMAIL[0] ? lead.EMAIL[0].VALUE : 'NO TIENE MAIL';
      const phone = lead.PHONE && lead.PHONE[0] ? lead.PHONE[0].VALUE : 'NO TIENE TELÉFONO';

      return {
        name: fullName,
        email,
        phone,
      };
    });

    return formattedData;
  }

  useEffect(() => {
    async function getTotal() {
      const totalUrl = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=SEP-OCT 2023&FILTER[SOURCE_DESCRIPTION]=Seattle 16/09/23&start=0&rows=1`;

      try {
        const response = await fetch(totalUrl);

        if (!response.ok) {
          console.error('Error:', response.status);
          return;
        }

        const data = await response.json();

        if (data.total) {
          const totalPages = Math.ceil(data.total / limit); // Calcular el total de páginas
          const formattedData = [];

          for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
            const offset = (currentPage - 1) * limit; // Calcular el offset para la página actual
            const pageUrl = `https://b24-06uo8u.bitrix24.es/rest/1/9o76oq8dlgeoyqyb/crm.lead.list.json?FILTER[UF_CRM_1689614846]=SEP-OCT 2023&FILTER[SOURCE_DESCRIPTION]=Seattle 16/09/23&SELECT[]=name&SELECT[]=last_name&SELECT[]=EMAIL&SELECT[]=PHONE&start=${offset}&rows=${limit}`;

            const pageData = await fetchData(pageUrl);
            formattedData.push(...pageData);
          }

          setContarInscriptos(formattedData);
          console.log(formattedData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    const limit = 50; // Cantidad de registros a traer por página

    // Llama a getTotal una vez cuando se monta el componente
    getTotal().catch((error) => {
      console.error('Error en la función getTotal:', error);
    });

    // Configura un intervalo para ejecutar getTotal nuevamente cada 15 minutos
    const getTotalInterval = setInterval(() => {
      getTotal().catch((error) => {
        console.error('Error en la función getTotal:', error);
      });
    }, 15 * 60 * 1000); // Ejecuta después de 15 minutos (15 * 60 * 1000 milisegundos)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(getTotalInterval);
  }, []); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      {/* Renderizar los datos aquí */}
    </div>
  );
};

export default Testing;