---
word: 天下
---

# Information   about the word `$= dv.current().word`
To change the information displayed here enter the word of interest in the front matter property 'word'.

# Query result

```dataviewjs
const page = dv.current()
const all = dv.pages('"TLS/Lexical Entries"')
  .where(p => p.word == page.word)
// const lex = all
//    .groupBy(p => p.concept)
//	.map ( (g) => [g.key, g.rows['file'].length] )
const pages = all
  .groupBy(p => p.concept)
  .map((g) => [
        g.key, 
        g.rows['total'].array().reduce((sum, val) => sum + val, 0),
        g.rows['file'].length
    ]) 
  .sort(p => p[1], 'desc')
  .limit(50)
// this gives the no of attributions  
const atts  = pages.array().reduce( (sum, val) => sum + val[1], 0)  
// we need to count every page in Lex Ent as one occurrence
const overall  = pages.array().reduce( (sum, val) => sum + 1, 0)  
const concepts = pages.length
console.log(pages, overall)

dv.el("p", "[[" + page.word + "]] is used in " + concepts +  " concepts, with a total of " + all.length + " Lexical Entries and " + atts + " attributions." )

// dv.el("p", lex)

dv.table(
    ["Concepts", "Lex ent.", "Atts. count", "Percentage"], // Table headers
	pages.map( p => ['[['+ p[0] + ']]',  p[2] ,p[1], ((p[1] / atts) * 100).toFixed(2) + ' %' ] )
);


```
