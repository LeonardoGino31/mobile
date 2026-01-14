export interface CulturalTip {
  id: number;
  title: string;
  description: string;
}

export interface CountryI {
  id: number;
  name: string;
  description: string;
  extraInfo?: string;
  image?: string;
  tips: CulturalTip[];
}

export const countries: CountryI[] = [
  {
    id: 1,
    name: 'Colombia',
    description:
      'La nación ofrece ritmos alegres y festivales coloridos para resaltar la herencia diversa y promover la calidez humana en cada rincón del territorio lleno de alegría he historia.',
    extraInfo:
      'El país se distingue por su fascinante biodiversidad y una mezcla cultural que fusiona raíces indígenas, africanas y españolas en celebraciones únicas como el Carnaval de Barranquilla. Sus regiones ofrecen desde el aroma de los cafetales andinos hasta la alegría del vallenato y la cumbia, reflejando un espíritu resiliente y una hospitalidad que transforma a cada visitante en un amigo cercano.',
    image: '/images/colombia.jpg',
    tips: [
      {
        id: 1,
        title: 'Saludo',
        description:
          'Es común saludar con un apretón de manos. Entre amigos puede haber abrazo.'
      },
      {
        id: 2,
        title: 'Puntualidad',
        description:
          'En reuniones sociales la puntualidad es flexible, pero en contextos laborales se valora llegar a tiempo.'
      },
      {
        id: 3,
        title: 'Trato',
        description:
          'Las personas suelen ser amables y conversadoras, el trato cercano es común.'
      }
    ]
  },
  {
    id: 2,
    name: 'Turquía',
    description:
      'El estado combina bazares exóticos y arquitectura milenaria para unir el oriente con occidente y facilitar el intercambio de saberes entre civilizaciones.',
    extraInfo:
      'Situada en el umbral entre dos continentes, la cultura turca es un mosaico deslumbrante donde los minaretes de las mezquitas conviven con la herencia bizantina y la modernidad urbana. La hospitalidad se sella con un té caliente en el Gran Bazar, mientras que rituales como los derviches giróvagos y la rica cocina otomana demuestran una profundidad espiritual y sensorial que ha sido moldeada por siglos de historia compartida.',
    image: '/images/turquia.jpg',
    tips: [
      {
        id: 1,
        title: 'Respeto religioso',
        description:
          'Viste de manera respetuosa al visitar mezquitas y lugares religiosos.'
      },
      {
        id: 2,
        title: 'Hospitalidad',
        description:
          'La hospitalidad es muy importante; aceptar té es una señal de cortesía.'
      },
      {
        id: 3,
        title: 'Calzado',
        description:
          'Es habitual quitarse los zapatos al entrar a una casa.'
      }
    ]
  },
  {
    id: 3,
    name: 'Costa de Marfil',
    description:
      'La región aporta tradiciones ancestrales y hospitalidad vibrante para celebrar la identidad africana y fortalecer los vínculos sociales a través del cacao.',
    extraInfo:
      'Este núcleo de África Occidental destaca por ser el mayor productor de cacao del mundo, pero su verdadera riqueza reside en la diversidad de sus más de sesenta grupos étnicos. La música Coupé-Décalé domina las noches de Abiyán, mientras que en las zonas rurales, las danzas de máscaras y los tejidos tradicionales mantienen vivos los relatos ancestrales y los valores de comunidad y respeto mutuo.',
    image: '/images/costa.jpg',
    tips: [
      {
        id: 1,
        title: 'Saludo',
        description:
          'Saludar es muy importante; no hacerlo puede considerarse descortés.'
      },
      {
        id: 2,
        title: 'Respeto a mayores',
        description:
          'Se muestra gran respeto hacia las personas mayores y autoridades.'
      },
      {
        id: 3,
        title: 'Comunidad',
        description:
          'La vida comunitaria es clave; compartir y cooperar es muy valorado.'
      }
    ]
  },
  {
    id: 4,
    name: 'Francia',
    description:
      'El país brinda elegancia histórica y gastronomía refinada para valorar el patrimonio artístico y fomentar el aprecio por la alta cocina de vanguardia.',
    extraInfo:
      'La cultura francesa es un referente mundial de la sofisticación, donde la filosofía de la "joie de vivre" se manifiesta en sus icónicos cafés de París y su respeto por las artes plásticas. Desde los viñedos de Burdeos hasta los castillos del Loira, el país protege con orgullo su lengua y su etiqueta social, consolidando un estilo de vida que equilibra la tradición histórica con la innovación creativa moderna.',
    image: '/images/francia.jpg',
    tips: [
      {
        id: 1,
        title: 'Saludo',
        description:
          'Decir “bonjour” al entrar a un lugar es fundamental.'
      },
      {
        id: 2,
        title: 'Etiqueta',
        description:
          'La cortesía y el respeto por las normas sociales son muy importantes.'
      },
      {
        id: 3,
        title: 'Idioma',
        description:
          'Intentar hablar francés, aunque sea básico, es muy apreciado.'
      }
    ]
  }
];
