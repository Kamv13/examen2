import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export function useEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmpleados() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error al obtener empleados");
        const data = await res.json();
        setEmpleados(data);
      } catch (err) {
        Swal.fire("Error", "No se pudo cargar el listado", "error");
      } finally {
        setLoading(false);
      }
    }
    fetchEmpleados();
  }, []);


  async function addEmpleado(nuevo) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevo),
      });
      if (!res.ok) throw new Error("Error al crear empleado");
      const creado = await res.json();
      setEmpleados((prev) => [creado, ...prev]);
      Swal.fire("Éxito", "Empleado agregado correctamente", "success");
    } catch (err) {
      Swal.fire("Error", "No se pudo guardar el empleado", "error");
    }
  }

  return { empleados, loading, addEmpleado };
}