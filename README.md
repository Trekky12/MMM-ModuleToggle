# MagicMirror Module: ModuleToggle

Hides and shows modules on the [MagicMirror²](https://github.com/MichMich/MagicMirror) by sending or receiving a notification

## Config

The config is able to hide specific modules on startup:
```
{
    module: 'MMM-ModuleToggle',
    config: {
        hide: ["clock"]
    }
}
```

## Hide/Show Modules through notifications send to this module

You can easily hide or show a module by sending a notification to this module.
Therefore you can for example use the [Magic Mirror Module: Buttons](https://github.com/Jopyth/MMM-Buttons)

### Notification Parameters

You can send a notification with the name ```MODULE_TOGGLE``` and the payload with lists for the modules to hide, show or toggle.

You can hide the calendar and clock module with:

```
notification: "MODULE_TOGGLE",
payload: {hide: ["calendar", "clock"], show: [], toggle:[]}
```

You can show the calendar module with:
```
notification: "MODULE_TOGGLE",
payload: {hide: [], show: ["calendar"], toggle:[]}
```

You can toggle between show and hide with:
payload: {hide: [], show: [], toggle:["clock"]}

## Hide/Show Modules through notifications emitted by other modules

You can hide or show a module through notifications emitted by other modules.
You need to define which notifications should trigger hide/show or toggle of modules state in the config.

An example is below:

```
{
    module: 'MMM-ModuleToggle',
    config: {
        hide: ["clock"],
        notifications: [
                {
                    notification: "MMM-Screencast:RUN-APP",
                    hide: ["calendar"],
                    show: ["clock"]
                    
                }
                ...
        ]
    }
}
```




