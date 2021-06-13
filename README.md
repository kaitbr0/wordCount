# WORD COUNT

<p>Express RESTful server can parse a json object to count characters, words, sentences, paragraphs</p>

## RUN ME

1. npm install
2. node index.js

### Character Count

- Should return 22

```
curl --location --request GET 'http://localhost:5000/api/char' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "Lorem ipsum dolor sit amet"
}'
```

### Word Count

- Should return 5

```
curl --location --request GET 'http://localhost:5000/api/word' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "Lorem ipsum dolor sit amet"
}'

```

### Sentence Count

- Should return 6

```
curl --location --request GET 'http://localhost:5000/api/sentence' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. this is a test! will it return 6?"
}'

```

### Paragraph Count

- Should return 3, despite 5 new lines

```
   curl --location --request GET 'http://localhost:5000/api/paragraph' \
   --header 'Content-Type: application/json' \
   --data-raw '{
   "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. this is a test! i hope so? \n \n \n this is another line i guess"
   }'
```

### TO-DO

1. ~~Character Count~~
2. ~~Word Count~~
3. ~~Sentence Count~~
4. ~~Paragraph Count~~
5. Bigrams (counts of unique pairs of words)
6. Come up with your own features! Use this as an opportunity to show off! We’ll be impressed by
   creative, well-presented solutions.
