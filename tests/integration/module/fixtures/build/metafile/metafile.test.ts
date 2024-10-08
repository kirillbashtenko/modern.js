import path from 'path';
import { fs } from '@modern-js/utils';
import { initBeforeTest, runCli } from '../../utils';

initBeforeTest();

describe('metafile', () => {
  const fixtureDir = __dirname;
  it('metafile is true', async () => {
    const configFile = path.join(fixtureDir, './config.ts');
    const { success } = await runCli({
      argv: ['build'],
      configFile,
      appDirectory: fixtureDir,
    });
    expect(success).toBeTruthy();
    const distPath = path.join(fixtureDir, './dist');
    expect(fs.readdirSync(distPath).length === 2).toBeTruthy();
  });
});
