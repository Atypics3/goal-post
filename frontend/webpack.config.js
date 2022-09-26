// webpack configuration file
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	plugins: [
		new BundleAnalyzerPlugin({
			mode: "none",
			analyzerMode: "disabled",
			generateStatsFile: true,
			statsOptions: { source: false },
		}),
	],
};
