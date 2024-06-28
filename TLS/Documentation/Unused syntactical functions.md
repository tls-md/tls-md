
## Syntactic functions not used
```dataview
TABLE  file.aliases as "Syntactical function"
FROM "TLS/Core"
WHERE length(file.inlinks) < 1
SORT file.aliases ASC

```

