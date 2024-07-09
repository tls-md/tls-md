
## Syntactic functions not used
```dataview
TABLE  file.aliases as "Syntactical function"
FROM "TLS/Core/Syntactic functions"
WHERE length(file.inlinks) < 1
SORT file.aliases ASC

```

## Semantic features not used
```dataview
TABLE  file.aliases as "Semantic feature"
FROM "TLS/Core/Semantic features"
WHERE length(file.inlinks) < 1
SORT file.aliases ASC

```
