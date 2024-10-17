import { Navigation } from "..";

export type InitActionType = {};
export type AddActionType = { name?: string, host: string };
export type RemoveActionType = { id: number };
export type UpdateActionType = Navigation;
export type SetActionType = { navigation: Navigation[] };