
Module.register("MMM-ModuleToggle",{
	requiresVersion: "2.1.0",
	defaults: {
		hide: []
	},
	notificationReceived: function(notification, payload, sender){
		
		if (notification === 'DOM_OBJECTS_CREATED'){
			var hideOnStart = MM.getModules().withClass(this.config.hide);
			
			hideOnStart.enumerate(function(module) {
				console.log(module);
				module.hide(1000, function(){console.log(this);});
			});
		}
		

		if (notification === "MODULE_TOGGLE") {
			
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
			
			var hide = MM.getModules().withClass(payload.hide);
			
			hide.enumerate(function(module) {
				Log.log("Hide "+ module.name);
				module.hide(1000, function(){});
			});
			
			var show = MM.getModules().withClass(payload.show);
			
			show.enumerate(function(module) {
				Log.log("Show "+ module.name);
				module.show(1000, function(){});
			});
			
			var toggle = MM.getModules().withClass(payload.toggle);
			
			toggle.enumerate(function(module) {
				if(module.hidden){
					module.show(1000, function(){});
				}else{
					module.hide(1000, function(){});
				}
			});
			
		}
	}
});	