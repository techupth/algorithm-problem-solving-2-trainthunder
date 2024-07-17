function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = -1;
  for (let i = 0; i < books.length; i++) {
    // console.log(books[i].title);
    if (searchTitle === books[i].title) {
      // console.log(i);
      result += i + 1;
    }
  }
  return result;
}
console.log(
  findBookIndex(
    [
      { title: "A Tale of Two Cities", author: "Charles Dickens" },
      { title: "Brave New World", author: "Aldous Huxley" },
      { title: "Catch-22", author: "Joseph Heller" },
      { title: "Don Quixote", author: "Miguel de Cervantes" },
      { title: "Ender's Game", author: "Orson Scott Card" },
      { title: "Fahrenheit 451", author: "Ray Bradbury" },
      { title: "Gone with the Wind", author: "Margaret Mitchell" },
      { title: "Harry Potter", author: "J.K. Rowling" },
    ],
    "Gone with the Wind"
  )
);
console.log(
  findBookIndex(
    [
      { title: "A Tale of Two Cities", author: "Charles Dickens" },
      { title: "Brave New World", author: "Aldous Huxley" },
      { title: "Catch-22", author: "Joseph Heller" },
      { title: "Don Quixote", author: "Miguel de Cervantes" },
      { title: "Ender's Game", author: "Orson Scott Card" },
      { title: "Fahrenheit 451", author: "Ray Bradbury" },
      { title: "Gone with the Wind", author: "Margaret Mitchell" },
      { title: "Harry Potter", author: "J.K. Rowling" },
    ],
    "The Master Mind"
  )
);
