# MagicMirror Module: MOduleToggle

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

You can send a notification with the name ```MODULE_TOGGLE``` and the following payload to hide the calendar module:

```
notification: "MODULE_TOGGLE",
payload: {modules: ["calendar"], action: "HIDE"}
```

To show the module you need to send the following notification:
```
notification: "MODULE_TOGGLE",
payload: {modules: ["calendar"], action: "SHOW"}
```



