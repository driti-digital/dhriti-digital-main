// filepath: src/sanity/schemaTypes/manufacturingService.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manufacturingService',
  title: 'Manufacturing Service',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({name: 'detailedContent', title: 'Detailed Content', type: 'blockContent'}),
  ],
})