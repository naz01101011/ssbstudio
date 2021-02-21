export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Setari',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Numele site-ului'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descriere',
      description: 'Descrierea site-ului'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Cuvinte cheie',
      description: 'Cuvinte cheie care descri site-ul, necesare pentru SEO',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Autorul principal',
      title: 'Autor',
      to: [{type: 'author'}]
    }
  ]
}
