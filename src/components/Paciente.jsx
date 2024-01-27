const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminar = () => {
    const respuesta = confirm("¿Estás seguro de eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="mb-3 ml-3 mr-3 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">
          {paciente.nombre ?? "sin especificar"}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">
          {paciente.propietario ?? "sin especificar"}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">
          {paciente.email ?? "sin especificar"}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case">
          {paciente.fechaAlta ?? "sin especificar"}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {paciente.sintomas ?? "sin especificar"}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setPaciente(paciente)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
