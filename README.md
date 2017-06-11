# MagicMirror Module: ModuleToggle

Hides and shows modules on the [MagicMirror²](https://github.com/MichMich/MagicMirror) by sending a notification

## Config

```
{
	module: 'MMM-ModuleToggle'
}
```

## Hide/Show Modules

You can easily hide or show a module by sending a notification to the module.
Therefore you can for example use the [Magic Mirror Module: Buttons](https://github.com/Jopyth/MMM-Buttons)

### Notification Parameters

You can send a notification with the name ```MODULE_TOGGLE``` and the payload with two lists for the modules to hide and for the modules to show:

```
notification: "MODULE_TOGGLE",
payload: {hide: ["calendar"], show: []}
```

To show the module you need to send the following notification:
```
notification: "MODULE_TOGGLE",
payload: {hide: [], show: ["calendar"]}
```



