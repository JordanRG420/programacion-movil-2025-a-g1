# HU 8: Implementación de BaseEntity Genérico

## 🧾 Nombre:
HU 8 – Implementación de clase base genérica para operaciones CRUD

## 📄 Descripción:
**Explora Neiva**, necesita **implementar una clase base genérica (`BaseEntity`) con tipo de objeto `T`**, que permita realizar operaciones CRUD comunes (crear, actualizar, eliminar) reutilizables en todas las entidades del sistema que manejen información transaccional o de gestión, **excepto en la entidad `Usuario`**, ya que esta requiere validaciones y lógicas específicas. Esta implementación también debe contemplar el manejo de **atributos de auditoría** (`createdAt`, `updatedAt`, `deletedAt`, `createdBy`, `updatedBy`, `deletedBy`, y `state`).

---

## 🎯 Alcance:
- Implementar una **clase abstracta genérica** reutilizable para CRUD básico en entidades comunes.
- Incluir atributos de auditoría y lógica común para la trazabilidad de registros.
- Aplicable a todas las entidades del sistema **excepto la entidad `Usuario`**.

---

## ✅ Criterios de Aceptación:
- La clase base permite crear, actualizar y eliminar registros de manera genérica usando `T`.
- Se registran correctamente los campos de auditoría en cada operación.
- Se demuestra el uso en al menos 2 entidades (por ejemplo: `Producto` y `Factura`).
- La entidad `Usuario` **no debe heredar ni usar** esta base.

---

## 🧩 Tasks (Tareas):

1. Diseñar la clase abstracta `BaseEntity<T>` con anotaciones JPA.
2. Agregar campos de auditoría (`createdAt`, `updatedAt`, `deletedAt`, etc.) y sus getters/setters.
3. Implementar métodos genéricos para:
   - Crear (`create(T entity)`)
   - Actualizar por ID (`updateById(Long id, T entity)`)
   - Eliminar lógico por ID (`deleteById(Long id)`)
4. Aplicar herencia de `BaseEntity` en entidades como `Producto`, `Factura`, `DetalleFactura`, etc.
5. Probar el correcto registro y actualización de los campos de auditoría.
6. Excluir explícitamente a la entidad `Usuario` del uso de esta clase base.
7. Documentar la HU en el repositorio o tablero Trello con ejemplos de uso.

---

## 📌 Nota:
Esta historia de usuario permite consolidar el principio de **reutilización de código** en el sistema de carrito de compras, mediante una clase genérica que centraliza las operaciones comunes a todas las entidades, garantizando coherencia en el manejo de auditoría y facilitando la escalabilidad del sistema. La exclusión de la entidad `Usuario` se justifica por la necesidad de un tratamiento especial en temas de seguridad y autenticación.

---

## 💻 Ejemplo de Código Java

### 1. Clase Base de Auditoría

```java
@MappedSuperclass
public abstract class AuditoriaBase {

    @Column(name = "created_at")
    protected LocalDateTime createdAt;

    @Column(name = "updated_at")
    protected LocalDateTime updatedAt;

    @Column(name = "deleted_at")
    protected LocalDateTime deletedAt;

    @Column(name = "created_by")
    protected String createdBy;

    @Column(name = "updated_by")
    protected String updatedBy;

    @Column(name = "deleted_by")
    protected String deletedBy;

    @Column(name = "state")
    protected boolean state = true;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters y Setters...
}


public abstract class GenericService<T, ID> {

    @Autowired
    protected JpaRepository<T, ID> repository;

    public T create(T entity) {
        return repository.save(entity);
    }

    public Optional<T> updateById(ID id, T newEntity) {
        if (repository.existsById(id)) {
            return Optional.of(repository.save(newEntity));
        }
        return Optional.empty();
    }

    public boolean deleteById(ID id) {
        Optional<T> entity = repository.findById(id);
        if (entity.isPresent()) {
            if (entity.get() instanceof AuditoriaBase) {
                AuditoriaBase base = (AuditoriaBase) entity.get();
                base.setDeletedAt(LocalDateTime.now());
                base.setState(false);
                repository.save((T) base);
                return true;
            }
        }
        return false;
    }
}


@Entity
public class Producto extends AuditoriaBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Double precio;

    // Otros atributos, getters y setters
}


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {}

@Service
public class ProductoService extends GenericService<Producto, Long> {}

---