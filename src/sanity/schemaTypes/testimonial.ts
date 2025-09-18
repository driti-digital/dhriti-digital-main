// filepath: src/sanity/schemaTypes/testimonial.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'clientName', title: 'Client Name', type: 'string'}),
    defineField({name: 'businessName', title: 'Business Name', type: 'string'}),
    defineField({name: 'town', title: 'Town', type: 'string'}),
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
  ],
})