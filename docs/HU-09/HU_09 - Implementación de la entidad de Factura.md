# 🧾 HU 09 – Implementación de la Entidad de Factura para Generar una Factura al Cliente

## 📌 Descripción

Como desarrollador del sistema de carrito de compras, necesito implementar la entidad `Factura` para que el sistema pueda registrar correctamente las compras realizadas por los clientes, permitiendo así la generación de una factura con toda la información relevante como productos comprados, cliente, fecha, total, etc.

## 🎯 Alcance

Esta historia de usuario abarca la creación de la entidad `Factura`, su relación con otras entidades (como `DetalleFactura`, `Usuario` y `Producto`), la configuración en la base de datos y la implementación del CRUD correspondiente. Además, se asegura el correcto uso de herencia desde `BaseEntity` para mantener campos de auditoría.

## ✅ Criterios de Aceptación

- La entidad `Factura` debe incluir los campos obligatorios: `fecha`, `total`, `metodoPago`, `estado`, entre otros.
- Debe estar relacionada correctamente con `DetalleFactura`, `Usuario`, `Reservacion`.
- Debe heredar de `BaseEntity` para la auditoría.
- Debe tener su repositorio, servicio e implementación de CRUD.
- Se debe probar la creación de una factura completa y verificar su persistencia.

---

## 🧑‍🤝‍🧑 División de Tareas por Integrante

---

### 👤 Integrante 1 
1. **Diseñar la clase `Factura` como entidad JPA**:
   - Anotar con `@Entity`, `@Table(name = "facturas")`.
   - Agregar campos: `fecha`, `metodoPago`, `total`, `estado`.
   - Heredar de `BaseEntity`.
   - Incluir validaciones (`@NotNull`, `@Column`, etc.).

---

### 👤 Integrante 2
2. **Definir las relaciones de la entidad**:
   - Relación con `Usuario` (cliente que realiza la compra): `@ManyToOne`.
   - Relación con `DetalleFactura`: `@OneToMany(mappedBy = "factura")`.

---

### 👤 Integrante 3 
3. **Crear el repositorio y servicio de `Factura`**:
   - Crear `FacturaRepository` que extienda `JpaRepository`.
   - Crear `FacturaService` con métodos `createFactura`, `getAllFacturas`, `getFacturaById`, etc.

---

### 👤 Integrante 4 
5. **Documentar la HU en el Trello y/o repositorio**:
   - Agregar alcance, descripción, tareas, criterios de aceptación.
   - Subir ejemplos de creación de factura (JSON de entrada/salida).
   - Documentar cómo se relaciona con `DetalleFactura` y el uso de `BaseEntity`.

---

## 📄 Ejemplo de entidad `Factura` (tarea de Integrante 1)

```java
@Entity
@Table(name = "facturas")
public class Factura extends BaseEntity {

    @NotNull
    private LocalDateTime fecha;

    @NotNull
    private String metodoPago;

    @NotNull
    private Double total;

    @NotNull
    private String estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "factura", cascade = CascadeType.ALL)
    private List<DetalleFactura> detalles;

    // Getters y Setters
}
