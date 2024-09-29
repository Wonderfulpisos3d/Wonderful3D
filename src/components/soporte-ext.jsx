import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SupportFormExt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const MySwal = withReactContent(Swal);

  const [errors, setErrors] = useState({
    email: "",
  });

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validación de correo electrónico
    if (name === "email") {
      const isValidEmail = validateEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "El correo electrónico no es válido.",
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación adicional si es necesario
    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico no es válido.",
      }));
      return;
    }

    try {
      envioCorrecto();
      const response = await fetch(
        "https://us-central1-fir-proyect-7e9ea.cloudfunctions.net/sendSupportEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error al enviar el formulario:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  const envioCorrecto = () => {
    MySwal.fire({
      title: "¡Consulta enviada con éxito!",
      text: "Tu consulta ha sido recibida correctamente. En breve, nuestro equipo de soporte se pondrá en contacto contigo. ¡Gracias!",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/"; //<-- aquí puedes especificar la ruta de inicio
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Formulario de Soporte</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-3 px-6 hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default SupportFormExt;
