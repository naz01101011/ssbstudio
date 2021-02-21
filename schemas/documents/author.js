export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nume'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Nume tehnic',
      description: 'Numele tehnic e necesar in cod',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Poza'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biografie'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
