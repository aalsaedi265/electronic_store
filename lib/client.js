
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "z1k08kn4", //connect to right project
    dataset: "production",// identifes if in dev or prod
    apiVersion: "2023-01-07",//when developed
    useCdn: true,
    token: process.env.sanity_token
})

const builder = imageUrlBuilder(client)

export const urlFor= (source) => builder.image(source)