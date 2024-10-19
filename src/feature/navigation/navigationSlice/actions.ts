import { Navigation } from "..";

export type InitActionType = object;
export type AddActionType = { name?: string, host: string };
export type RemoveActionType = { id: number };
export type UpdateActionType = { id: number, name?: string, host?: string };
export type SetActionType = { navigation: Navigation[] };
export type SaveAllActionType = { navigation: Navigation[] };