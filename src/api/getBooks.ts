import type { IBook } from "@/types/books";

export const getBooks = async(subject: string): Promise<IBook[]> => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}`);
    if (!response.ok) {
        throw new Error(`'Ошибка загрузки данных:', ${response.status}`)
      }

    const data = await response.json();
    if (!data.items) return [];

    const books: IBook[] = data.items.map((item: any) => {
      const info = item.volumeInfo || {};
      return {
        id: item.id,
        title: info.title,
        categories: info.categories || [],
        imageLinks: {
          smallThumbnail: info.imageLinks?.smallThumbnail || '',
          thumbnail: info.imageLinks?.thumbnail || ''
        }
      };
    });

    return books;

  } catch (err) {
    console.log('Ошибка при запросе:', err);
    return [];
  }

}

//items - полностью весь объект
//items.id - айдишник
//items.volumeInfo - title, publisher, categories[], publisherData, description, authors[], infolink
