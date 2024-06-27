# Words
```dataview
TABLE lex.text as "Lexical Entity"
FROM [[]] and "TLS/Words"
FLATTEN file.lists as lex
WHERE contains(lex.text, this.file.name)
SORT Word ASC
LIMIT 100
```