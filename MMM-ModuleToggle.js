
Module.register("MMM-ModuleToggle",{
	requiresVersion: "2.1.0",
	notificationReceived: function(notification, payload, sender){
		
		console.log(notification);

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
		}
	}
});	