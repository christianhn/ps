export const tarifasData = {
  header: {
    title: "Tarifas.",
    subtitle: "Transparencia total. Sin letras pequeñas.",
  },
  plans: [
    {
      tipo: "Individual",
      nombre: "Adultos y Adolescentes",
      precio: "60",
      duracion: "Sesión única · Presencial u online",
      service: "individual",
      features: [
        { label: "Bono 4 sesiones", price: "200 €", saving: "Ahorras 40 €" },
        { label: "Bono 8 sesiones", price: "380 €", saving: "Ahorras 100 €" },
      ],
      featured: false,
    },
    {
      tipo: "Pareja · Familia",
      nombre: "Sesión conjunta",
      precio: "90",
      duracion: "85 minutos · Presencial u online",
      service: "pareja",
      features: [
        { label: "Bono 4 sesiones", price: "280 €", saving: "Ahorras 80 €" },
        { label: "Bono 8 sesiones", price: "540 €", saving: "Ahorras 180 €" },
      ],
      featured: false,
    },
    {
      tipo: "Estudiantes",
      nombre: "Técnicas de estudio",
      precio: "45",
      duracion: "Sesión única · Presencial u online",
      service: "estudio",
      features: [
        { label: "Bono 4 sesiones", price: "150 €", saving: "Ahorras 30 €" },
        { label: "Bono 8 sesiones", price: "285 €", saving: "Ahorras 75 €" },
      ],
      featured: false,
    },
  ],
  condiciones: {
    title: "Condiciones generales",
    list: [
      "Los descuentos por convenio se aplican solamente a sesiones únicas.",
      "Los bonos se abonan íntegramente en la primera sesión.",
      "La validez de los bonos es de 6 meses (4 sesiones) y 12 meses (8 sesiones).",
      "Las cancelaciones deben realizarse con un mínimo de 24h de antelación.",
    ],
  },
};
