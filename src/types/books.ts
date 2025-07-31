export interface IImageLinks {
  smallThumbnail?: string,
  thumbnail?: string,
}

export interface IBook {
  id: string,
  title: string,
  description: string,
  imageLinks: IImageLinks,
  infoLink: string,
}
