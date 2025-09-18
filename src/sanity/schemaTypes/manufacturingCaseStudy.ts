// filepath: src/sanity/schemaTypes/manufacturingCaseStudy.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manufacturingCaseStudy',
  title: 'Manufacturing Case Study',
  type: 'document',
  fields: [
    defineField({name: 'clientName', title: 'Client Name', type: 'string'}),
    defineField({name: 'industry', title: 'Industry', type: 'string'}),
    defineField({name: 'challenge', title: 'Challenge', type: 'text'}),
    defineField({name: 'strategy', title: 'Strategy', type: 'text'}),
    defineField({name: 'results', title: 'Results', type: 'text'}),
    defineField({name: 'featuredImage', title: 'Featured Image', type: 'image'}),
    defineField({
      name: 'leadIncreasePercentage',
      title: '% Increase in Leads',
      type: 'number',
    }),
  ],
})