import { schoolOutline, starOutline } from "ionicons/icons";
import { GenericForm, FieldConfig } from "../components/GenericForm/GenericForm";

export const Estudiante = () => {
  const estudianteFields: FieldConfig[] = [
    {
      label: "Nivel educativo",
      placeholder: "Ingrese el nivel educativo",
      icon: schoolOutline,
      type: "text"
    },
    {
      label: "Calificación promedio",
      placeholder: "Ingrese su promedio",
      icon: starOutline,
      type: "number"
    }
  ];

  return <GenericForm title="Estudiante" specificFields={estudianteFields} />;
};
