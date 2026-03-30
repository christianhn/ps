import profileImg from "../assets/img/profile.avif";
import imgOnline from "../assets/img/online.png";

export const sobreMiData = {
  statement: {
    title: "La salud mental <span class=\"no-wrap\">no es un lujo.</span><br />Es el punto de <em>partida.</em>",
  },
  bio: {
    eyebrow: "Sobre mí",
    title: "Psicología que va a la <em>raíz.</em>",
    image: profileImg,
    alt: "Mario Catena, Psicólogo",
    paragraphs: [
      "Soy Mario, psicólogo general sanitario, amante de los acertijos, acariciador de perros y tarareador profesional.",
      "En consulta me especializo en terapias contextuales basadas en la evidencia, con un toque integrador.",
      "¿Y qué significa esto? Resumidamente, apuesto por lo que más se adapte a ti en cada momento de tu proceso.",
      "Mi objetivo es acompañarte en esta etapa, brindándote herramientas y un ambiente donde te sientas segurx y libre para afrontar tus dificultades.",
    ],
  },
  formacion: {
    eyebrow: "Mi Experiencia",
    title: "Formación <em>Profesional.</em>",
    cards: [
      {
        institution: "Universidad Nacional de Educación a Distancia",
        title: "Grado en Psicología",
        description: "Menciones en Intervención Clínica en Trastornos Mentales y del Comportamiento y Psicología de la Salud.",
      },
      {
        institution: "Universidad Europea de Valencia",
        title: "Máster Universitario",
        description: "Psicología General Sanitaria.",
      },
    ],
    isias: {
      institution: "Instituto Superior de Intervención y Acción Social",
      items: [
        {
          title: "Experto en Psicoterapia",
          description: "En Infancia y Adolescencia.",
        },
        {
          title: "Experto en T.E.A",
          description: "Diagnóstico, intervención e inclusión social del Trastorno del Espectro Autista.",
        },
        {
          title: "Educación y Gestión Emocional",
          description: "Formación en Educación Emocional y Gestión Emocional en la Infancia.",
        },
      ],
    },
    aeps: {
      institution: "Asociación Española de Psicología Sanitaria",
      list: [
        "Terapia de Aceptación y Compromiso ACT",
        "Terapia Dialéctico-Conductual DBT",
        "Intervención en Duelo",
        "Tratamiento psicológico del dolor crónico",
        "Terapia de Pareja Breve Estratégica",
        "Adicción a las tecnologías",
        "PAS. Personas altamente sensibles",
        "Apego adulto: Modelo PARCUVE",
      ],
    },
    otras: {
      institution: "Otras formaciones",
      items: [
        {
          title: "Modelo IFS",
          description: "Cómo trabajar las partes y reparar el apego. COPPA.",
        },
        {
          title: "Interpretación de la personalidad",
          description: "A través del dibujo y de la grafología. COPPA.",
        },
        {
          title: "Técnicas de estudio y soft skills",
          description: "Memorización avanzada SL.",
        },
      ],
    },
    footer: "Psicólogo Colegiado Nº A-03977",
  },
  online: {
    eyebrow: "Terapia Online",
    title: "La misma calidad,<br />desde <em>casa.</em>",
    image: imgOnline,
    alt: "Sesión Online Segura",
    paragraphs: [
      "Las sesiones online ofrecen la misma profundidad terapéutica desde la comodidad y privacidad de tu propio espacio. Sin desplazamientos, sin barreras geográficas.",
      "Disponible para toda España. Plataforma segura, cifrada y 100% confidencial.",
    ],
    cta: {
      text: "Reservar sesión online",
      href: "#contacto",
    },
  },
};
