import type { IBook } from "@/types/books";

export const getBooks = async(subject: string): Promise<void> => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}`);
    if (response.ok) {
      const data = await response.json();
      const books = data.items.map((item: any) => {
        console.log(item.volumeInfo);
      })
      return books;
    } else {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
  } catch (err) {
    console.log('Ошибка при запросе:', err);
  }

}

//items - полностью весь объект
//items.id - айдишник
//items.volumeInfo - title, publisher, categories[], publisherData, description, authors[], infolink
