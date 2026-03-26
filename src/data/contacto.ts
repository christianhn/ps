export const contactoData = {
  title: "¿Damos el primer<br />paso <em>juntos?</em>",
  subtitle:
    "Tu bienestar no puede esperar. Déjame un mensaje y te contactaré lo antes posible para valorar tu caso y cómo puedo ayudarte.",
  info: [
    {
      icon: "location",
      text: "Camino de las Torres 27, 1ºA · 50008 Zaragoza",
      isLink: false,
    },
    {
      icon: "email",
      text: "mcatena@cop.es",
      href: "mailto:mcatena@cop.es",
      isLink: true,
      bold: true,
    },
    {
      icon: "phone",
      text: "+34 696 73 49 06",
      href: "tel:+34696734906",
      isLink: true,
      bold: true,
    },
    {
      icon: "clock",
      text: "Lunes a Viernes · 9:00 – 20:00",
      isLink: false,
    },
  ],
  form: {
    action: "#", // Change to Formspree ID or similar
    services: [
      { id: "individual", label: "Terapia Individual / Adultos" },
      { id: "adolescentes", label: "Terapia para Adolescentes" },
      { id: "pareja", label: "Terapia de Pareja o Familia" },
      { id: "estudio", label: "Técnicas de estudio" },
      { id: "otro", label: "Otro / Duda general" },
    ],
  },
};
