import { homeOutline, callOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";

export const Cliente = () => {
  const clienteFields = [
    {
      label: "Dirección de residencia",
      placeholder: "Ingrese su dirección actual",
      icon: homeOutline
    },
    {
      label: "Teléfono de contacto",
      placeholder: "Ingrese su número telefónico",
      icon: callOutline
    }
  ];

  return <GenericForm title="Cliente" specificFields={clienteFields} />;
};
