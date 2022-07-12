export interface Article {
  author: string;
  authors: string;
  clean_url:string;
  country: string;
  is_opinion: boolean;
  language: string;
  link: string;
  media: string;
  published_date: string;
  published_date_precision: string;
  rank: number;
  rights: string;
  summary: string;
  title: string;
  topic: string;
  twitter_account: string | null;
  _id: string;
  _score: number;
}

export interface ArticlesResponse {
  articles: Article[];
  status: string;
  total_hits: number;
  page: number;
  total_pages: number;
  page_size: number;
}
