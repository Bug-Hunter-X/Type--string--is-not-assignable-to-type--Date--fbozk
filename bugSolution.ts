function greet(person: string, date: Date) {
  console.log(`Hello, ${person}! Today is ${date.toDateString()}.`);
}

greet("world", new Date());