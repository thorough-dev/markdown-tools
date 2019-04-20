import {stripIndent} from 'common-tags';
import organizeCompletedTasks from '../../lists/organizeCompletedTasks';

describe('organizeCompletedTasks()', () => {
  describe('single lists', () => {
    test('move completed tasks to top', () => {
      const LIST = stripIndent`
        - [ ] Item 1
        - [x] Item 2
        - [ ] Item 3
        - [x] Item 4
      `;

      expect(organizeCompletedTasks(LIST)).toEqual(stripIndent`
        - [x] Item 2
        - [x] Item 4
        - [ ] Item 1
        - [ ] Item 3
      `);
    });
  });
});
