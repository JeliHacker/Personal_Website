

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7uSviRcr.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.jHcpu0S4.js","_app/immutable/chunks/entry.yOyoIEGm.js"];
export const stylesheets = [];
export const fonts = [];
