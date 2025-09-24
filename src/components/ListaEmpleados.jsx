export default function ListaEmpleados({ empleados, loading }) {
  if (loading) return <p className="text-slate-500">Cargando...</p>;
  if (empleados.length === 0) return <p className="text-slate-500">No hay empleados.</p>;

  return (
    <ul className="divide-y divide-slate-200">
      {empleados.map((emp) => (
        <li key={emp.id} className="py-3">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <p className="font-medium">{emp.nombre}</p>
              <p className="text-xs text-slate-500">
                DNI: {emp.dni} • {emp.direccion}
              </p>
            </div>
            <p className="text-sm text-slate-700">{emp.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}