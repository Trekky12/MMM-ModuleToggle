
Module.register("MMM-ModuleToggle",{
    requiresVersion: "2.1.0",
    defaults: {
        hide: [],
        speed: 1000
    },
    notificationReceived: function(notification, payload, sender){
        var self = this;
        
        if (notification === 'DOM_OBJECTS_CREATED'){
            var hideOnStart = MM.getModules().withClass(self.config.hide);
            
            hideOnStart.enumerate(function(module) {
                var callback = function(){};
                var options = {lockString: self.identifier};
                module.hide(self.config.speed, callback, options);
            });
        }
        

        if (notification === "MODULE_TOGGLE") {
            
            Log.log(self.name + " received a module notification: " + notification + " from sender: " + sender.name);
            
            var hide = MM.getModules().withClass(payload.hide);
            
            hide.enumerate(function(module) {
                Log.log("Hide "+ module.name);
                var callback = function(){};
                var options = {lockString: self.identifier};
                module.hide(self.config.speed, callback, options);
            });
            
            var show = MM.getModules().withClass(payload.show);
            
            show.enumerate(function(module) {
                Log.log("Show "+ module.name);
                var callback = function(){};
                var options = {lockString: self.identifier};
                module.show(self.config.speed, callback, options);
            });
            
            var toggle = MM.getModules().withClass(payload.toggle);
            
            toggle.enumerate(function(module) {
                var callback = function(){};
                var options = {lockString: self.identifier};
                if(module.hidden){
                    module.show(self.config.speed, callback, options);
                }else{
                    module.hide(self.config.speed, callback, options);
                }
            });
            
        }
    }
}); 