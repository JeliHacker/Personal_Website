

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.AMR_qFEh.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.jHcpu0S4.js"];
export const stylesheets = [];
export const fonts = [];
