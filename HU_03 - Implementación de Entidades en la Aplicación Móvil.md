# **HU_03 - Implementación de Entidades en la Aplicación Móvil de Reservas de Hoteles y Sitios Turísticos**

## **Descripción:**
Como equipo de desarrollo, necesitamos diseñar e implementar la estructura de datos de la aplicación móvil de reservas de hoteles y sitios turísticos, asegurando que las entidades reflejen correctamente los procesos del sistema. Esto garantizará una administración eficiente de usuarios, reservas, pagos y auditorías, permitiendo una experiencia fluida para los turistas y anfitriones.  

Para ello, se debe modelar una **base de datos estructurada** con las entidades necesarias, asegurando la **integridad de los datos** y la **escalabilidad del sistema**. Además, se evaluará la posibilidad de incluir nuevas entidades según los requerimientos del proyecto.  

---

## **Criterios de Aceptación:**
✔ Se implementan las **entidades necesarias** para la gestión de usuarios, reservas y pagos.  
✔ Se crean **relaciones entre entidades** para garantizar la consistencia de la base de datos.  
✔ Se diseñan **procedimientos almacenados** para optimizar consultas y operaciones frecuentes.  
✔ Se analiza el **modelo de datos** para determinar si se requieren entidades adicionales.  
✔ Se valida la **estructura de la base de datos**, asegurando escalabilidad y rendimiento.  

---

## **📌 Entidades Definidas Inicialmente**
| **Entidad**           | **Descripción** |
|-----------------------|--------------------------------------------------|
| **Usuario**          | Almacena los datos de los usuarios (turistas y anfitriones). |
| **Sitio_Turistico**  | Representa los hoteles o lugares turísticos disponibles en la plataforma. |
| **QR_Code**         | Código QR generado para identificar cada sitio turístico. |
| **Experiencia**     | Define las actividades o paquetes turísticos dentro de un sitio. |
| **Reserva**        | Permite gestionar la asignación de experiencias a los usuarios. |
| **Pago**          | Administra los métodos de pago y estados de transacciones. |
| **Auditoria_Usuarios** | Registra las acciones realizadas por los usuarios en la plataforma. |
| **Auditoria_Reservas** | Guarda el historial de cambios en las reservas. |

---

## **📌 Task (Distribución de tareas por integrante - Fase Técnica de Entidades)**

### **1️⃣ Modelado y Creación de Entidades en la Base de Datos (Integrante 1)**
- Definir y estructurar las **tablas de la base de datos en SQL**.  
- Implementar **claves primarias y foráneas** para establecer relaciones.  
- Verificar la **integridad referencial** entre las entidades.  

### **2️⃣ Implementación de Procedimientos Almacenados (Integrante 2)**
- Desarrollar **procedimientos para la gestión de usuarios** (registro, autenticación).  
- Crear **procedimientos para la consulta y administración de reservas**.  
- Implementar **lógica de pagos** con actualización automática de estados.  

### **3️⃣ Integración de la Base de Datos con la Aplicación Móvil (Integrante 3)**
- Diseñar e implementar los **endpoints para la API REST**.  
- Asegurar que la aplicación móvil pueda interactuar con la base de datos de forma eficiente.  
- Optimizar consultas para mejorar la **experiencia del usuario**.  

### **4️⃣ Análisis de Datos y Evaluación de Entidades Adicionales (Integrante 4)**
- Revisar si la **estructura actual de entidades** cubre todos los requerimientos.  
- Evaluar la necesidad de incluir nuevas entidades, como **Valoraciones, Historial de Uso o Reportes de Usuarios**.  
- Proponer **mejoras en la base de datos** para escalabilidad y rendimiento.  

---

## **📌 Validaciones Finales**
📌 **Lista en Trello:** "Sprint Actual" (o "Base de Datos y API")  
📌 **Tarjeta:** "Implementación de Entidades y Procedimientos"  
📌 **Checklist con tareas asignadas**  
📌 **Etiquetas:** *Base de Datos, Backend, API, Arquitectura*  
📌 **Fecha estimada de cierre alineada con el sprint**  

---

## **📌 Posibles Entidades Adicionales a Evaluar**
💡 **Valoración**: Permite a los usuarios calificar sitios turísticos y experiencias.  
💡 **Historial de Uso**: Registra las reservas y pagos de cada usuario.  
💡 **Reportes de Usuarios**: Funcionalidad para denunciar problemas con reservas o experiencias.  
