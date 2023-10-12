Module.register("MMM-ModuleToggle",{
    requiresVersion: "2.1.0",
    defaults: {
        hide: [],
        speed: 1000,
        notifications: []
    },
    notificationReceived: function(notification, payload, sender){
        var self = this;
        
        if (notification === 'DOM_OBJECTS_CREATED'){
            self.changeModuleState(self.config.hide, "hide", self.config.speed);
        }
        

        if (notification === "MODULE_TOGGLE") {
            
            Log.log(self.name + " received a module notification: " + notification + " from sender: " + sender.name);
            
            self.changeModuleState(payload.hide, "hide", self.config.speed);
            self.changeModuleState(payload.show, "show", self.config.speed);
            self.changeModuleState(payload.toggle, "toggle", self.config.speed);
        }
        
        self.config.notifications.forEach(function(item){
            if (notification === item.notification) {
                self.changeModuleState(item.hide, "hide", self.config.speed);
                self.changeModuleState(item.show, "show", self.config.speed);
                self.changeModuleState(item.toggle, "toggle", self.config.speed);
            }
            
        });
    },
    
    changeModuleState: function(modulesList, type = "hide", speed){
        var modulesToHide = MM.getModules();
            
        modulesToHide.enumerate(function(module) {

            var callback = function(){};
            var options = {lockString: self.identifier};
            if (modulesList.includes(module.name) || modulesList.includes(module.identifier)) {
                switch(type){
                case "hide":
                    Log.log("Hide "+ module.name);
                    module.hide(speed, callback, options);
                    break;
                case "show":
                    Log.log("Show "+ module.name);
                    module.show(speed, callback, options);
                    break;
                case "toggle":
                    Log.log("Toggle "+ module.name);
                    if(module.hidden){
                        module.show(speed, callback, options);
                    }else{
                        module.hide(speed, callback, options);
                    }
                    break;
            }
            }
            
        });
        
    }
}); 
