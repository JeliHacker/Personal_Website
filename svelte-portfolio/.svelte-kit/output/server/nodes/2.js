

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.VBFKZEtg.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.jHcpu0S4.js"];
export const stylesheets = [];
export const fonts = [];
