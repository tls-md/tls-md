```dataviewx
TABLE synfunc.syn-func as "Syn. func", synfunc.def as "Def", synfunc.num as "Count"
FROM "TLS/Words"
FLATTEN file.lists as synfunc
SORT synfunc.num DESC
LIMIT 20
```


```dataview
TABLE length(s.sem-feat) as "Count" 
FROM "TLS/Words"
WHERE s.sem-feat
FLATTEN file.lists as s
GROUP BY s.sem-feat
SORT length(s.sem-feat) DESC
LIMIT 10
```