## Overview

- Total number of Concepts: **`$= dv.pages('"TLS/Concepts"').length` ** 
	- Of these: number of [[Unused concepts|orphaned Concepts]]:  **`$= dv.pages('"TLS/Concepts"').where(p => p.file.inlinks.length < 1).length`** 

## Concepts with the most incoming links
This includes both links in the Concept hierarchy and links from Words.

```dataview 
TABLE length(file.inlinks) as use 
FROM "TLS/Concepts"
WHERE length(file.inlinks) > 1
SORT length(file.inlinks) DESC
LIMIT 50
```
