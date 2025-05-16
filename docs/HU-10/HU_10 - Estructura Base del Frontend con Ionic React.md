# 🌐 HU 10 – Estructura Base del Frontend con Ionic React

## 📌 Descripción

Como equipo de desarrollo, necesitamos implementar la estructura base del frontend usando **Ionic React** para garantizar una navegación adecuada y el desarrollo modular de interfaces como la página de bienvenida, login, registro, creación de reservación y facturación.

Esto nos permitirá avanzar con un diseño coherente y escalable del sistema de carrito de compras.

---

## 🎯 Alcance

Esta HU se enfoca en:
- La creación del proyecto base en Ionic React.
- Configuración del enrutamiento principal.
- Creación de las páginas iniciales: `Welcome`, `Login`, `Signup`, `Home`, `Reservación`, `Factura`.
- Organización por carpetas (componentes, páginas, servicios, etc.).
- Dejar preparado el entorno para futuras integraciones con backend.

---

## ✅ Criterios de Aceptación

- La aplicación debe estar creada y ejecutable con `npm start` o `ionic serve`.
- El ruteo debe estar correctamente configurado con `react-router-dom`.
- Las páginas `Welcome`, `Login`, `Signup`, `Reservación`, `Factura` deben existir como componentes independientes.
- Las rutas deben tener navegación funcional (botones que cambien de página).
- La estructura del proyecto debe estar organizada en carpetas `/pages`, `/components`, `/services`, `/routes`.
- El diseño debe seguir el estilo de Ionic por defecto.

---

## 🧑‍🤝‍🧑 División de Tareas por Integrante

---

### 👤 Integrante 1 
1. **Crear el proyecto base en Ionic React**
   - Comando: `ionic start frontendApp tabs --type=react`
   - Limpiar contenido por defecto (páginas que no se usarán).
   - Configurar rutas principales con `react-router`.

2. **Crear la estructura de carpetas**:
   - `/pages`, `/components`, `/services`, `/routes`, `/assets`.

---

### 👤 Integrante 2 
3. **Crear las páginas básicas**:
   - `Welcome.tsx`
   - `Login.tsx`
   - `Signup.tsx`
   - `Home.tsx`

4. **Agregar navegación entre páginas**:
   - Uso de `useHistory` o `useNavigate` para moverse entre vistas.
   - Botones de navegación (ej. de Welcome a Login, de Login a Home).

---

### 👤 Integrante 3 
5. **Crear las páginas funcionales del sistema**:
   - `CrearReservacion.tsx`
   - `CrearFactura.tsx`

6. **Diseñar una vista básica con formularios en esas páginas**:
   - Inputs para datos de reservación y factura (sin lógica aún).

---

### 👤 Integrante 4 
7. **Documentar la HU y estructura del frontend**:
   - Describir cada carpeta y propósito.
   - Capturas de las vistas creadas.
   - Documentar navegación funcional.
   - Subirlo a Trello o repositorio (`README.md` en `/frontendApp`).

---

## 📄 Ejemplo de ruta básica (App.tsx)

```tsx
<IonReactRouter>
  <IonRouterOutlet>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/reservacion" component={CrearReservacion} />
    <Route exact path="/factura" component={CrearFactura} />
  </IonRouterOutlet>
</IonReactRouter>
