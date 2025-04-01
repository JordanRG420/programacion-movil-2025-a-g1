import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';

// Pages

import { Profesor } from './pages/Profesor';
import { Estudiante } from './pages/Estudiante';
import { Proveedor } from './pages/Proveedor';
import { Cliente } from './pages/Cliente';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/profesor" component={Profesor} />
        <Route exact path="/estudiante" component={Estudiante} />
        <Route exact path="/proveedor" component={Proveedor} />
        <Route exact path="/cliente" component={Cliente} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;