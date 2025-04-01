import {
  IonItem,
  IonLabel,
  IonInput,
  IonIcon
} from "@ionic/react";
import {
  personOutline,
  mailOutline,
  calendarOutline
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { FormCard } from "../FormCard/FormCard";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import './GenericForm.css';

export interface FieldConfig {
  label: string;
  placeholder: string;
  icon: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
}

interface GenericFormProps {
  title: string;
  specificFields: FieldConfig[];
}

export const GenericForm = ({ title, specificFields }: GenericFormProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Inicia animación al cargar
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <FormCard title={title}>
      <div className={`form-container ${animate ? 'fade-in' : ''}`}>
        {/* Primer nombre */}
        <IonItem className="form-field first-field">
          <IonIcon icon={personOutline} slot="start" />
          <IonLabel position="stacked">Primer nombre</IonLabel>
          <IonInput type="text" placeholder="Escriba su primer nombre" />
        </IonItem>

        {/* Segundo nombre */}
        <IonItem className="form-field">
          <IonIcon icon={personOutline} slot="start" />
          <IonLabel position="stacked">Segundo nombre</IonLabel>
          <IonInput type="text" placeholder="Escriba su segundo nombre" />
        </IonItem>

        {/* Edad */}
        <IonItem className="form-field">
          <IonIcon icon={calendarOutline} slot="start" />
          <IonLabel position="stacked">Años cumplidos</IonLabel>
          <IonInput type="number" placeholder="Indique su edad actual" />
        </IonItem>

        {/* Correo */}
        <IonItem className="form-field">
          <IonIcon icon={mailOutline} slot="start" />
          <IonLabel position="stacked">Email personal</IonLabel>
          <IonInput type="email" placeholder="Ingrese su correo electrónico" />
        </IonItem>

        {/* Campos específicos de cada pantalla */}
        {specificFields.map((field, index) => (
          <IonItem className="form-field" key={index}>
            <IonIcon icon={field.icon} slot="start" />
            <IonLabel position="stacked">{field.label}</IonLabel>
            <IonInput
              type={field.type || 'text'}
              placeholder={field.placeholder}
            />
          </IonItem>
        ))}

        <ActionButtons />
      </div>
    </FormCard>
  );
};
