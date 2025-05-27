### 🧾 Historia de Usuario: HU_14 – Agregar atributo "código postal" para clientes

**Nombre:**
HU_14 – Registro y visualización del código postal en clientes

**Como** usuario del sistema de gestión de sitios turísticos,
**quiero** poder ingresar y visualizar el código postal al registrar o consultar un cliente,
**para** contar con información más completa y precisa sobre su ubicación.

---

### ✅ Criterios de Aceptación:

  1. ✅ Al registrar un nuevo cliente, el formulario debe permitir ingresar el campo **código postal**.
  2. ✅ El código postal debe ser **obligatorio** si la ubicación del cliente requiere este dato (puede depender del país).
  3. ✅ En la vista de detalle o listado de clientes, debe mostrarse el **código postal**.
  4. ✅ El campo debe ser persistido correctamente en la base de datos.
  5. ✅ El código postal debe ser visible en el resumen de información del cliente.

---

### 🛠️ Notas Técnicas:

* Agregar columna `codigo_postal` en la tabla `clientes`.

* Actualizar:

  * Formulario de registro de cliente (frontend y backend).
  * Vista de detalles/listado de clientes.
  * Validaciones (ej. que no sea vacío si el país lo requiere).
  * API o lógica que procese la creación/actualización de clientes (si aplica).

---

Perfecto, aquí tienes las **4 tareas (tasks)** divididas para Trello, una por integrante, con texto breve y claro:

---

### ✅ Tareas para HU_14 – Código Postal

#### 🔹 Task 1: Base de Datos + Backend (Integrante 1)

* Agregar columna `codigo_postal` en tabla `clientes`
* Modificar modelo y controlador para guardar/leer `codigo_postal`
* Validar campo según país
* Probar registro y consulta desde backend

---

#### 🔹 Task 2: Frontend (Integrante 2)

* Agregar campo "Código Postal" en formulario de cliente
* Mostrar campo en listado y detalles
* Validar que no esté vacío (si aplica)
* Probar flujo completo desde frontend

---

#### 🔹 Task 3: Diseño en Figma (Integrante 3)

* Actualizar formulario de cliente con "Código Postal"
* Agregar campo en mockup de detalles/listado
* Compartir enlaces en Trello

---

#### 🔹 Task 4: Gestión en Trello (Integrante 4)

* Crear tarjeta HU\_14 con estas 4 tareas
* Asignar tareas a cada miembro
* Dar seguimiento y mover tarjeta de columnas (Por hacer → En progreso → Hecho)

---