export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte-portfolio/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Epgi7kw8.js","app":"_app/immutable/entry/app.tOA3hVR5.js","imports":["_app/immutable/entry/start.Epgi7kw8.js","_app/immutable/chunks/entry.yOyoIEGm.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.tOA3hVR5.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.jHcpu0S4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
