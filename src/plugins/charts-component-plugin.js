define (["./_default-component-plugin"], function (DefaultPlugin) {
	var IgniteUIChartsPlugin = IgniteUIChartsPlugin || DefaultPlugin.extend({
		getPropValue: function (descriptor) {
			if (descriptor.comp && descriptor.propName === "circleMarkerTemplate") {
				var prop = descriptor.comp.options[descriptor.propName];
				if (!prop) {
					prop = this._super(descriptor);
				}
				return prop;
			}
			if (descriptor.propValue) {
				var prop = descriptor.propValue;
				if (!prop) {
					prop = this._super(descriptor);
				}
				return prop;
			} else {
				return this._super(descriptor);
			}
		}
	});
	return IgniteUIChartsPlugin;
});
