import Paciente from "./Paciente";
import { useEffect } from "react";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll">
        {pacientes.length > 0 ? (
          pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))
        ) : (
          <p className="text-center">No hay pacientes</p>
        )}
      </div>
    </div>
  );
};

export default ListadoPacientes;
