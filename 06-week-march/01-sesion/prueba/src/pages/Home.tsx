import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';

const SecondPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Resumen de Pedido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        {/* Encabezado simple */}
        <div className="ion-text-center ion-margin-vertical">
          <h2 style={{ color: 'var(--ion-color-success)' }}>Detalles del Envío</h2>
          <p>Tu pedido está en camino</p>
        </div>

        {/* Información básica */}
        <IonList lines="none">
          <IonItem>
            <IonLabel>N° Pedido:</IonLabel>
            <IonLabel slot="end">#13579</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha:</IonLabel>
            <IonLabel slot="end">15/03/2025</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Dirección:</IonLabel>
            <IonLabel slot="end">CORHUILA Prado Alto</IonLabel>
          </IonItem>
        </IonList>

        {/* Botón simple */}
        <div className="ion-margin-top">
          <IonButton expand="block" color="success">
            Ver estado completo
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default SecondPage;