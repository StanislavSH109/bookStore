export interface IImageLinks {
  smallThumbnail?: string,
  thumbnail?: string,
}

export interface IBook {
  id: string,
  title: string,
  categories: string[],
  imageLinks: IImageLinks,
}

// {
//   "kind": "books#volume",
//   "id": "ptHZAAAAMAAJ",
//   "etag": "Ul4TjAoeOrY",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/ptHZAAAAMAAJ",
//   "volumeInfo": {
//     "title": "The Lord of the Rings",
//     "authors": [
//       "j.r.r. tolkien",
//       "John Ronald Reuel Tolkien"
//     ],
//     "publisher": "Mariner Books",
//     "publishedDate": "2001",
//     "description": "Contains the complete set of the six books of Lord of the Rings.",
//     "industryIdentifiers": [
//       {
//         "type": "OTHER",
//         "identifier": "PSU:000045256417"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": false
//     },
//     "pageCount": 1176,
//     "printType": "BOOK",
//     "categories": [
//       "Fiction"
//     ],
//     "averageRating": 4.5,
//     "ratingsCount": 11,
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "0.7.1.0.preview.0",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=ptHZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=ptHZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.nl/books?id=ptHZAAAAMAAJ&dq=subject:fantasy&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.nl/books?id=ptHZAAAAMAAJ&dq=subject:fantasy&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=ptHZAAAAMAAJ"
//   },
//   "saleInfo": {
//     "country": "NL",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "NL",
//     "viewability": "NO_PAGES",
//     "embeddable": false,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": false
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=ptHZAAAAMAAJ&hl=&source=gbs_api",
//     "accessViewStatus": "NONE",
//     "quoteSharingAllowed": false
//   }
// }
