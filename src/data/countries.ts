export interface CountryI{
    id : number;
    name : string;
    description:string;
    extraInfo?: string
    image?: string
}

export const countries: CountryI[] =[
      {
    id: 1,
    name: 'Colombia',
    description:
      'Los viajeros pueden sentirse desconectados culturalmente al visitar lugares nuevos sin comprender completamente el idioma, las normas sociales y las costumbres locales.',
    extraInfo:
      'Conocer saludos, normas y tradiciones locales ayuda a evitar malentendidos.',
    image: '/images/colombia.jpg'
  },
  {
    id: 2,
    name: 'Turquia',
    description:
      'La aplicación ofrece consejos culturales y recomendaciones personalizadas para mejorar la experiencia de viaje y fomentar la comprensión intercultural.',
    extraInfo:
      'La app adaptará su contenido según el país que visites.',
    image: '/images/turquia.jpg'
  },
  {
    id: 3,
    name: 'Costa de Marfil',
    description:
      'La aplicación ofrece consejos culturales y recomendaciones personalizadas para mejorar la experiencia de viaje y fomentar la comprensión intercultural.',
    extraInfo:
      'La app adaptará su contenido según el país que visites.',
    image: '/images/costa.jpg'
  },
  {
    id: 4,
    name: 'Francia',
    description:
      'La aplicación ofrece consejos culturales y recomendaciones personalizadas para mejorar la experiencia de viaje y fomentar la comprensión intercultural.',
    extraInfo:
      'La app adaptará su contenido según el país que visites.',
    image: '/images/francia.jpg'
  }

]