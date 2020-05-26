// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module 'GoogleCloudStorageAdaptor' {
    interface LocalFileAdapterConfig {
        src: string;
        path?: string;
        getFilename?: (options: { id: string; originalFilename: string }) => string;
    }

    class LocalFileAdapter {
        constructor(options: LocalFileAdapterConfig);

        save(params: {
            stream: any;
            filename?: string;
            id: string;
        }): Promise<{ filename: string; id: string }>;
        publicUrl(params: { filename: string }): string;
    }

    interface CloudFileAdapterConfig {
        cloudName: string;
        keyfileName: string;
        bucket?: string;
    }

    class CloudFileAdapter {
        constructor(options: CloudFileAdapterConfig);

        save(params: {            stream: any;
            filename?: string;
            id: string;
        }): Promise<{ filename: string; id: string }>;
        publicUrl(params: { filename: string }): string;
    }
}
