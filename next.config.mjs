// next.config.tsはworkflowが読み込めない。mjsが回避策
const PATH_PREFIX=undefined//process.env.NEXT_PUBLIC_REPO//github.ioで公開するならこちら
const nextConfig = {
	output: 'export', // これは動的なサイトを生成してしまうので間違いでexportが正解。そしてmjsにするならばexportも書かなくてよい
	basePath: PATH_PREFIX ? `/${PATH_PREFIX}` : undefined,
	assetPrefix: PATH_PREFIX ? `/${PATH_PREFIX}/` : undefined,
	env: {
		NEXT_PUBLIC_PREFIX: PATH_PREFIX ? `/${PATH_PREFIX}` : "",
	},
	webpack: (config, options) => {
		config.experiments = {
			...config.experiments,
			asyncWebAssembly: true,
			syncWebAssembly: true,
			layers: true,
		};
		config.output.webassemblyModuleFilename = (options.isServer ? '../' : '') + 'static/wasm/webassembly.wasm';
		return config;
	}
};

export default nextConfig;