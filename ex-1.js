function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = -1;
  for (let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    if (searchStudent === students[i]) {
      result += i + 1;
    }
  }
  return result;
}
console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "John"
  )
);
console.log(
  findStudentIndex(
    ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"],
    "Andrew"
  )
);
console.log(
  findStudentIndex(
    [
      "Andrew",
      "Bobby",
      "Diana",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "John",
    ],
    "Diana"
  )
);
// ตอบคำถามตรงนี้จ้า
/**
 * Binary Search จะมี Big O เป็น O(log n)
 * แต่ในการทำโจทย์นี้ผมยังจำแพทเทรินของ Binary Search ไม่ได้ครับ
 * เลยทำ Linear Search ไปแทนเพื่อหาคำตอบ
 * ถ้า Linear Search จะมี Big O เป็น O(n) ซึ่งจะเป็นการไล่เช็คแต่ละ index จากซ้ายไปขวา ทีละตัว
 */
