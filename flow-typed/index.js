/* @flow */
/* eslint-disable */

declare module 'flow-typed' {

  declare type ModuleHotStatus =
    | 'idle'
    | 'check'
    | 'prepare'
    | 'ready'
    | 'dispose'
    | 'apply'
    | 'abort'
    | 'fail'
    ;

  declare type ModuleHotStatusHandler = (status: ModuleHotStatus) => any

  declare interface ModuleHot {
    data: any;
    accept(paths?: string | Array<string>, callback?: () => any): void;
    decline(paths?: string | Array<string>): void;
    dispose(callback: (data?: mixed) => any): void;
    addDisposeHandler(callback: (data: mixed) => any): void;
    status(): ModuleHotStatus;
    check(autoApply: boolean | Object): Promise<string[]>; // TODO
    apply(options: Object): Promise<string[]>; // TODO
    addStatusHandler(callback: ModuleHotStatusHandler): void;
    removeStatusHandler(callback: ModuleHotStatusHandler): void;
  }

}

declare module CSSModule {
  declare var exports: { [key: string]: string };
}
