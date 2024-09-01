class Library {
    constructor() {
      this.books = []; 
      this.borrowedBooks = new Set();
    }
  
    // Method to add a new book to the library
    addBook(isbn, title, author, year) {
      const book = { isbn, title, author, year };
      this.books.push(book);
      console.log(`Book added: ${title} by ${author}`);
    }
  
    // Method to borrow a book
    borrowBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        console.log(`Book with ISBN ${isbn} not found.`);
        return;
      }
  
      if (this.borrowedBooks.has(isbn)) {
        console.log(`Sorry, the book "${book.title}" is currently borrowed.`);
      } else {
        this.borrowedBooks.add(isbn);
        console.log(`You have borrowed: ${book.title}`);
      }
    }
  
    // Method to return a borrowed book
    returnBook(isbn) {
      if (this.borrowedBooks.has(isbn)) {
        this.borrowedBooks.delete(isbn);
        console.log(`Book with ISBN ${isbn} has been returned.`);
      } else {
        console.log(`Book with ISBN ${isbn} is not currently borrowed.`);
      }
    }
  
    // Method to view all available books
    viewAvailableBooks() {
      const availableBooks = this.books.filter(b => !this.borrowedBooks.has(b.isbn));
      if (availableBooks.length === 0) {
        console.log("No books are currently available.");
      } else {
        console.log("Available Books:");
        availableBooks.forEach(book => {
          console.log(`- ${book.title} by ${book.author} (${book.year})`);
        });
      }
    }
  }
  
  // Example usage:
  const library = new Library();
  
  // Adding books to the library
  library.addBook("1234567890", "Do epic shit", "Ankur warikoo", 2021);
  library.addBook("0987654321", "To Kill a Mockingbird", "Harper Lee", 1960);
  library.addBook("25876013575", "The alchemist", "Paolo coelho", 1988);
  
  // Viewing available books
  library.viewAvailableBooks();
  
  // Borrowing a book
  library.borrowBook("1234567890");
  
  // Attempting to borrow the same book again
  library.borrowBook("1234567890");
  
  // Returning a book
  library.returnBook("1234567890");
  
  // Viewing available books again
  library.viewAvailableBooks();
  