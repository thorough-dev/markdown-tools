/**
 * Given a Markdown list of checkbox items, returns the list sorted with the
 * completed tasks at the top.
 *
 * @param markdownString String with Markdown list of checkbox items.
 */
// TODO add overload for MDAst
function organizeCompletedTasks(markdownString: string): string {
  const complete = [];
  const incomplete = [];

  for (const item of markdownString.split('\n')) {
    if (item.startsWith('- [x]')) {
      complete.push(item);
    } else {
      incomplete.push(item);
    }
  }

  return [...complete, ...incomplete].join('\n');
}

export default organizeCompletedTasks;
