import path from 'path';
import { fastGlob } from '@modern-js/utils';
import { initBeforeTest, runCli } from '../../utils';

initBeforeTest();

beforeAll(() => {
  jest.setTimeout(30000);
});

describe('splitting usage', () => {
  const fixtureDir = __dirname;
  // https://esbuild.github.io/api/#splitting
  it('splitting is true', async () => {
    const configFile = path.join(fixtureDir, './config.ts');
    const { success } = await runCli({
      argv: ['build'],
      configFile,
      appDirectory: fixtureDir,
    });
    expect(success).toBeTruthy();

    const files = await fastGlob('dist/*', {
      cwd: fixtureDir,
    });
    expect(files.length === 3).toBeTruthy();
  });

  it('cjs splitting', async () => {
    const configFile = path.join(fixtureDir, './config.ts');
    const { success } = await runCli({
      argv: ['build'],
      configFile,
      appDirectory: fixtureDir,
    });
    expect(success).toBeTruthy();
  });
});
