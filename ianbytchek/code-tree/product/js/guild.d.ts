// guild.d.ts aka main

/// <reference path="../../dependency/typings/reference.d.ts" />
/// <reference path="../../source/dts/reference.d.ts" />
export { PathConfiguration } from './Configuration/PathConfiguration';
import { GuildConfiguration } from './Configuration/GuildConfiguration';
import { GulpHelp } from 'gulp-help';
export declare function guild(gulp: GulpHelp, configuration: GuildConfiguration): void;