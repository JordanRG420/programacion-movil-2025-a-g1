# HU 13: Implementar descarga automática de PDF en factura

## 🧾 Detalles
 
- **Nombre:** Implementar la descarga automática de un PDF al generar una factura  
- **Prioridad:** Alta  
- **Rol:** Como **usuario administrador o empleado del sistema**  
- **Quiero:** que al generar una factura desde la interfaz, se descargue automáticamente un archivo PDF con los detalles de dicha factura  
- **Para que:** pueda tener un comprobante físico o digital de la transacción realizada sin necesidad de acciones adicionales  

---

## ✅ Criterios de Aceptación

1. Al completar y enviar el formulario de creación de factura, se debe generar automáticamente un archivo PDF.
2. El PDF debe incluir:
   - Encabezado con el nombre del sistema y título "Factura de Turismo".
   - Datos de la factura (ID, fecha, descripción, método y estado de pago).
   - Información de la reservación asociada.
   - Tabla con los detalles de cobro.
   - Sección de total pagado, cambio, y firma.
3. El archivo se debe descargar automáticamente al computador/dispositivo del usuario.
4. El nombre del archivo debe seguir el formato: `factura_{id}.pdf`.
5. Si ocurre un error al generar la factura, no se debe descargar el PDF y se debe mostrar una notificación al usuario.

---

## 🔄 Flujo del Proceso

1. El usuario accede al módulo de generación de facturas.
2. Llena los campos requeridos: descripción, método de pago, estado, valores monetarios y reservación.
3. Al hacer clic en **"Guardar"**:
   - Se valida el formulario.
   - Se realiza una petición para crear la factura (`createFactura`).
   - Al obtener la respuesta positiva, se ejecuta la función `generarPDF`.
   - El archivo PDF se genera con `jsPDF` y se descarga automáticamente.

---

## 📥 Entradas

- Descripción del servicio (`descripcion`)
- Método de pago (`metodoPago`)
- Estado del pago (`estadoPago`)
- Total a pagar (`totalAPagar`)
- Valor pagado (`paga`)
- Cambio devuelto (`cambioDevuelto`)
- Reservación seleccionada (`reservacionId`)

---

## 📤 Salidas

- Archivo PDF descargado con los detalles de la factura.

---

## 🔒 Restricciones

- La función `generarPDF` debe usar correctamente `jsPDF` y `autoTable`.
- El sistema debe manejar errores si falla la creación de la factura o la descarga.
- Solo se descarga el PDF si la creación fue exitosa.

---

## 👥 Tareas por Integrante

### 👤 Integrante 1: Frontend - Formulario y validación
- Diseñar y construir el formulario de creación de factura.
- Implementar la validación de campos obligatorios.
- Configurar el selector para la reservación.
- Conectar el formulario con la función de creación (`createFactura`).

### 👤 Integrante 2: Backend/API - Creación y respuesta
- Asegurar que el endpoint `createFactura` esté funcional y devuelva los datos requeridos.
- Validar la estructura de respuesta esperada por el frontend.
- Manejar errores si la creación de factura falla (por ejemplo, validaciones o fallos de conexión).

### 👤 Integrante 3: Función PDF - Generación con jsPDF
- Implementar la función `generarPDF` con `jsPDF` y `autoTable`.
- Cargar dinámicamente los datos de la factura.
- Asegurar el formato correcto del archivo (estructura, diseño, nombre).

### 👤 Integrante 4: Integración - Conexión y prueba completa
- Integrar la función `generarPDF` con el flujo de creación de factura.
- Probar la descarga automática tras la creación exitosa.
- Manejar errores en caso de fallos y mostrar notificaciones al usuario.
- Validar la experiencia completa desde el formulario hasta el archivo descargado.

---
