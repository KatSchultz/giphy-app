export interface Gif {
  type: string;
  id: string;
  url: string;
}

export interface ResponseData {
  data: {
    data: Gif[];
  };
}
