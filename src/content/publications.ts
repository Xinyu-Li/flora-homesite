import data from "./publications.json";

export type Publication = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  doi?: string;
  url?: string;
};

export type PublicationCategory = {
  id: string;
  title: string;
  items: Publication[];
};

type PublicationsFileSchema = {
  categories: PublicationCategory[];
};

const parsedData = data as PublicationsFileSchema;

export const publicationCategories: PublicationCategory[] = parsedData.categories;
