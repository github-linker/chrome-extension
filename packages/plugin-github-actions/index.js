import { join } from 'path';
import { GITHUB_ACTIONS } from '@octolinker/helper-grammar-regex-collection';

export default {
  name: 'GitHubActions',

  resolve(path, [target]) {
    if (!path.includes('.github/workflows')) {
      return '';
    }

    if (target.startsWith('.')) {
      const [, org, repo, , sha] = path.split('/');

      return `{BASE_URL}/${join(org, repo, 'tree', sha, target)}`;
    }

    return `{BASE_URL}/${target}`;
  },

  getPattern() {
    return {
      pathRegexes: [/\.ya?ml$/],
      githubClasses: [],
    };
  },

  getLinkRegexes() {
    return GITHUB_ACTIONS;
  },
};
