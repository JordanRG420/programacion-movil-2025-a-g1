# Unidad 1: Fundamentos y Planificación del Proyecto

## Introducción a las Tecnologías Móviles
Las tecnologías móviles han evolucionado significativamente en los últimos años, permitiendo el desarrollo de aplicaciones más sofisticadas y accesibles. Existen diferentes plataformas y entornos de desarrollo, como:

- **Android** (Java, Kotlin, Flutter)
- **iOS** (Swift, Objective-C)
- **Frameworks multiplataforma** (React Native, Flutter, Xamarin)

### Ejemplo práctico:
Una empresa desea desarrollar una aplicación de pedidos a domicilio. Si eligen **Android**, pueden utilizar **Kotlin** para optimizar el rendimiento y aprovechar la compatibilidad con Google Play Services. Si buscan compatibilidad con iOS, pueden optar por **Flutter** para desarrollar una única base de código para ambas plataformas.

Estas tecnologías facilitan la creación de aplicaciones móviles con funcionalidades avanzadas como realidad aumentada, geolocalización y conectividad con servicios en la nube.

## Metodologías de Desarrollo Ágil y Definición de Proyectos

### Introducción a Metodologías Ágiles
Las metodologías ágiles permiten desarrollar software de manera iterativa e incremental, promoviendo la adaptabilidad y la entrega continua de valor al cliente.

- **Scrum:**
  - **Roles:** Product Owner, Scrum Master, Development Team.
  - **Eventos:** Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.
  - **Artefactos:** Product Backlog, Sprint Backlog, Increment.

### Ejemplo práctico:
En un equipo de desarrollo de una app de turismo, el **Product Owner** prioriza las funciones como mapas interactivos. El equipo define estas funciones en un **Sprint Backlog** y trabaja en ellas durante un sprint de 2 semanas. Cada día realizan un **Daily Scrum** para revisar avances y bloqueos.

- **Kanban:**
  - Se enfoca en la visualización del flujo de trabajo mediante tableros.
  - Limita el trabajo en curso para mejorar la eficiencia.

### Ejemplo práctico:
Una startup usa **Kanban** en Trello para gestionar tareas. Cada tarea pasa por las columnas "Por hacer", "En proceso" y "Completado". Esto permite visualizar el progreso y evitar sobrecargar al equipo.

## Requerimientos del Proyecto y Análisis de Casos
El levantamiento de requerimientos es crucial para definir las funcionalidades y necesidades del usuario. Se pueden utilizar técnicas como:

- Entrevistas con stakeholders.
- Encuestas y cuestionarios.
- Diagramas de casos de uso (UML).

### Taller sobre Levantamiento de Requerimientos y Análisis de Casos de Uso
1. Identificación de actores y roles.
2. Definición de flujos de interacción con el sistema.
3. Priorización de requerimientos en el backlog.

### Ejemplo práctico:
Para una aplicación de reservas de hoteles, se identifican los actores **Usuario** y **Administrador**. Se definen casos de uso como "Reservar una habitación" y "Gestionar disponibilidad".

## Diseño de Base de Datos y Creación de Mockups

### Diseño de Base de Datos
El modelado de datos es esencial para garantizar la integridad y eficiencia del sistema. Algunas herramientas utilizadas incluyen:
- **MySQL / PostgreSQL** (Bases de datos relacionales)
- **Firebase / MongoDB** (Bases de datos NoSQL)
- **Herramientas de modelado**: MySQL Workbench, Lucidchart

### Ejemplo práctico:
Para una app de pedidos en línea, la base de datos **MySQL** puede contener tablas como **Usuarios**, **Pedidos** y **Productos**, relacionadas entre sí para garantizar un buen rendimiento.

### Creación de Mockups
Los mockups permiten visualizar la interfaz del usuario antes del desarrollo. Algunas herramientas populares son:
- **Figma**
- **Adobe XD**
- **Balsamiq**

### Ejemplo práctico:
Un diseñador usa **Figma** para crear la pantalla de inicio de una app de viajes con botones para ver destinos, reservar y pagar.

## Comandos Básicos de GitHub
El control de versiones con Git y GitHub es fundamental en proyectos colaborativos. Algunos comandos esenciales incluyen:

```sh
# Configuración inicial
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"

# Clonar un repositorio
git clone URL_DEL_REPOSITORIO

# Crear un nuevo branch
git checkout -b nombre-del-branch

# Agregar cambios y hacer commit
git add .
git commit -m "Mensaje descriptivo"

# Subir cambios al repositorio
git push origin nombre-del-branch

# Obtener cambios del repositorio remoto
git pull origin main

# Fusionar ramas
git merge nombre-del-branch
```

### Ejemplo práctico:
Un desarrollador crea una nueva rama **feature-login**, agrega cambios en el código de autenticación, y luego los sube al repositorio remoto con **git push**. Finalmente, fusiona la rama con la principal usando **git merge**.

Estas herramientas y metodologías son fundamentales para la planificación y desarrollo eficiente de proyectos móviles.
