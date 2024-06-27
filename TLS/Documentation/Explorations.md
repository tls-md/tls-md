# Querying data

The dataview plugin, which is installed here, provides a simple query language, which can be used to explore the content of the TLS.

Here are a few examples to get you started.  In reading view, the queries will be executed, while in the editing mode (live preview), the results will be shown when the cursor leaves the code block.  In *source mode*, all code is shown. The modes can be changed by the buttons in the upper right corner of this pane. 


# Some statistics on Attributions and Lexical entities

## The 20 words with most Attributions 
```dataview
TABLE  WITHOUT ID file.link as Word, file.frontmatter.total as "Attributions", length(file.lists.text) as "Lexical entities"
FROM "TLS/Words"
WHERE file.frontmatter.total > 200 
SORT file.frontmatter.total DESC 
LIMIT 20
```


## The 20 words with most Lexical entities 
```dataview
TABLE WITHOUT ID file.link as Word, file.frontmatter.total as "Attributions", length(file.lists.text) as "Lexical entities"
FROM "TLS/Words"
WHERE file.frontmatter.total > 200 
SORT length(file.lists.text) DESC 
LIMIT 20
```

