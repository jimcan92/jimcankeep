import { writable } from "svelte/store";

export const isBusy = writable(false);
export const error = writable<string | null>(null);