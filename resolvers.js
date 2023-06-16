let books = [];

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;
