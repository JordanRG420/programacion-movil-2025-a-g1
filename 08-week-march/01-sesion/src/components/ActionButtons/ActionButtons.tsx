import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import './ActionButtons.css';

export const ActionButtons = () => {
  return (
    <IonGrid className="action-buttons">
      <IonRow>
        <IonCol>
          <IonButton expand="block" color="primary">Agregar</IonButton>
        </IonCol>
        <IonCol>
          <IonButton expand="block" color="secondary">Modificar</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton expand="block" color="danger">Eliminar</IonButton>
        </IonCol>
        <IonCol>
          <IonButton expand="block" color="tertiary">Consultar</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};