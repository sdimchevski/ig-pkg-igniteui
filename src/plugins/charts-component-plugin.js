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
		},
		update: function (descriptor) {
		    if (descriptor.propName === "legend") {
                //In order to create legend we need an extra element, which is not created by default from the widget
		        if (!descriptor.propValue.element || descriptor.propValue.element === "") {
		            //Create autoGenerated
		            var generatedId = descriptor.id + "_legend"
		            descriptor.propValue.element = generatedId;
		        }
		        if (window.frames[0].$("#"+descriptor.propValue.element).length === 0) {
		            var ide = this.settings.ide, pos, markup;
		            markup = "<div id=\"" + descriptor.propValue.element + "\"></div>";
		            //No such element
		            //Add the element on designer frame. 
		            window.frames[0].$(descriptor.placeholder).after(markup);
		            //Add it into code view
		            markup = "\t\t" + markup;
		            pos = this.settings.ide.componentById(descriptor.id).htmlMarker.range.end;
		            ide.session.insert({ row: pos.row, column: pos.column }, markup);
		            //Update marker
		        }
		    }
		    this._super(descriptor);
		},
		initComponent: function (descriptor) {
		    var name = this._getWidgetName(descriptor.type);
		    if (window.frames[0].$(descriptor.placeholder)[name]) {
		        window.frames[0].$(descriptor.placeholder)[name](descriptor.options);
		    }
		}
	});
	return IgniteUIChartsPlugin;
});
