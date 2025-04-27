import {
  IonInput,
  IonButton,
  IonPage,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonCheckbox,
} from "@ionic/react";
import CustomHeader from "../../components/Header/CustomHeader";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import "./Login.scss";
import {
  eyeOutline,
  eyeOffOutline,
  mailOutline,
  lockClosedOutline,
} from "ionicons/icons";

import { useState } from "react";
import { initialValues, validationSchema } from "./Login.form";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Formulario enviado", values);
      // Aquí iría la lógica de autenticación
      history.push("/dashboard"); // Redirige al usuario después del login
    },
  });

  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <IonPage>
      <CustomHeader
        pageName="Iniciar sesión"
        showMenuButton={false}
        showLogoutButton={false}
      />

      <IonContent class="login-page ion-padding">
        <h2>Bienvenido</h2>
        <div className="login-container">
          {/* Descripción */}
          <div className="login-description">
            <p>Por favor, ingresa tus credenciales para acceder a tu cuenta</p>
          </div>

          {/* Formulario de login */}
          <form onSubmit={formik.handleSubmit}>
            {/* Campo de email */}
            <IonItem className="custom-itemheader">
              <IonIcon
                icon={mailOutline}
                slot="start"
                className="custom-icon"
              />
              <IonLabel>Correo Electrónico</IonLabel>
            </IonItem>
            <IonItem className="custom-item">
              <IonInput
                type="email"
                placeholder="tucorreo@ejemplo.com"
                onIonChange={(e) =>
                  formik.setFieldValue("email", e.detail.value)
                }
                className={formik.errors.email ? "ion-invalid" : ""}
              />
            </IonItem>

            {formik.errors.email && (
              <span className="error-message">{formik.errors.email}</span>
            )}

            {/* Campo de contraseña */}
            <IonItem className="custom-itemheader">
              <IonIcon
                icon={lockClosedOutline}
                slot="start"
                className="custom-icon"
              />
              <IonLabel>Contraseña</IonLabel>
            </IonItem>
            <IonItem className="custom-item" lines="none">
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                onIonChange={(e) =>
                  formik.setFieldValue("password", e.detail.value)
                }
                className={formik.errors.password ? "ion-invalid" : ""}
              />
              <IonIcon
                icon={showPassword ? eyeOffOutline : eyeOutline}
                slot="end"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              />
            </IonItem>
            {formik.errors.password && (
              <span className="error-message">{formik.errors.password}</span>
            )}

            {/* Opciones de recordar y olvidar contraseña */}
            <div className="login-options">
              <IonItem lines="none">
                <IonCheckbox
                  checked={rememberMe}
                  onIonChange={(e) => setRememberMe(e.detail.checked)}
                  slot="start"
                />
                <IonLabel>Recordarme</IonLabel>
              </IonItem>
            </div>
            <div className="login-options">
              <a href="/forgot-password" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de login */}
            <div className="button-row">
              {/* Botón de registro */}
              <IonButton expand="block" onClick={() => formik.handleSubmit()}>
                Iniciar sesión
              </IonButton>
            </div>

            {/* Enlace a registro */}
            <div className="register-link">
              <p>
                ¿No tienes una cuenta? <a href="/signup">Regístrate</a>
              </p>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}
