export declare function resolve(specifier: string, parentModuleURL: string, defaultResolver: (specifier: string, parentModuleURL: string) => string): Promise<string | {
    url: string;
    format: string;
}>;
