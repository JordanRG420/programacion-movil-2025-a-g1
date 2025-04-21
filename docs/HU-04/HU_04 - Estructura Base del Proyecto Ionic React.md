# **HU_04 - Refinamiento HU01**

**HU04 – Gestión de Reservaciones por parte del Administrador o Empleado**

---

## Descripción funcional:

Como **administrador o empleado**,  
quiero **registrar una reservación en la plataforma**,  
para que **pueda gestionar solicitudes de clientes que se comunican por redes sociales o llamadas telefónicas**.

---

## Refinamiento del funcionamiento:

- La plataforma contará únicamente con una **interfaz automatizada** para uso exclusivo del **administrador o empleado**.
- Los **clientes no interactúan directamente con la plataforma**, sino que contactan al negocio a través de medios externos como **WhatsApp, Facebook o llamadas telefónicas**.
- El **administrador o empleado será el encargado de ingresar manualmente** las reservaciones en la plataforma según los datos brindados por los clientes.
- **No se incluirá el registro ni generación de códigos QR**, ya que esta funcionalidad no es requerida en el alcance actual del proyecto.

---

## Flujo del proceso:

1. Cliente se comunica mediante **WhatsApp, Facebook o llamada**.  
2. El **administrador o empleado accede a la plataforma**.  
3. En la interfaz, selecciona la opción de **crear una nueva reservación**.  
4. Ingresa los datos proporcionados por el cliente: **nombre, fecha, hora, cantidad de personas, etc.**  
5. Guarda la reservación.  
6. La **reservación queda registrada** en el sistema para su **posterior visualización y gestión**.

---

## Entradas:

- Datos proporcionados por el cliente:  
  - Nombre completo
  - Número de identificación
  - Teléfono  
  - Fecha  
  - Hora  
  - Número de personas  
  - Observaciones adicionales

---

## Salidas:

- Confirmación de **reserva registrada en el sistema**.  
- **Registro visible para seguimiento interno** por parte del personal autorizado.

---

## Restricciones:

- Solo usuarios autenticados con **rol de administrador o empleado** pueden acceder al sistema.  
- El sistema **no será accesible por parte de los clientes directamente**.  
- Se **excluye el uso y visualización de códigos QR** para este flujo de funcionamiento.

---

## Alcance del requerimiento:

- La plataforma será usada únicamente por el **personal interno del negocio** (administrador o empleado).
- **No se contempla una vista cliente ni registro autónomo de reservas**.
- El flujo de reservación será realizado a partir de **contactos externos (redes o llamadas)**.
- Toda funcionalidad relacionada con **códigos QR queda descartada**.
- El sistema deberá ser **seguro, rápido y sencillo de usar** por el personal autorizado.

---

## Tasks (Tareas técnicas):

1. Diseñar **interfaz de gestión de reservaciones** exclusiva para administrador/empleado.  
2. Implementar **formulario de registro de reservas** con campos necesarios: cliente, contacto, fecha, hora, número de personas, observaciones.  
3. Crear **validaciones de datos** (fecha/hora futura, campos obligatorios).  
4. Desarrollar función de **almacenamiento y persistencia de reservas** en base de datos.  
5. Habilitar **visualización, edición y cancelación de reservas**.  
6. Implementar **autenticación y control de acceso** para los roles autorizados.  
7. **Eliminar cualquier módulo o función asociada a códigos QR**.  
8. Realizar **pruebas de funcionalidad y usabilidad** de la interfaz.  
9. Documentar el **flujo del sistema para soporte y capacitación interna**.  
10. **Optimizar la experiencia de usuario** para facilitar el trabajo del personal durante el ingreso de datos.

---

## Conclusión

La Historia de Usuario HU01 establece una solución efectiva y centrada en el uso interno del sistema, permitiendo al personal autorizado (administrador o empleado) registrar de forma ágil y segura las reservaciones solicitadas por los clientes a través de canales externos como WhatsApp, Facebook o llamadas telefónicas. Este enfoque optimiza el proceso de gestión, mejora la atención al cliente y simplifica el flujo de trabajo, evitando funcionalidades innecesarias como la generación de códigos QR. La implementación de esta historia contribuirá a una administración más organizada y eficiente de las reservaciones, asegurando una experiencia satisfactoria tanto para el cliente como para el personal que opera la plataforma.
