import path from 'path';
import { expect } from '@modern-js/e2e/playwright';
import { webpackOnlyTest } from '@scripts/helper';
import { build } from '@scripts/shared';

// TODO: needs rspack exportsPresence error
webpackOnlyTest(
  'should throw error by default(exportsPresence error)',
  async () => {
    await expect(
      build({
        cwd: __dirname,
        entry: {
          index: path.resolve(__dirname, './src/index.js'),
        },
      }),
    ).rejects.toThrowError();
  },
);
