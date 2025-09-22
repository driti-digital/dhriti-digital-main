export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-16'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
// This is the corrected Project ID from your Sanity dashboard
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'q1kpg1i8'
export const useCdn = false