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
        description: 'Activeaza daca bannerul este Wide sau <pe lat>. Daca lasi butonul dezactivat, inseamna ca bannerul este Tall sau <pe inalt> (Bannerele patrate sunt tot de tipul Tall).'
      },
      {
        name: 'bannerimg',
        type: 'image',
        name: 'BannerImg',
        // validation: Rule => Rule.error('Trebuie sa imi dai poza bannerului!').required(),
        description: 'Imaginea folosita ca banner.'
      },
      {
        name: 'url',
        type: 'url',
        title: 'Banner Link',
        // validation: Rule => Rule.error('Trebuie sa dai linkul bannerului!').required(),
        description: 'Linkul deschis atunci cand bannerul este click-uit.'
      }
    ]
  }
  