// filepath: src/sanity/schemaTypes/serviceLocation.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceLocation',
  title: 'Service Location',
  type: 'document',
  fields: [
    defineField({name: 'townName', title: 'Town Name', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'townName', maxLength: 96},
    }),
    defineField({name: 'pageContent', title: 'Page Content', type: 'blockContent'}),
    defineField({
      name: 'testimonials',
      title: 'Location-Specific Testimonials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}],
    }),
  ],
})