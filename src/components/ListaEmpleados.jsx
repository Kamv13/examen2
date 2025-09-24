export default function ListaEmpleados({ empleados, loading }) {
  if (loading) return <p className="text-slate-500">Cargando...</p>;
  if (empleados.length === 0) return <p className="text-slate-500">No hay empleados.</p>;

  return (
    <ul className="space-y-4">
      {empleados.map((emp) => (
        <li
          key={emp.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="font-semibold">Nombre: {emp.nombre}</p>
          <p className="text-sm text-slate-700">DNI: {emp.dni}</p>
          <p className="text-sm text-slate-700">Dirección: {emp.direccion}</p>
          <p className="text-sm text-slate-700">Email: {emp.email}</p>
        </li>
      ))}
    </ul>
  );
}