export interface CultureI {
  id: number;
  title: string;
  description: string;
  extraInfo: string;
}

export const cultures: CultureI[] = [
  {
    id: 1,
    title: 'Desconexión cultural en viajes',
    description:
      'Los viajeros pueden sentirse desconectados culturalmente al visitar lugares nuevos sin comprender completamente el idioma, las normas sociales y las costumbres locales.',
    extraInfo:
      'Conocer saludos, normas y tradiciones locales ayuda a evitar malentendidos.'
  },
  {
    id: 2,
    title: 'Nuestra solución',
    description:
      'La aplicación ofrece consejos culturales y recomendaciones personalizadas para mejorar la experiencia de viaje y fomentar la comprensión intercultural.',
    extraInfo:
      'La app adaptará su contenido según el país que visites.'
  }
];
