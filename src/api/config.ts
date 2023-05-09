import {createClient} from '@sanity/client';

export const PRO_ID = 'qopfvbdw';
export const DATASET = 'production';

export const client = createClient({
  projectId: PRO_ID,
  dataset: DATASET,
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const CDN_URL = `https://cdn.sanity.io/images/${PRO_ID}/${DATASET}/`;
