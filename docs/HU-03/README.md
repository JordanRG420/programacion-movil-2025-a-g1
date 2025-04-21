# **HU_03 - Modelado de Datos para Reservas Turísticas**

## **Objetivo**

Implementar la estructura de datos que soportará la aplicación móvil de reservas turísticas, garantizando gestión eficiente de usuarios, sitios, reservas y pagos.

## **Estructura Clave**

### **🔹 Entidades Principales**

- **Usuarios**: Turistas y anfitriones
- **Sitios Turísticos**: Hoteles y atracciones
- **Experiencias**: Paquetes/actividades
- **Reservas**: Asignación de cupos
- **Pagos**: Transacciones seguras

### **🔹 Relaciones Críticas**

- Usuario ↔ Reserva (1:N)
- Sitio ↔ Experiencia (1:N)
- Reserva ↔ Pago (1:1)

### **🔹 Auditorías**

- Seguimiento de acciones
- Historial de cambios
