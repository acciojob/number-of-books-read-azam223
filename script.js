const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Use the filter method to create an array containing only read books (readingStatus is true)
  const readBooks = library.filter((book) => book.readingStatus === true);
  // Return the count of read books
  return readBooks.length;
};

alert(numberOfBooksRead()); // This should alert 2
