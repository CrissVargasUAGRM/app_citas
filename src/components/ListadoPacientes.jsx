import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className="md-1/2 lg:w-3/5 md:hs h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center font-bold">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center font-bold">
            Comienza agregandolos {""}
            <span className="text-indigo-600 font-bold">y se mostraran aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
