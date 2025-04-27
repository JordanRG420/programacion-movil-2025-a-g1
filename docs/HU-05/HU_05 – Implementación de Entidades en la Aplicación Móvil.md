# HU_05 – Implementación de Entidades en la Aplicación Móvil  
## HU05 – Implementación de Entidades en la Aplicación Móvil de Reservas de Sitios Turísticos  
**(Refinamiento de la HU03)**

---

## Descripción funcional:

**Como desarrollador del sistema**,  
quiero modelar e implementar las entidades clave en la aplicación móvil,  
para que la información gestionada por el personal interno pueda almacenarse, consultarse y mantenerse de forma organizada, eficiente y coherente con el flujo de reservas recibido desde canales externos como WhatsApp, Facebook o llamadas telefónicas.

---

## Refinamiento del funcionamiento:

Esta historia surge como parte del proceso de implementación técnica derivado del refinamiento de la HU01, donde se establece que el sistema será operado únicamente por el personal autorizado (administrador o empleado).

Se requiere implementar las entidades base del dominio del sistema, permitiendo una estructura de datos que respalde el ingreso manual de las reservaciones por parte del personal.

Las entidades deben reflejar los elementos involucrados en el proceso de reservación:

- **Usuario** (empleado o administrador)  
- **Cliente** (datos brindados durante la comunicación externa)  
- **Reservación** (fecha, hora, personas, observaciones)  
- **Sitio Turístico** (que puede ser un hotel, atracción o lugar específico)  
- **Elemento Reservable:**un **servicio** o una **atracción turística**, dependiendo del tipo de sitio turístico relacionado con la reserva.  

Estas entidades deben contar con relaciones bien definidas, atributos claros y campos comunes para auditoría (`createdAt`, `updatedAt`, `state`, etc.).

> ⚠️ No se contemplará ninguna entidad relacionada con códigos QR o vista cliente directa.

---

## Flujo del proceso:

1. El desarrollador analiza el flujo funcional definido en la HU01.  
2. Se identifican y modelan las entidades necesarias para dar soporte a dicho flujo.  
3. Se implementan las clases, relaciones y atributos en la capa lógica de la aplicación móvil.  
4. Se realiza la conexión con la base de datos (local o remota).  
5. Se prueban las operaciones básicas de CRUD sobre las entidades implementadas.  
6. Se documenta la estructura para futuras integraciones y vistas funcionales.

---

## Entradas:

**Datos para la creación de entidades:**

- **Usuario:** nombre, rol, credenciales  
- **Cliente:** nombre completo, contacto, identificación  
- **Reservación:** fecha, hora, número de personas, observaciones  
- **Sitio Turístico:** nombre, ubicación, tipo (hotel, parque, atracción, etc.)  
- **Elemento Reservable (según sitio):**  
  - **Servicio:** tipo, duración, precio  
  - **Atracción Turística:** nombre, tipo, disponibilidad, requisitos

---

## Salidas:

- Entidades funcionales y disponibles en el backend de la aplicación móvil.  
- Soporte completo para operaciones básicas sobre la información (registro, consulta, edición, eliminación).  
- Registro estructurado para visualización y uso interno del personal autorizado.  

---

## Restricciones:

- Las entidades solo estarán disponibles para usuarios con roles autorizados (administrador o empleado).  
- Las entidades no estarán diseñadas para la interacción directa del cliente final.  
- El sistema no incluirá entidades relacionadas con generación o lectura de códigos QR.  
- Se deben cumplir principios de normalización, integridad y escalabilidad.  

---

## Alcance del requerimiento:

Esta HU corresponde al modelo lógico y técnico del sistema que sustenta la gestión de reservaciones descrita en la HU01 y refinada en la HU04.

No contempla desarrollo de interfaces gráficas, sino exclusivamente la definición e implementación de las entidades y sus relaciones.

Estas entidades serán la base para futuras funcionalidades como reportes, filtros, búsquedas o sincronización en tiempo real.

---

## Tasks (Tareas técnicas):

- Analizar el flujo funcional para definir las entidades necesarias.  
- Crear clases o modelos para Usuario, Cliente, Reservación, Sitio Turístico y Elemento Reservable (habitaciones, servicios o atracciones).  
- Establecer relaciones entre entidades (uno a muchos, muchos a uno, etc.).  
- Incluir campos de auditoría y control (`createdAt`, `state`, `deletedBy`, etc.).  
- Implementar validaciones básicas para cada campo.  
- Conectar entidades con el backend o almacenamiento correspondiente.  
- Realizar pruebas de inserción, edición y consulta sobre las entidades.  
- Documentar la estructura de entidades para el equipo de desarrollo.  
- Asegurar la compatibilidad y escalabilidad del modelo de datos.  
- Excluir explícitamente cualquier elemento relacionado con códigos QR o interacción directa del cliente.  

---

## Conclusión

La implementación de entidades en la aplicación móvil garantiza una estructura sólida para la administración eficiente de reservaciones realizadas a través de canales externos.

Siguiendo la lógica establecida en el refinamiento de la HU01, estas entidades permiten al personal interno gestionar datos con orden, integridad y seguridad, evitando complejidades innecesarias como vistas cliente o códigos QR.

Este desarrollo fortalece la base del sistema y facilita futuras funcionalidades operativas o analíticas, manteniendo la experiencia del personal ágil, intuitiva y centrada en el objetivo principal: registrar y organizar de forma efectiva las reservas de sitios turísticos, sean hoteles, servicios o atracciones.

