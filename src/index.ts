import { Codebase, Workspace } from '@modular-rocks/workspace';

export default class SlimFast extends Workspace {
  original: CodebaseType;

  refactored: CodebaseType;

  constructor(opts: Options) {
    super(opts);
    this.original = this.newCodeBase(opts);
    this.refactored = this.newCodeBase(opts);
  }

  newCodeBase(opts: Options) {
    return new Codebase(opts);
  }

  defaultOptions(opts: Options) {
    const pipeline: Function[] = opts.pipeline || [];
    this.opts = {
      ...opts,
      pipeline,
    };
    return this.opts;
  }

  async run() {
    const opts = this.defaultOptions(this.opts);
    const files = this.refactored.extractFiles();
    await this.pipeline(files, opts.pipeline, opts);
  }

  save() {
    this.refactored.save();
  }
}
