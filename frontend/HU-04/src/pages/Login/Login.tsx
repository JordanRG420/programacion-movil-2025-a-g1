import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage, // Añadido
} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  callOutline,
  calendarOutline,
  cardOutline,
} from "ionicons/icons";
import "./Login.scss";
import { company } from "../../assets";
import CustomHeader from "../../components/CustomHeader";

const handleMenuClick = () => {
  console.log("Menú clickeado");
};

export function Login() {
  return (
    <IonPage>
      <CustomHeader pageName="Login" onMenuClick={handleMenuClick} />

      <IonContent class="login-page ion-padding">
        {/* Logo de la compañía */}
        <div className="login-page__image">
          <img src={company.logo} alt="Entrar" />
        </div>

        <h2>Bienvenidos, Entra y Revisa tus tours</h2>

        {/* Campos del formulario */}
        {/* TIPO DE DOCUMENTO*/}
        <IonItem className="custom-item">
          <IonIcon icon={cardOutline} slot="start" className="custom-icon" />
          <IonLabel>Tipo de Documento</IonLabel>
        </IonItem>
        <IonInput placeholder="Seleccione su tipo de documento" />
        <span className="error"> obligatorio</span>

        {/* NUMERO DE DOCUMENTO*/}
        <IonItem className="custom-item">
          <IonIcon icon={cardOutline} slot="start" className="custom-icon" />
          <IonLabel>Número de Documento</IonLabel>
        </IonItem>
        <IonInput placeholder="Ingrese número de documento" />
        <span className="error"> obligatorio</span>

        {/* FECHA DE NACIMIENTO*/}
        <IonItem className="custom-item">
          <IonIcon
            icon={calendarOutline}
            slot="start"
            className="custom-icon"
          />
          <IonLabel>Fecha de Nacimiento</IonLabel>
        </IonItem>
        <IonInput placeholder="Ingrese su fecha de nacimiento" />
        <span className="error"> obligatorio</span>

        {/* NOMBRE COMPLETO*/}
        <IonItem className="custom-item">
          <IonIcon icon={personOutline} slot="start" className="custom-icon" />
          <IonLabel>Nombre Completo</IonLabel>
        </IonItem>
        <IonInput placeholder="Ingrese su nombre completo" />
        <span className="error">obligatorio</span>

        {/* CORREO ELECTRONICO*/}
        <IonItem className="custom-item">
          <IonIcon icon={mailOutline} slot="start" className="custom-icon" />
          <IonLabel>Correo Electrónico</IonLabel>
        </IonItem>
        <IonInput type="email" placeholder="Ingrese su correo electrónico" />
        <span className="error"> obligatorio</span>

        {/* NUMERO DE TELEFONO*/}
        <IonItem className="custom-item">
          <IonIcon icon={callOutline} slot="start" className="custom-icon" />
          <IonLabel>Número de Teléfono</IonLabel>
        </IonItem>
        <IonInput type="tel" placeholder="Ingrese su número de teléfono" />
        <span className="error"> obligatorio</span>

        {/* Botón de registro */}
        <IonButton expand="block">Registrar</IonButton>
      </IonContent>
    </IonPage>
  );
}

{
  /*<IonHeader className="login-page__header">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <CustomHeader pageName="Login" onMenuClick={handleMenuClick} />
      <IonCard>
        <div className="login-page__image">
          <img src={image.logo} alt="Entrar" />
        </div>
      </IonCard>
      */
}
{
  /*
    <IonInput placeholder="Seleccione su tipo de documento"/>
    <span className="error">Usurio obligatorio</span>

    <IonInput placeholder="Ingrese numero de documento"/>
    <span className="error">Usurio obligatorio</span>

    <IonInput placeholder="Fecha de Nacimiento"/>
    <span className="error">Usurio obligatorio</span>

    <IonInput placeholder="Nombre Completo"/>
    <span className="error">Usurio obligatorio</span>

    <IonInput placeholder="Correo Electrónico"/>
    <span className="error">Usurio obligatorio</span>

    <IonInput placeholder="Número de Teléfono"/>
    <span className="error">Usurio obligatorio</span>
    */
}
