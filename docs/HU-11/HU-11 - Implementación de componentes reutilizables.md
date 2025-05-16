# 🧩 HU 11 - Implementación de componentes reutilizables

## Nombre
Implementación de componentes reutilizables en Ionic React

## Descripción
Como desarrollador del frontend, necesito implementar componentes reutilizables en Ionic React, como un encabezado personalizado (`CustomHeader`), para centralizar y estandarizar elementos comunes entre las páginas (como el título de la página, el botón de logout, menú lateral, y otros iconos). Esto permitirá mantener consistencia visual y funcional en la navegación del sistema.

## Alcance
Esta HU cubre la implementación del componente `CustomHeader`, el cual será utilizado en todas las páginas del sistema (como login, signup, dashboard, creación de factura, etc.). Se utilizarán componentes de Ionic como `IonHeader`, `IonToolbar`, `IonTitle`, `IonButtons`, `IonIcon` y `IonMenuButton`.

> 🎨 *Nota: La personalización de estilos se realizará posteriormente en una HU específica enfocada en diseño UI/UX.*

---

## Tareas

### 👤 Integrante 1 - Estructura y lógica del componente
- Crear el componente `CustomHeader.tsx`.
- Definir la interfaz de props (`CustomHeaderProps`) con `pageName`, `showMenuButton`, `showLogoutButton`.
- Implementar el uso de `useHistory()` para redireccionar a la página de bienvenida (`/welcome`) en el botón de logout.

### 👤 Integrante 2 - Estructura visual con Ionic
- Importar y estructurar correctamente los elementos de Ionic (`IonHeader`, `IonToolbar`, `IonTitle`, `IonButtons`, `IonMenuButton`, etc.).
- Añadir los íconos `busOutline`, `logOutOutline` y `personCircleOutline`.

### 👤 Integrante 3 - Validación condicional de botones
- Implementar el renderizado condicional de `IonMenuButton` y `IonButton` de logout según los valores booleanos recibidos por props.
- Verificar el correcto comportamiento en distintas páginas.

### 👤 Integrante 4 - Exportación, prueba e integración
- Exportar correctamente el componente para su uso global.
- Probar el componente en diferentes páginas (ej. página de login y dashboard).
- Documentar el uso del componente en el README del frontend o tablero Trello.

---

## Código de ejemplo: `CustomHeader.tsx`

```tsx
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuButton,
} from "@ionic/react";
import {
  logOutOutline,
  busOutline,
  personCircleOutline,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./CustomHeader.scss";

interface CustomHeaderProps {
  pageName: string;
  showMenuButton?: boolean;
  showLogoutButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  pageName,
  showMenuButton = true,
  showLogoutButton = true,
}) => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/welcome");
  };

  return (
    <IonHeader className="custom-header">
      <IonToolbar>
        {showMenuButton && (
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        )}

        <div className="header-center">
          <IonIcon icon={busOutline} className="header-icon" />
          <IonTitle>{pageName}</IonTitle>
        </div>

        {showLogoutButton && (
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>
              <IonIcon icon={logOutOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default CustomHeader;
