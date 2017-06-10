
Module.register("MMM-ModuleToggle",{
	requiresVersion: "2.1.0",
	notificationReceived: function(notification, payload, sender){
		
		console.log(notification);

		if (notification === "MODULE_TOGGLE") {
			
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
			
			var modules = MM.getModules().withClass(payload.modules);
			
			modules.enumerate(function(module) {
				Log.log(module.name);
				if (payload.action === "HIDE"){
					module.hide(1000, function(){});
				}else if (payload.action === "SHOW"){
					module.show(1000, function(){});
				}
				
			});
		}
	}
});	