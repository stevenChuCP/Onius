export interface SevenZipModule {
  FS: typeof import("fs");
  callMain(args: string[]): number;
  ccall(
    ident: string,
    returnType: string | null,
    argTypes: string[],
    args: (string | number)[],
    opts?: { async?: boolean }
  ): number;
  cwrap(
    ident: string,
    returnType: string | null,
    argTypes: string[]
  ): (...args: (string | number)[]) => number;
}

declare function SevenZip(): Promise<SevenZipModule>;

export default SevenZip;
