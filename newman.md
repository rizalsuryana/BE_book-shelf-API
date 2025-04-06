newman run Bookshelf\ API\ Test.postman_collection.json --environment Bookshelf\ API\ Test.postman_environment.json 
newman

Bookshelf API Test

→ [Mandatory] Add Book With Complete Data
  POST http://localhost:9000/books [201 Created, 379B, 18ms]
  ✓  status code should be 201
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value
  ✓  response body data should contain bookId

→ [Mandatory] Add Book With Finished Reading
  POST http://localhost:9000/books [201 Created, 379B, 6ms]
  ✓  status code should be 201
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value
  ✓  response body data should contain bookId

→ [Mandatory] Add Book Without Name
  POST http://localhost:9000/books [400 Bad Request, 361B, 2ms]
  ✓  status code should be 400
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ [Mandatory] Add Book with Page Read More Than Page Count
  POST http://localhost:9000/books [400 Bad Request, 390B, 2ms]
  ✓  status code should be 400
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ [Mandatory] Get All Books
  GET http://localhost:9000/books [200 OK, 491B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains two items
  ✓  the books should have contains only id, name, and publisher property

→ [Mandatory] Get Detail Books With Correct Id
  GET http://localhost:9000/books/uyLh1tSc0Sqpbw9c [200 OK, 626B, 3ms]
  ✓  response code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should an object
  ✓  response body object should contain correct property and value
  ✓  response body data object should contain book object
  ✓  book object should contain correct property and value

→ [Mandatory] Get Detail Finished Book
  GET http://localhost:9000/books/QZxpbzUfyV2jdJaT [200 OK, 626B, 2ms]
  ✓  response code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should an object
  ✓  response body object should contain correct property and value
  ✓  response body data object should contain book object
  ✓  book object should contain correct property and value

→ [Mandatory] Get Detail Books With Invalid Id
  GET http://localhost:9000/books/xxxxx [404 Not Found, 336B, 3ms]
  ✓  response code should be 404
  ✓  response header Content-Type should be application/json
  ✓  response body should an object
  ✓  response body object should contain correct property and value

→ [Mandatory] Update Book With Complete Data
  PUT http://localhost:9000/books/uyLh1tSc0Sqpbw9c [200 OK, 336B, 3ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value
  ✓  when get detail books
  GET http://localhost:9000/books/uyLh1tSc0Sqpbw9c [200 OK, 620B, 2ms]
  ✓  book object should contain updated values

→ [Mandatory] Update Book Without Name
  PUT http://localhost:9000/books/uyLh1tSc0Sqpbw9c [400 Bad Request, 361B, 3ms]
  ✓  status code should be 400
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ [Mandatory] Update Book With Page Read More Than Page Count
  PUT http://localhost:9000/books/uyLh1tSc0Sqpbw9c [400 Bad Request, 390B, 2ms]
  ✓  status code should be 400
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ [Mandatory] Update Book with Invalid Id
  PUT http://localhost:9000/books/xxxxx [404 Not Found, 358B, 3ms]
  ✓  status code should be 404
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ [Mandatory] Delete Book with Correct Id
  DELETE http://localhost:9000/books/uyLh1tSc0Sqpbw9c [200 OK, 333B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value
  ✓  when get detail books
  GET http://localhost:9000/books/uyLh1tSc0Sqpbw9c [404 Not Found, 336B, 4ms]
  ✓  The book should be not found

→ [Mandatory] Delete Finished book
  DELETE http://localhost:9000/books/QZxpbzUfyV2jdJaT [200 OK, 333B, 4ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value
  ✓  when get detail books
  GET http://localhost:9000/books/QZxpbzUfyV2jdJaT [404 Not Found, 336B, 2ms]
  ✓  The book should be not found

→ [Mandatory] Delete Book with Invalid Id
  DELETE http://localhost:9000/books/xxxxx [404 Not Found, 354B, 2ms]
  ✓  status code should be 404
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body should have correct property and value

→ Add Reading and Finished Book
  POST http://localhost:9000/books [201 Created, 379B, 1ms]

→ Add Reading and Unfinished Book with "Dicoding" Name
  POST http://localhost:9000/books [201 Created, 379B, 2ms]

→ Add Unreading Books and Unfinished Book "Dicoding" Name
  POST http://localhost:9000/books [201 Created, 379B, 2ms]

→ Add Unreading Books and Unfinished Book
  POST http://localhost:9000/books [201 Created, 379B, 4ms]

→ [Optional] Get All Reading Books
  GET http://localhost:9000/books?reading=1 [200 OK, 499B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains 2 items
  ✓  the books should have contains only id, name, and publisher property

→ [Optional] Get All Unreading Books
  GET http://localhost:9000/books?reading=0 [200 OK, 498B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains at 2 items
  ✓  the books should have contains only id, name, and publisher property

→ [Optional] Get All Finished Books
  GET http://localhost:9000/books?finished=1 [200 OK, 416B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains 1 items
  ✓  the books should have contains only id, name, and publisher property

→ [Optional] Get All Unfinished Books
  GET http://localhost:9000/books?finished=0 [200 OK, 581B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains 3 items
  ✓  the books should have contains only id, name, and publisher property

→ [Optional] Get All Books Contains "Dicoding" Name
  GET http://localhost:9000/books?name=Dicoding [200 OK, 506B, 2ms]
  ✓  status code should be 200
  ✓  response header Content-Type should be application/json
  ✓  response body should be an object
  ✓  response body object should have correct property and value
  ✓  response body data object should have a array books and contains 2 items
  ✓  the books should have contains only id, name, and publisher property
  GET http://localhost:9000/books [200 OK, 656B, 2ms]
  DELETE http://localhost:9000/books/EaXxiDrl0oeSr5o5   DELETE http://localhost:9000/books/bbXKV1gNfRa96eBo   DELETE http://localhost:9000/books/HqqSoEIwC46DgEv2   DELETE http://localhost:9000/books/UdB_orBgux4GijYw [200 OK, 333B, 3ms]
  ┌
  │ 'Book EaXxiDrl0oeSr5o5 deleted'
  └
[200 OK, 333B, 7ms]
  ┌
  │ 'Book bbXKV1gNfRa96eBo deleted'
  └
[200 OK, 333B, 8ms]
  ┌
  │ 'Book HqqSoEIwC46DgEv2 deleted'
  └
[200 OK, 333B, 8ms]
  ┌
  │ 'Book UdB_orBgux4GijYw deleted'
  └

┌─────────────────────────┬─────────────────┬─────────────────┐
│                         │        executed │          failed │
├─────────────────────────┼─────────────────┼─────────────────┤
│              iterations │               1 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│                requests │              32 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│            test-scripts │              48 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│      prerequest-scripts │              26 │               0 │
├─────────────────────────┼─────────────────┼─────────────────┤
│              assertions │             104 │               0 │
├─────────────────────────┴─────────────────┴─────────────────┤
│ total run duration: 584ms                                   │
├─────────────────────────────────────────────────────────────┤
│ total data received: 4.09kB (approx)                        │
├─────────────────────────────────────────────────────────────┤
│ average response time: 3ms [min: 1ms, max: 18ms, s.d.: 3ms] │
└─────────────────────────────────────────────────────────────┘