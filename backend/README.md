# Backend de Explora Neiva - El Corazón de la Plataforma

El backend de Explora Neiva es una API RESTful desarrollada con Spring Boot que sirve como columna vertebral de toda la plataforma. Implementamos un sistema que maneja:

- ## Autenticación JWT
  La autenticación en el backend utiliza **JSON Web Tokens (JWT)** para garantizar la seguridad. Un JWT es un token digital que contiene información codificada y se utiliza para verificar la identidad del usuario.

### ¿Cómo funciona?

1. **Inicio de Sesión**: El usuario se autentica proporcionando sus credenciales.
2. **Generación del Token**: Al autenticarse correctamente, el sistema genera un token único que contiene información como el ID del usuario y su rol.
3. **Uso del Token**: El token se envía con cada solicitud a la API para verificar la identidad del usuario.
4. **Caducidad**: Los tokens tienen un tiempo de expiración para garantizar la seguridad. Si el token expira, el usuario debe iniciar sesión de nuevo.

### Beneficios:

- **Seguro**: Los datos del usuario están protegidos.
- **Fácil de usar**: Solo necesitas adjuntar el token en cada solicitud.

- ## Gestión de Experiencias
  Lógica compleja para manejar disponibilidad de tours, validación de horarios y gestión de anfitriones.
