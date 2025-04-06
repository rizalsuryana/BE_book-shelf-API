const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount){
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  //   Masukan buku kedalam array dengan push
  const newBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    finished,
    insertedAt,
    updatedAt
  };
  //   push
  books.push(newBook);
  //   cek apakah berhasil di pushe
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess){
  //   jika berhasil push

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data : {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  //   apabila gagal ditambahkan
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan'
  });
  response.code(500);
  return response;
};

//! Menampilkan semua buku
const getAllBooksHandler = (request, h) => {
  const {
    name,
    reading,
    finished
  } = request.query;

  let filteredBooks = books;

  //   filter by name
  if (name){
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  //   filter berdasarkan reading (pastikan query string "0"/"1" dikonversi ke boolean)
  if (reading !== undefined) {
    const isReading = reading === '1';
    filteredBooks = filteredBooks.filter((book)=> book.reading === isReading);
  }

  //   filter berdasarkan finished
  if (finished !== undefined) {
    const isFinisihed = finished === '1';
    filteredBooks = filteredBooks.filter((book)=> book.finished === isFinisihed);
  }

  //   hanya mengambil proferti yang dibutuhkan
  const booksResponse = filteredBooks.map((book)=> ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: booksResponse,
    },
  });
  response.code(200);
  return response;

};


// Menampilkan detail buku
const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((b)=> b.id === bookId);

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: {
      book
    }
  }).code(200);
};


// Mengubah data buku
const editBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400);
  }

  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404);
  }

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  books[index] = {
    ...books[index],
    name, year, author, summary, publisher,
    pageCount, readPage, reading,
    finished, updatedAt,
  };

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui'
  }).code(200);
};


// Menghapus buku
const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  books.splice(index, 1);

  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
};