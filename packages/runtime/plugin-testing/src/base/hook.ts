import { createAsyncPipeline, createParallelWorkflow } from '@modern-js/plugin';
import type { TestConfigOperator } from './config/testConfigOperator';

export const jestConfigHook = createAsyncPipeline<
  TestConfigOperator,
  TestConfigOperator
>();

export const afterTestHook = createParallelWorkflow();

export const testingHooks = {
  jestConfig: createAsyncPipeline<TestConfigOperator, TestConfigOperator>(),
  afterTest: createParallelWorkflow(),
};

export type Hooks = {
  jestConfig: typeof jestConfigHook;
  afterTest: typeof afterTestHook;
};
