export default {
    name: 'banner',
    type: 'document',
    title: 'Banners',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titlul ajuta la organizarea si identificarea bannerelor in Studio.'
      },
      {
        name: 'isWide',
        type: 'boolean',
        title: 'Banner Type',
        validation: Rule => Rule.error('Trebuie sa imi spui tipul bannerului!').required(),
        description: 'Activeaza daca bannerul este Wide sau <pe lat>. Daca lasi butonul dezactivat, inseamna ca bannerul este Tall sau <pe inalt> (Bannerele patrate sunt tot de tipul Tall).'
      },
      {
        name: 'bannerimg',
        type: 'image',
        name: 'BannerImg',
        description: 'Imaginea folosita ca banner.'
      },
      {
        name: 'url',
        type: 'url',
        title: 'Banner Link',
        description: 'Linkul deschis atunci cand bannerul este click-uit.'
      }
    ]
  }
  