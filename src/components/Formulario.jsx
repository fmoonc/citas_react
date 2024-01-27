import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  // State para el formulario
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  // useEffect para detectar si hay un paciente seleccionado
  useEffect(() => {
    if (paciente) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Funcion para generar un id
    const generarId = () => {
      return Math.random().toString(36).substr(2) + Date.now().toString(36);
    };

    // Crear el objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        {/* Nombre Mascota */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/* Nombre Propietario */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@ejemplo.com"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Fecha Alta */}
        <div className="mb-5">
          <label
            htmlFor="feachaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="fechaAlta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        {/* Sintomas */}
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas..."
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        {/* Boton */}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 mt-5 rounded-lg text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
