import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import './FormCard.css';

interface FormCardProps {
  title: string;
  children: React.ReactNode;
}

export const FormCard = ({ title, children }: FormCardProps) => {
  return (
    <IonCard className="form-card">
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {children}
      </IonCardContent>
    </IonCard>
  );
};