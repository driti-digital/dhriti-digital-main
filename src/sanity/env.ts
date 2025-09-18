// filepath: src/sanity/env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-16'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dhriti-digital-marketing-agency'; // Add your project ID here
export const useCdn = false