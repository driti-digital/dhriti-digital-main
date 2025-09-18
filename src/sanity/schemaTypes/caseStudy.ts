// filepath: src/sanity/schemaTypes/caseStudy.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({name: 'clientName', title: 'Client Name', type: 'string'}),
    defineField({name: 'industry', title: 'Industry', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'challenge', title: 'Challenge', type: 'text'}),
    defineField({name: 'strategy', title: 'Strategy', type: 'text'}),
    defineField({name: 'results', title: 'Results', type: 'text'}),
    defineField({name: 'featuredImage', title: 'Featured Image', type: 'image'}),
  ],
})