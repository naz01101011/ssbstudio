import { format } from 'date-fns'

export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titlu',
            description: 'Descriptiv dar nu prea lung'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Titlul tehnic',
            description: 'Titlul tehnic, sau Slug in Engleza, e generat automat folosing butonul din partea dreapta',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Data publicarii',
            description: 'Data publicarii poate fi folosita si pentru a programa o publicare in viitor'
        },
        {
            name: 'pinned',
            type: 'boolean',
            title: 'Pozitie permanenta sus',
            description: 'Daca optiunea e activata, articolul ramane in pozitia de sus-dreapta pana la dezactivarea optiunii'
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Imaginea principala a articolului'
        },
        {
            name: 'excerpt',
            type: 'excerptPortableText',
            title: 'Chapeau',
            description:
                'Paragraf de 3-4 randuri, rezumat sau introducere, afisat in pagina principala'
        },
        {
            name: 'authors',
            title: 'Autor',
            type: 'array',
            of: [
                {
                    type: 'authorReference'
                }
            ]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categorie',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                }
            ]
        },
        {
            name: 'body',
            type: 'bodyPortableText',
            title: 'Textul articolului'
        }
    ],
    orderings: [
        {
            name: 'publishingDateAsc',
            title: 'Publishing date new–>old',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'asc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'publishingDateDesc',
            title: 'Publishing date old->new',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'desc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            slug: 'slug',
            media: 'mainImage'
        },
        prepare({ title = 'No title', publishedAt, slug = {}, media }) {
            const dateSegment = format(publishedAt, 'YYYY/MM')
            const path = `/${dateSegment}/${slug.current}/`
            return {
                title,
                media,
                subtitle: publishedAt ? path : 'Missing publishing date'
            }
        }
    }
}
