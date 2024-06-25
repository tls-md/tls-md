/* 

This script returns a list of activity options you could do (each defined by a Markdown file), 
depending on how much time you have available.

REQUIRES:
- Obsidian: https://obsidian.md
- Obsidian Dataview plugin: https://blacksmithgu.github.io/obsidian-dataview/
- Obsidian Templater plugin: https://silentvoid13.github.io/Templater/
- this folder structure:
  study-materials
    - audiobook
      - Audiobook 1 - Chapter 1.md
      - Audiobook 1 - Chapter 2.md
    - course
      - Course 1 - Lecture 1.md
      - Course 1 - Lecture 2.md
- Each Markdown file should have frontmatter like this:
  ---
  time_required: 30
  type: audiobook
  ---

TO USE:
- Save this in `your-obsidian-vault/scripts`.
- In the Templater plugin settings, choose `scripts` as the folder for user scripts.
- Create a note and paste this in: `<% tp.user.returnStudyOptions(tp, 60) %>`. 
- Replace `60` with the amount of time you have available, in minutes.
- Bring up the Command pane (CMD+P) and select `Templater: Replace templates in the active file`

The script will return a list of options of things you can do, given how much time you have.
*/
function returnStudyOptions (tp, timeAvailable) {
    let totalTimeRequired = 0;
    const types = ['audiobook', 'course'];
    let result = "";

    types.forEach(type => {
        result += `### ${type}:\n\n`;
        const options = app.plugins.plugins.dataview.api
        .pages(`"study-materials/${type}"`)
        .where(page => {
            totalTimeRequired += page.time_required;
            if(totalTimeRequired <= timeAvailable) {
                return true;
            }
            else {
                totalTimeRequired -= page.time_required;
                return false;
            }
        })
    
        options.forEach((option) => {
            result += `- ${option.file.link}: ${option.time_required}\n\n`
        })
        totalTimeRequired = 0;
    })
    
    return result
}
module.exports = returnStudyOptions;