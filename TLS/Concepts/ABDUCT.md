---
labels:
---

# Definition
CATCH A HUMAN by FORCING him to FOLLOW ONE. 
# Criteria and general notes
# Ontology

## Hypernym
[[CATCH]]
## See also
[[HOSTAGE]]
[[RAPE]]
[[RAPE]]

# Words
```dataview
TABLE WITHOUT ID file.name as Word, lex.text as "Lexical Entity"
FROM [[]] and "TLS/Words"
FLATTEN file.lists as lex
WHERE contains(lex.text, this.file.name)
SORT Word ASC
LIMIT 100
```