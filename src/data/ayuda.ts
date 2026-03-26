import imgIndividual from "../assets/img/individual.png";
import imgPareja from "../assets/img/pareja.png";
import imgFamilia from "../assets/img/familia.png";
import imgAdolescentes from "../assets/img/crecimiento.png";

export const ayudaData = [
  {
    id: "individual",
    label: "Adultos",
    title: "Terapia individual en Zaragoza",
    image: imgIndividual,
    intro: ' "Sientes que algo no encaja pero no sabes exactamente qué. Cada día es un esfuerzo y la fatiga emocional se ha vuelto tu estado habitual."',
    list: [
      "Sientes un agotamiento emocional que no se quita con el descanso físico.",
      "Te cuesta gestionar el estrés y tus reacciones te sorprenden negativamente.",
      "Has perdido el interés por actividades que antes te hacían disfrutar.",
      'Sientes un vacío o falta de propósito a pesar de tenerlo "todo".',
      "Estás cansadx de esperar a que las cosas cambien solas.",
    ],
  },
  {
    id: "adolescentes",
    label: "Adolescentes",
    title: "Terapia para adolescentes en Zaragoza",
    image: imgAdolescentes,
    intro: ' "La adolescencia es una etapa de grandes cambios. A veces las emociones se desbordan, y la comunicación en casa puede volverse muy difícil."',
    list: [
      "Ansiedad, estrés académico o presión social contínua.",
      "Dificultades de autoestima, identidad o manejo de emociones intensas.",
      "Conductas de riesgo (autolesiones, consumos) o aislamiento.",
      "Dificultades de comunicación en casa y orientación vocacional.",
      "Técnicas de estudio (método completo propio) para mejorar su rendimiento escolar.",
    ],
  },
  {
    id: "pareja",
    label: "Pareja",
    title: "Terapia de pareja en Zaragoza",
    image: imgPareja,
    intro: ' "Las discusiones son siempre por lo mismo y ninguno de los dos sabe ya cómo salir del ciclo. La distancia crece aunque convivís."',
    list: [
      "Las discusiones suelen ser por los mismos temas una y otra vez.",
      "Sientes que hablas con tu pareja pero no te escucha.",
      "La comunicación se ha convertido en un ciclo de reproches y defensiva.",
      'Os habéis convertido más en "compañerxs de piso" que en una pareja.',
      "Queréis salvar la relación, pero ya no sabéis qué más intentar.",
    ],
  },
  {
    id: "familia",
    label: "Familia",
    title: "Terapia familiar en Zaragoza",
    image: imgFamilia,
    intro: ' "En casa hay tensión constante. Un cambio o una crisis ha desestabilizado la dinámica familiar y nadie sabe cómo recomponerse."',
    list: [
      'El ambiente en casa es tenso y/o "explotáis" por cualquier detalle.',
      "Veis dificultades para poner límites claros y respetuosos.",
      "Un miembro de la familia lo está pasando mal y afecta a todo el núcleo.",
      "Un cambio reciente (duelo, mudanza, separación) ha desestabilizado a la familia.",
      "Buscáis un espacio neutral para sanar heridas y mejorar la convivencia.",
    ],
  },
];
