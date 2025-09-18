// filepath: src/sanity/schemaTypes/blockContent.ts
import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})