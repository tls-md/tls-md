
## Concepts without any incoming links
```dataview
TABLE length(file.outlinks)  as "Outgoing links"
FROM "TLS/Concepts"
WHERE length(file.inlinks) < 1
SORT file.name ASC

```

