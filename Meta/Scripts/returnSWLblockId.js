/*

This script returns a list of activity options you could do (each defined by a Markdown file),
depending on how much time you have available.

REQUIRES:
- Obsidian: https://obsidian.md
- Obsidian Dataview plugin: https://blacksmithgu.github.io/obsidian-dataview/
- Obsidian Templater plugin: https://silentvoid13.github.io/Templater/

*/

function returnSWLblockId (tp, word) {
    let targetFile = `"TLS/Words/${word}"`;
    const words = ['audiobook', 'course'];
    let result = new Array();
    const options = app.plugins.plugins.dataview.api.pages(targetFile)

    options.file.lists.blockId.forEach((swl) => {
       result.push(`[[TLS/Words/${word}#^${swl}|${word}]]`)  
    })

    return result
}

module.exports = returnSWLblockId;