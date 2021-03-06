// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>
// 11:46 PM 3/20/2021
/// <reference types="jquery"/>
/// <reference types="node"/>
declare interface IWebWorker {
    postMessage(msg: string): void;
    sendQuery(...args: any[]): void;
    terminate(): void;
    addListener(name: string, listener: (...args: any[]) => void): IWebWorker;
    removeListener(name?: string): IWebWorker;
}
export declare interface IWebWorkerConstructor {
    new(url: string): IWebWorker;
    new(url: string, defaultListener: (ev: MessageEvent) => void): IWebWorker;
    new(url: string, defaultListener: (ev: MessageEvent) => void, onError: (ev: ErrorEvent) => void): IWebWorker;
    readonly prototype: IWebWorker;
}