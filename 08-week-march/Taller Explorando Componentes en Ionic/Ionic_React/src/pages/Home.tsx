import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonIcon, IonImg } from '@ionic/react';
import { heart, star } from 'ionicons/icons';
import './Home.css';
 
const Home: React.FC = () => {
  const handleClick = () => {
    alert('¡Botón presionado!');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Mi Pantalla React</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Tarjeta con imagen externa - Versión actualizada */}
        <IonCard>
          <IonImg 
            src="https://vabadus.es/images/cache/imagen_nodo/images/articulos/642b0d6e32096626294760.png" 
            alt="Componentes React reutilizables"
            style={{
              padding: '16px',
              objectFit: 'cover',
              height: '250px'
            }}
          />
          <IonCardHeader>
            <IonCardTitle>¡Desarrollo con Ionic-React!</IonCardTitle>
            <IonCardSubtitle>Componentes reutilizables</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Esta imagen es con link externo .png.</p>
          </IonCardContent>
        </IonCard>

        {/* Botón con acción */}
        <IonButton expand="block" onClick={handleClick}>
          Ver más ejemplos
        </IonButton>

        {/* Lista */}
        <IonList>
          <IonItem>
            <IonIcon icon={star} slot="start" color="warning" />
            <IonLabel>Ícono estrella (favoritos)</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={heart} slot="start" color="danger" />
            <IonLabel>Ícono de corazón (me encanta)</IonLabel>
          </IonItem>
        </IonList>

        {/* Sección interactiva */}
        <div style={{ 
          textAlign: 'center', 
          margin: '25px 0',
          padding: '15px',
          border: '1px dashed #ddd',
          borderRadius: '8px'
        }}>
          <IonIcon 
            icon={heart} 
            size="large" 
            color="danger" 
            onClick={() => alert('¡Has dado me encanta!')}
            style={{ cursor: 'pointer' }}
          />
          <p style={{ marginTop: '8px' }}>Haz clic en el corazón</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;