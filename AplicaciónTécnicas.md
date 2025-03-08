# 📌 HU_04 - Aplicación de Técnicas en SCRUM para la HU_03  

## 📌 Título  
🗂 Implementación de Entidades en la Aplicación Móvil de Reservas de Hoteles y Sitios Turísticos  

---

## 📌 Descripción de la HU (Resumen Breve)  
Como **equipo de desarrollo**, necesitamos **diseñar e implementar la estructura de datos** de la aplicación móvil de reservas de hoteles y sitios turísticos, asegurando que las entidades reflejen correctamente los **procesos del sistema**, optimizando la administración de **usuarios, reservas, pagos y auditorías**.  

Esto garantizará que la base de datos sea **escalable, eficiente y coherente** con las necesidades del proyecto.  

---

## 📌 Criterios de Aceptación  
✅ Se implementan las **entidades necesarias** para la gestión de usuarios, reservas y pagos.  
✅ Se crean **relaciones entre entidades** para garantizar la consistencia de la base de datos.  
✅ Se diseñan **procedimientos almacenados** para optimizar consultas y operaciones frecuentes.  
✅ Se analiza el **modelo de datos** para determinar si se requieren entidades adicionales.  
✅ Se valida la **estructura de la base de datos**, asegurando escalabilidad y rendimiento.  

---

## 📌 Aplicación de Técnicas en SCRUM  

### **1️⃣ Técnicas utilizadas en la planificación**  
✔ **Planning Poker** 🃏  
   - Se estimó la complejidad de la tarea asignando **8 puntos de historia**, debido a la necesidad de **modelar datos, implementar relaciones y optimizar consultas**.  

✔ **Definición de Criterios de Aceptación con Gherkin** 📋  
   - Se usó la técnica **Given-When-Then** para definir reglas de negocio en la base de datos, asegurando que los procedimientos almacenados cumplan con los requerimientos.  

✔ **User Story Mapping** 🗺️  
   - Se crearon tarjetas en **Trello** para cada sub-tarea (`Modelado de Entidades`, `Implementación de Procedimientos`, `Integración con API`), facilitando la priorización en el sprint.  

---

### **2️⃣ Técnicas aplicadas durante el desarrollo**  
✔ **Pair Programming** 👥  
   - Se utilizó para la implementación de los **procedimientos almacenados**, asegurando calidad en el código y mejor estructura en las consultas SQL.  

✔ **TDD (Test-Driven Development)** 🧪  
   - Se implementaron **pruebas unitarias** para validar que las **inserciones y relaciones en la base de datos funcionan correctamente antes de desplegar la API**.  

✔ **Integración Continua (CI/CD)** 🔄  
   - Se configuró un **pipeline** para que cada cambio en la base de datos **se valide automáticamente antes de ser implementado en el servidor**.  

---

### **3️⃣ Técnicas en la revisión del sprint**  
✔ **Sprint Review con Demos Interactivas** 🎥  
   - Se presentó una **demo del modelo de datos en un entorno de prueba**, mostrando cómo se crean, actualizan y eliminan registros en la base de datos.  

✔ **Feedback con Stakeholders** 💬  
   - Se recopiló **retroalimentación** de los responsables del negocio para validar si las **entidades cubrían los requerimientos de reserva y pagos**.  

---

### **4️⃣ Técnicas en la retrospectiva**  
✔ **Start, Stop, Continue** 🛠️  
   - 🔹 **Start:** Documentar los procedimientos almacenados con ejemplos de uso.  
   - 🔹 **Stop:** Modificar el modelo de datos sin definir reglas de negocio previamente.  
   - 🔹 **Continue:** Implementar **TDD en el backend**, ya que permitió detectar errores en las relaciones antes del despliegue.  

✔ **Matriz de Aprendizaje** 📊  
   - **Mejoramos:** La optimización de consultas en la base de datos.  
   - **Aprendimos:** Que algunas relaciones de entidad necesitaban índices adicionales.  
   - **Seguimos fallando:** En la comunicación entre equipo de datos y frontend, lo que retrasó algunas pruebas.  

---

## 📌 Registro en Trello  
📌 **Lista:** `"Sprint Actual"` (o `"Base de Datos y API"`)  
📌 **Tarjeta:** `"Implementación de Entidades y Procedimientos"`  
📌 **Checklist con tareas asignadas**  
📌 **Etiquetas:** *Base de Datos, Backend, API, Arquitectura*  
📌 **Fecha estimada de cierre alineada con el sprint*  

---

## 📌 Conclusión  
✅ Esta documentación detalla cómo **se aplicaron técnicas ágiles en la implementación de la base de datos**.  
✅ Puedes subirla a **GitHub/Trello** para **seguimiento del equipo**.  

---

🚀 **Este archivo `.md` ya está listo para ser documentado en tu repositorio o tablero de Trello!** 😃  
¿Necesitas ajustes o pasamos a la siguiente tarea? 🚀  
