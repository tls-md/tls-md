<%*
let word = tp.file.selection()
let lexent = await tp.system.suggester( tp.user.returnSWLOptions(tp, word),
tp.user.returnSWLblockId(tp, word), false, 
'Select Lexical entity for ' + word
)
%>
<%* if (lexent) {lexent} else {word} %>