import type { AppThemeMode } from "$lib/types/theme";
import { writable } from "svelte/store";

export const appThemeMode = writable<AppThemeMode>('dark')


function setMode(dark = true, initial = false) {
    const classes = document.documentElement.classList;
    if (dark) {
        if (!initial) {
            classes.remove('light');
        }
        classes.add('dark');
        appThemeMode.set('dark');
        window?.localStorage.setItem('theme', 'dark');
    } else {
        if (!initial) {
            classes.remove('dark');
        }
        classes.add('light');
        appThemeMode.set('light');
        window?.localStorage.setItem('theme', 'light');
    }
}

export function applyTheme(mode: AppThemeMode = null) {
    const classes = document.documentElement.classList;

    if (mode) {
        if (classes.contains(mode)) {
            setMode(mode === 'dark');
        } else {
            setMode(mode === 'dark', true);
        }
    } else {
        if (classes.contains('dark')) return setMode(false);
        if (classes.contains('light')) return setMode();
        setMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, true);
    }
}