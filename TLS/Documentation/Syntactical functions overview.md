## Overview

- Total number of syntactic functions: **`$= dv.pages('"TLS/Core"').length` ** 
	- Of these: number of [[Unused syntactical functions|unused items]]:  **`$= dv.pages('"TLS/Core"').where(p => p.file.inlinks.length < 1).length`** 

## Most frequently used Syntactic functions

```dataview 
TABLE  file.aliases as SynFunc, length(file.inlinks) as use 
FROM "TLS/Core"
WHERE length(file.inlinks) > 1
SORT length(file.inlinks) DESC
LIMIT 50
```
