// filepath: src/sanity/schemaTypes/index.ts
import blockContent from './blockContent'
import post from './post'
import caseStudy from './caseStudy'
import testimonial from './testimonial'
import teamMember from './teamMember'
import serviceLocation from './serviceLocation'
import manufacturingService from './manufacturingService'
import manufacturingCaseStudy from './manufacturingCaseStudy'

export const schema = {
  types: [
    post,
    caseStudy,
    testimonial,
    teamMember,
    serviceLocation,
    manufacturingService,
    manufacturingCaseStudy,
    blockContent,
  ],
}