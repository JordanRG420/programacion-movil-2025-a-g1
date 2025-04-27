import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { HandlerRoutes } from "./pages/routes";
import { Redirect, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import { Login } from "./pages/Login/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import { Signup } from "./pages/Signup/Signup";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
import SuccessModal from "./components/Modals/SuccessModal";
import { VerifyEmail } from "./pages/VerifyEmail/VerifyEmail";

setupIonicReact();
{
  /*}
export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main-content">
          <HandlerRoutes />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}*/
}

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main-content">
          <Route path="/welcome" component={Welcome} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup-success" component={SuccessModal} />
          <Route path="/verify-email" component={VerifyEmail} />
          <Route path="/forgot-password" component={ForgotPassword} exact />
          <HandlerRoutes />
          <Redirect exact from="/" to="/welcome" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
