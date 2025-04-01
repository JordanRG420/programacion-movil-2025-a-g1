import { storefrontOutline, briefcaseOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";

export const Proveedor = () => {
  const proveedorFields = [
    {
      label: "Razón social",
      placeholder: "Ingrese el nombre de la empresa",
      icon: storefrontOutline
    },
    {
      label: "Tipo de servicio",
      placeholder: "Ingrese el servicio prestado",
      icon: briefcaseOutline
    }
  ];

  return <GenericForm title="Proveedor" specificFields={proveedorFields} />;
};
