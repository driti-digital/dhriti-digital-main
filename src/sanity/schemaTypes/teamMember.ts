// filepath: src/sanity/schemaTypes/teamMember.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
    defineField({name: 'photo', title: 'Photo', type: 'image'}),
    defineField({name: 'localConnection', title: 'Local Connection Text', type: 'text'}),
  ],
})