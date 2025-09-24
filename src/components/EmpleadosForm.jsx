import { useState } from "react";

export default function EmpleadosForm({ onAdd }) {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  function validacion(datos) {
    const errs = {};
    if (!datos.nombre.trim()) errs.nombre = "Nombre requerido";
    if (!datos.dni.trim()) errs.dni = "DNI requerido";
    if (!datos.direccion.trim()) errs.direccion = "Dirección requerida";
    else if (!datos.email.trim()) errs.email = "Email requerido";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validacion(form); 
    setErrors(v);
    if (Object.keys(v).length === 0) {
      onAdd(form);
      setForm({ nombre: "", dni: "", direccion: "", email: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["nombre", "dni", "direccion", "email"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize">{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
          />
          {errors[field] && (
            <p className="text-xs text-red-600">{errors[field]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
      >
        Guardar
      </button>
    </form>
  );
}