# Bookshelf API Submission

Terdapat 7 kriteria utama yang harus Anda penuhi dalam membuat proyek Bookshelf API.

---

### Kriteria 1 : Aplikasi menggunakan port 9000

Aplikasi yang Anda buat harus menggunakan port `9000`. Jika komputer yang Anda gunakan untuk membuat submission tidak bisa memakai port `9000`, buatlah submission dengan port lain, lalu ketika submission hendak dikirimkan silakan ganti portnya ke `9000`.

---

### Kriteria 2 : Aplikasi dijalankan dengan perintah `npm run start`

Aplikasi yang Anda buat harus memiliki runner script `start`. Cara membuatnya, Anda tambahkan properti `start` ke dalam properti `scripts` pada `package.json` seperti berikut:

```json
{
  "name": "submission",
  ...
  "scripts": {
    "start": "node src/server.js"
  }
}
```

Pastikan aplikasi **tidak dijalankan dengan menggunakan nodemon**. Jika Anda ingin menggunakan `nodemon` dalam proses development, masukkan `nodemon` ke dalam runner script lain, contohnya:

```json
{
  "name": "submission",
  ...
  "scripts": {
    "start": "node src/server.js",
    "start-dev": "nodemon src/server.js"
  }
}
```

---

### Kriteria 3 : API dapat menyimpan buku

API yang Anda buat harus dapat menyimpan buku melalui route:

- **Method** : `POST`  
- **URL** : `/books`

**Body Request:**

```json
{
  "name": "string",
  "year": number,
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": number,
  "readPage": number,
  "reading": boolean
}
```

**Contoh objek buku yang disimpan:**

```json
{
  "id": "Qbax5Oy7L8WKf74l",
  "name": "Buku A",
  "year": 2010,
  "author": "John Doe",
  "summary": "Lorem ipsum dolor sit amet",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  "finished": false,
  "reading": false,
  "insertedAt": "2021-03-04T09:11:44.598Z",
  "updatedAt": "2021-03-04T09:11:44.598Z"
}
```

**Properti yang diolah di sisi server:**

- `id` : gunakan `nanoid@3` → `npm install nanoid@3`
- `finished` : `true` bila `pageCount === readPage`
- `insertedAt` dan `updatedAt` : gunakan `new Date().toISOString()`

**Validasi:**

- Jika `name` tidak dilampirkan:

```json
Status Code: 400
{
  "status": "fail",
  "message": "Gagal menambahkan buku. Mohon isi nama buku"
}
```

- Jika `readPage > pageCount`:

```json
Status Code: 400
{
  "status": "fail",
  "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- Jika berhasil ditambahkan:

```json
Status Code: 201
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "1L7ZtDUFeGs7VlEt"
  }
}
```

---

### Kriteria 4 : API dapat menampilkan seluruh buku

- **Method** : `GET`  
- **URL** : `/books`

**Contoh response:**

```json
Status Code: 200
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "1L7ZtDUFeGs7VlEt",
        "name": "Buku B",
        "publisher": "Dicoding Indonesia"
      },
      {
        "id": "K8DZbfI-t3LrY7lD",
        "name": "Buku C",
        "publisher": "Dicoding Indonesia"
      }
    ]
  }
}
```

Jika belum ada buku:

```json
{
  "status": "success",
  "data": {
    "books": []
  }
}
```

---

### Kriteria 5 : API dapat menampilkan detail buku

- **Method** : `GET`  
- **URL** : `/books/{bookId}`

**Jika buku tidak ditemukan:**

```json
Status Code: 404
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

**Jika buku ditemukan:**

```json
Status Code: 200
{
  "status": "success",
  "data": {
    "book": {
      "id": "aWZBUW3JN_VBE-9I",
      "name": "Buku A Revisi",
      "year": 2011,
      "author": "Jane Doe",
      "summary": "Lorem Dolor sit Amet",
      "publisher": "Dicoding",
      "pageCount": 200,
      "readPage": 26,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-05T06:14:28.930Z",
      "updatedAt": "2021-03-05T06:14:30.718Z"
    }
  }
}
```

---

### Kriteria 6 : API dapat mengubah data buku

- **Method** : `PUT`  
- **URL** : `/books/{bookId}`

**Body Request:**

```json
{
  "name": "string",
  "year": number,
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": number,
  "readPage": number,
  "reading": boolean
}
```

**Validasi gagal:**

- Jika `name` tidak diisi:

```json
Status Code: 400
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```

- Jika `readPage > pageCount`:

```json
Status Code: 400
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

- Jika `id` tidak ditemukan:

```json
Status Code: 404
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Id tidak ditemukan"
}
```

**Jika berhasil:**

```json
Status Code: 200
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

---

### Kriteria 7 : API dapat menghapus buku

- **Method** : `DELETE`  
- **URL** : `/books/{bookId}`

**Jika `id` tidak ditemukan:**

```json
Status Code: 404
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

**Jika berhasil dihapus:**

```json
Status Code: 200
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
