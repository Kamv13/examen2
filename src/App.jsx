import EmpleadosForm from "./components/EmpleadosForm";
import ListaEmpleados from "./components/ListaEmpleados";
import { useEmpleados } from "./hooks/useEmpleados";

export default function App() {
  const { empleados, loading, addEmpleado } = useEmpleados();

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <h1 className="mb-6 text-3xl font-bold">ExamenReact</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Nuevo empleado</h2>
          <EmpleadosForm onAdd={addEmpleado} />
        </section>
        <section className="rounded-xl border bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">Listado</h2>
          <ListaEmpleados empleados={empleados} loading={loading} />
        </section>
      </div>
    </div>
  );
}
