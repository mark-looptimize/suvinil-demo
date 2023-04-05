import { TemplateResult } from 'lit';
export interface EntryPoint {
    destination: URL;
    text: string;
    icon: TemplateResult;
}
export declare const entryPoints: Array<EntryPoint>;
