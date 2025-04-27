import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
} from "@ionic/react";
import { menuOutline, logOutOutline, busOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./CustomHeader.scss";

interface CustomHeaderProps {
  pageName: string;
  showMenuButton?: boolean; // Mostrar o no el botón de menú
  showLogoutButton?: boolean; // Mostrar o no el botón de logout
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  pageName,
  showMenuButton = true, // Valor por defecto: mostrar el botón de menú
  showLogoutButton = true, // Valor por defecto: mostrar el botón de logout
}) => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/welcome");
    // Aquí puedes agregar la lógica de cierre de sesión si es necesario
  };

  return (
    <>
      {/* Menú Lateral */}
      <IonMenu contentId="main-content" side="start">
        <IonContent>
          <IonList>
            <IonItem routerLink="/login" routerDirection="root">
              Login
            </IonItem>
            <IonItem routerLink="/create-person" routerDirection="root">
              Crear Persona
            </IonItem>
            <IonItem routerLink="/create-reservation" routerDirection="root">
              Crear Reserva
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Header */}
      <IonHeader className="custom-header">
        <IonToolbar>
          {/* Botón de menú, se muestra sólo si showMenuButton es true */}
          {showMenuButton && (
            <IonButtons slot="start">
              <IonMenuButton autoHide={false}>
                <IonIcon icon={menuOutline} />
              </IonMenuButton>
            </IonButtons>
          )}

          {/* Parte central - Icono Bus + Nombre de página */}
          <div className="header-center">
            <IonIcon icon={busOutline} className="header-icon" />
            <IonTitle>{pageName}</IonTitle>
          </div>

          {/* Botón de logout, se muestra sólo si showLogoutButton es true */}
          {showLogoutButton && (
            <IonButtons slot="end">
              <IonButton onClick={handleLogout}>
                <IonIcon icon={logOutOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default CustomHeader;
