
import { SanityClient  } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = SanityClient({
    projectid: "", //connect to right project
    dataset: "",// identifes if in dev or prod
    apiVersion: "",
    useCdn: true,
    token: ""
})