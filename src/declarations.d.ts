declare module '@modular-rocks/slimfast';
interface RandomObject extends Record<string, any> {}
interface FilesContainer extends Record<string, FileContainerType> {}

interface Options {
  pipeline?: Function[];
  src: string;
  extensions: string[];
  ignoredFiles: string[];
  packageContents?: PackageContents;
  packagePath?: string;
  ignoredImports: string[];
  custom?: Custom;
}

interface WorkspaceOpts extends Options {
  files?: [string, string][];
}

interface CodebaseOpts extends Options {
  files: [string, string][];
}

interface WorkspaceType {
  opts: WorkspaceOpts;
}

interface CodebaseType {
  src: string;
  extensions: string[];
  ignoredFiles: string[];
  ignoredImports: string[];
  files: FilesContainer;
  rootName: string;
  srcWithoutRoot: string;
  package: PackageContents;
  dependencies: string[];
  opts: Options;
  replaceRoot: Function;
  saveFile: Function;
  fromJson: Function;
  extractFiles: Function;
  save: Function;
}

interface FileContainerType {
  pathname: string;
  fullPath: string;
  type?: string;
  code: string;
  simple: Boolean;
  hasParent: Boolean;
  codebase: CodebaseType;
  store: FileStore;
  ast?: any;
  parse: Function;
  updateCode: Function;
  print: Function;
  astToCode: Function;
  codeToAST: Function;
  spawn: Function;
  tooSimple: Function;
  addImport: Function;
  save: Function;
}

interface Custom {
  [propter: string]: any;
}

interface State {
  [property: string]: string;
}

type ExtractedNodePath = [RandomObject, RandomObject];

interface FileStore {
  [property: string]: any;
}

declare module 'array-unique' {
  function unique(array: any[]): any[];

  export = unique;
}

// Can take any shape, generately has to be an Object like Node packages
// Ports to any other languages can be formatted
interface PackageContents {
  [property: string]: any;
}
