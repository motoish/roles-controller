import { web, javascript } from 'projen'

const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'roles-controller',
  projenrcTs: true,
  pullRequestTemplateContents: [
    'Fix#',
    '',
    '## :point_right: Checkpoint',
    '',
    '## :memo: Changelog',
    '',
  ],
  prettier: true,
  prettierOptions: {
    settings: {
      semi: false,
      singleQuote: true,
    },
  },
  deps: [
    'axios@1.7.7',
    'react@18.3.1',
    'react-dom@18.3.1',
    '@babel/plugin-proposal-private-property-in-object@7.21.11',
    'web-vitals@4.2.3',
  ],
  devDeps: [
    'husky@^9.1.5',
    'lint-staged@^15.2.10',
    'typescript@5.6.2',
    '@types/react@18.3.5',
    '@types/react-dom@18.3.0',
    'jest@29.7.0',
    '@testing-library/react@16.0.1',
    '@testing-library/jest-dom@6.5.0',
  ],
  packageName: 'roles-controller',
  packageManager: javascript.NodePackageManager.BUN,
})

project.synth()
