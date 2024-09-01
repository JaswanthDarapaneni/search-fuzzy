const { fuzzySearch } = require('../../dist/fuzzy.js'); // Adjust the path as needed

const data = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, isbn: "978-0743273565" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, isbn: "978-0060935467" },
  { title: "1984", author: "George Orwell", publicationYear: 1949, isbn: "978-0451524935" },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, isbn: "978-1503290563" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationYear: 1951, isbn: "978-0316769488" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", publicationYear: 1954, isbn: "978-0544003415" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", publicationYear: 1937, isbn: "978-0345339683" },
  { title: "The Chronicles of Narnia", author: "C.S. Lewis", publicationYear: 1950, isbn: "978-0060234812" },
  { title: "Brave New World", author: "Aldous Huxley", publicationYear: 1932, isbn: "978-0060850524" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", publicationYear: 1953, isbn: "978-1451673319" },
  { title: "Animal Farm", author: "George Orwell", publicationYear: 1945, isbn: "978-0451526342" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", publicationYear: 1967, isbn: "978-0060883287" },
  { title: "The Shining", author: "Stephen King", publicationYear: 1977, isbn: "978-0307743657" },
  { title: "It", author: "Stephen King", publicationYear: 1986, isbn: "978-0452284290" },
  { title: "The Da Vinci Code", author: "Dan Brown", publicationYear: 2003, isbn: "978-0307474278" },
  { title: "Angels and Demons", author: "Dan Brown", publicationYear: 2000, isbn: "978-0743486480" },
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", publicationYear: 2005, isbn: "978-0307454546" },
  { title: "Gone Girl", author: "Gillian Flynn", publicationYear: 2012, isbn: "978-0307588371" },
  { title: "The Hunger Games", author: "Suzanne Collins", publicationYear: 2008, isbn: "978-0439023528" },
  { title: "Mockingjay", author: "Suzanne Collins", publicationYear: 2010, isbn: "978-0439023511" },
  { title: "Divergent", author: "Veronica Roth", publicationYear: 2011, isbn: "978-0062024039" },
  { title: "The Maze Runner", author: "James Dashner", publicationYear: 2009, isbn: "978-0385737954" },
  { title: "Ready Player One", author: "Ernest Cline", publicationYear: 2011, isbn: "978-0307887443" },
  { title: "Ender's Game", author: "Orson Scott Card", publicationYear: 1985, isbn: "978-0812550702" },
  { title: "Foundation", author: "Isaac Asimov", publicationYear: 1951, isbn: "978-0553293357" },
  { title: "Neuromancer", author: "William Gibson", publicationYear: 1984, isbn: "978-0441569595" },
  { title: "Snow Crash", author: "Neal Stephenson", publicationYear: 1992, isbn: "978-0553380958" },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", publicationYear: 1969, isbn: "978-0441007312" },
  { title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", publicationYear: 1968, isbn: "978-0345404473" },
  { title: "Ubik", author: "Philip K. Dick", publicationYear: 1969, isbn: "978-0671690042" },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", publicationYear: 1979, isbn: "978-0345391803" },
  { title: "Good Omens", author: "Neil Gaiman and Terry Pratchett", publicationYear: 1990, isbn: "978-0060853982" },
  { title: "Neverwhere", author: "Neil Gaiman", publicationYear: 1996, isbn: "978-0380789048" },
  { title: "American Gods", author: "Neil Gaiman", publicationYear: 2001, isbn: "978-0380789031" },
  { title: "The Sandman", author: "Neil Gaiman", publicationYear: 1989, isbn: "978-1563892805" }
];
const fields = [];
const query = { query: 'consequatur qui cupiditate rerum quia soluta' };

const apiConfig = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  useApi: true,
  headers: {
    Authorization: 'Bearer your-token',
    Accept: 'application/json',
    'Custom-Header': 'custom-value' // Additional custom headers
  },
  params: {
    id: 1,
  }
};
/**
 * Performs a fuzzy search on the provided data using the specified fields, query, and API configuration.
 * 
 * @param {Array<Object>} data - The data to search.
 * @param {Array<string>} fields - The fields to search within the data.
 * @param {Object} query - The search query.
 * @param {Object} apiConfig - The API configuration to use for the search.
 * @param {Object} [options] - Additional options for the search.
 * @param {number} [options.maxResults] - The maximum number of results to return.
 * @returns {Promise<Array<Object>>} - The search results.
 */
fuzzySearch(data, fields, query, apiConfig, { maxResults: 3 }).then(results => {
  console.log(results);
}).catch(error => {
  console.error(error);
});
