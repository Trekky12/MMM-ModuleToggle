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
            self.changeModuleState(self.config.hide, "hide");
        }
        

        if (notification === "MODULE_TOGGLE") {
            
            Log.log(self.name + " received a module notification: " + notification + " from sender: " + sender.name);
            
            self.changeModuleState(payload.hide, "hide");
            self.changeModuleState(payload.show, "show");
            self.changeModuleState(payload.toggle, "toggle");
        }
        
        self.config.notifications.forEach(function(item){
            if (notification === item.notification) {
                self.changeModuleState(item.hide, "hide");
                self.changeModuleState(item.show, "show");
                self.changeModuleState(item.toggle, "toggle");
            }
            
        });
    },
    
    changeModuleState: function(modulesList, type = "hide"){
        var modulesToHide = MM.getModules();
            
        modulesToHide.enumerate(function(module) {

            var callback = function(){};
            var options = {lockString: self.identifier};
            
            console.log(module);

//            if (true) { // modulesList.includes(module.name)
//                switch(type){
//                case "hide":
//                    Log.log("Hide "+ module.name);
//                    module.hide(self.config.speed, callback, options);
//                    break;
//                case "show":
//                    Log.log("Show "+ module.name);
//                    module.show(self.config.speed, callback, options);
//                    break;
//                case "toggle":
//                    Log.log("Toggle "+ module.name);
//                    if(module.hidden){
//                        module.show(self.config.speed, callback, options);
//                    }else{
//                        module.hide(self.config.speed, callback, options);
//                    }
//                    break;
//            }
//            }
            
        });
        
    }
}); 
