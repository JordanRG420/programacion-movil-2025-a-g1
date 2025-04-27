# *HU-07: Configuración Inicial del Backend con Spring Boot*

## *Descripción:*

Esta historia de usuario tiene como objetivo establecer la estructura base del backend para el proyecto Explora Neiva utilizando Spring Boot. Se configurará el proyecto inicial con los paquetes básicos y endpoints mock para permitir el desarrollo paralelo del frontend en Ionic, sin implementar aún la lógica de autenticación o conexión a base de datos (que se abordarán en HUs posteriores).

---

## *Criterios de Aceptación:*

✔ Proyecto Spring Boot inicializado con dependencias básicas  
✔ Estructura de paquetes organizada (controller, service, model)  
✔ Endpoints mock para /api/auth/login y /api/auth/register  
✔ Configuración CORS básica para desarrollo con Ionic  
✔ Documentación básica de API en README.md

## *Task (Distribución por Integrante)*

### *⿡ Configuración Inicial del Proyecto (Integrante 1)*

- [ ] Crear proyecto con Spring Initializr
- [ ] Configurar estructura de paquetes
- [ ] Añadir dependencias básicas
- [ ] Configurar Git con .gitignore adecuado

### *⿢ Implementación de Endpoints Mock (Integrante 2)*

- [ ] Crear AuthController con endpoints mock
- [ ] Implementar modelo User básico
- [ ] Configurar respuestas JSON estándar

### *⿣ Configuración CORS y Documentación (Integrante 3)*

- [ ] Implementar CorsConfig para desarrollo frontend
- [ ] Documentar API en README.md
- [ ] Configurar aplicación.properties básico

## *Definición de Terminado*

1. *Código*:

   - Proyecto se compila sin errores
   - Endpoints responden con estructura JSON consistente
   - Configuración CORS funciona con frontend Ionic

2. *Pruebas*:

   - Requests GET/POST a endpoints desde Postman
   - Conexión desde aplicación Ionic (localhost:8100)

3. *Documentación*:
   - README.md con guía de instalación
   - Ejemplos de requests/responses en documentación

*Nota*: Esta implementación permite al equipo frontend comenzar a desarrollar las pantallas de login/registro usando los endpoints mock, mientras se prepara la infraestructura backend en las siguientes HUs.