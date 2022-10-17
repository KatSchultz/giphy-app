export interface Gif {
  type: string;
  id: string;
  title: string;
  url: string;
  images: {
    fixed_width: {
      mp4: string;
      url: string;
    };
  };
}

export interface ResponseData {
  data: {
    data: Gif[];
  };
}
