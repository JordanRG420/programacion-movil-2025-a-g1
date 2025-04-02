import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonButton, IonList, IonItem, IonLabel, 
  IonIcon, IonImg, IonBadge, IonListHeader 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  analytics, refresh, 
  time, arrowUp, arrowDown, 
  person, server 
} from 'ionicons/icons';

@Component({
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonButton, IonList, IonItem, IonLabel,
    IonIcon, IonImg, IonBadge, IonListHeader
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  metrics = [
    { icon: 'arrow-up', value: '24%', label: 'Crecimiento', color: 'success' },
    { icon: 'time', value: '1.2s', label: 'Respuesta', color: 'warning' },
    { icon: 'person', value: '143', label: 'Usuarios', color: 'primary' },
    { icon: 'server', value: '64%', label: 'Uso CPU', color: 'tertiary' }
  ];

  activityItems = [
    { icon: 'arrow-up', text: 'Actualización de datos', badge: 'Nuevo', color: 'success', badgeColor: 'success' },
    { icon: 'alert', text: 'Alerta del sistema', badge: '2', color: 'warning', badgeColor: 'warning' },
    { icon: 'settings', text: 'Configuración cambiada', badge: '', color: 'medium', badgeColor: 'light' }
  ];

  constructor() {
    addIcons({ analytics, refresh, time, arrowUp, arrowDown, person, server });
  }

  showAlert() {
    alert('Datos actualizados correctamente');
  }
}