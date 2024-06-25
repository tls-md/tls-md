/*

This script returns a list of activity options you could do (each defined by a Markdown file),
depending on how much time you have available.

REQUIRES:
- Obsidian: https://obsidian.md
- Obsidian Dataview plugin: https://blacksmithgu.github.io/obsidian-dataview/
- Obsidian Templater plugin: https://silentvoid13.github.io/Templater/

*/

function returnSWLOptions (tp, word) {
    let targetFile = `"TLS/Words/${word}"`;
    let result = new Array();
    const options = app.plugins.plugins.dataview.api
     .pages(`"TLS/Words/${word}"`)

//    console.log(targetFile)
    options.file.lists.text.forEach((originalString) => {
        try{
        const py = originalString.split(' ')[0].slice(1, -1)
        const synFunc = originalString.split('|')[1].split(']] ')[0]        
        const txt = originalString.substring(originalString.indexOf('**')+2, originalString.lastIndexOf('**'))
        const concept = originalString.substring(originalString.lastIndexOf(' [[')+3, originalString.lastIndexOf(']]'))
        const sp = originalString.substring(originalString.indexOf('[(')+2, originalString.indexOf(')]'))        
        const ret = `${py} ${synFunc} ${txt} [${concept}] (${sp})`        
        result.push(ret)
        } catch (error) {
            console.error(error)
        }


    })

    return result
}

module.exports = returnSWLOptions;