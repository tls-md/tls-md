# The never-ending circle of modeling

One of the big challenges in creating digital resources is to model the digital representation in a way that is aligned as far as possible to the understanding of the users.

Modeling in this case is the act of defining and relating the entities that are to represent the various aspects of the target, which in this case is the Chinese language in its past and presence and all its aspects as reflected in the written record. 

The model used in the TLS has over the years evolved from an implicit understanding of the target, modified and enhanced through the interaction with the previous iterations of a digital representation and has already gone through a number of major revisions.  This is to be expected, since there will never be a final representation that will completely align with the implicit understanding of all its users; every model/representation/view will foreground some aspects and therefore at the same time obscure some other aspects.  

# Newly evolved views

The TLS model as implemented on the website [HXWD.org](https://hxwd.org) divides the conceptual space of meanings in a hierarchically organized taxonomy of Concepts, where Concept is seen as a semantic category in a comparatively broad sense. 

For example, the Concept [[ABLE]] gives a (1) **definition**, some  (2) **criteria** that delineate the bordering Concepts and words used to express them, (3) formally places the Concept in the taxonomy by naming **antonym**, **hypernym** and **hyponym** well as informal references to related Concepts, (4) names references to published works that informed various aspects of this description and then finally (5) gives the words that have been found to represent aspects of the Concept. For these words, relations to other Concept/Word pairs are noted and then follows for each word a list of **Lexeme entities** (the website uses the term **Syntactic Word Locations** or SWL for short), that bring together the phonetic, syntactic and semantic dimensions in one specific focus point.  This focus point is also where this descriptive part is attached to the actual texts, (through so-called **attributions**) that show how a specific instance of a word in a text has been understood.  

While this view from above is important to gain an understanding of the lay of the land, most of the time users spend in the system [^1]  is on the **textview** page, which represents about 30 lines of text and allows the user to engage in close reading, translating and annotating.  And here, it turns out is a problem with the way the data is organized: When looking at the text location, a natural way would be to work ones way up from the **Lexeme entities** to the Concepts, but the system (currently) requires the reverse. 

So one of the ways the data have been remodeled in this attempt here is to rework the relationship of the different layers of this descriptive system.  The **Words** here are kept separate from the Concepts and are also arranged differently, for every word we have the most frequently **used** Lexeme entities (which might be and most likely are frequently only here because of some bias of the user(s) ) enumerated, with links to the Concepts, but not using the Concepts as ordering criteria. We currently still precede this list with the criteria from the Concepts, but this is merely out of convenience, is not shown for the actual attribution and might be moved to some other place. 

[^1]: This is more of a gut feeling developed while observing users and perusing the access logs, and dealing with inquiries, **not** the result of a scientific study.
