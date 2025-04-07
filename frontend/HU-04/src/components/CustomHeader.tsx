import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import {
  menuOutline,
  logOutOutline,
  airplaneOutline,
  busOutline,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./CustomHeader.scss";

interface CustomHeaderProps {
  pageName: string;
  onMenuClick?: () => void;
  iconType?: "airplane" | "bus"; // Nuevo prop para seleccionar el icono
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  pageName,
  onMenuClick,
  iconType = "airplane", // Valor por defecto
}) => {
  const history = useHistory();

  const handleLogout = () => {
    // Lógica de logout aquí
    history.push("/login");
  };

  // Selecciona el icono basado en el prop
  const centerIcon = iconType === "bus" ? busOutline : airplaneOutline;

  return (
    <IonHeader className="custom-header">
      <IonToolbar>
        {/* Parte izquierda - Menú */}
        <IonButtons slot="start">
          <IonButton onClick={onMenuClick}>
            <IonIcon icon={menuOutline} />
          </IonButton>
        </IonButtons>

        {/* Parte central - Icono + Nombre de página */}
        <div className="header-center">
          <IonIcon icon={centerIcon} className="header-icon" />
          <IonTitle>{pageName}</IonTitle>
        </div>

        {/* Parte derecha - Logout */}
        <IonButtons slot="end">
          <IonButton onClick={handleLogout}>
            <IonIcon icon={logOutOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default CustomHeader;
