import type { PageInfo } from "$lib/types/pageInfo";
import { writable } from "svelte/store";

export const pageInfo = writable<PageInfo>({
    pathname: '/',
    title: 'Home',
    description: 'Jimcan Keep'
})