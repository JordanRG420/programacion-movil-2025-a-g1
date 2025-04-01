import { bookOutline, ribbonOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";

export const Profesor = () => {
  const profesorFields = [
    {
      label: "Asignatura",
      placeholder: "Ingrese la asignatura que dicta",
      icon: bookOutline
    },
    {
      label: "Título académico",
      placeholder: "Ingrese el título alcanzado",
      icon: ribbonOutline
    }
  ];

  return <GenericForm title="Profesor" specificFields={profesorFields} />;
};
