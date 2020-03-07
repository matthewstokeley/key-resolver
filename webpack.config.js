const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' )

const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({

	entry: {
		app: [ './index.js' ]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [ { loader: "babel-loader" } ]
			}
		]
	}

})