---
title: "Postmonger Events Reference"
domain: mc-app-development
topic: postmonger-events-reference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.215Z
estimatedTokens: 2292
keywords: [Postmonger, Events, any, custom, journey, component, loads, file, app, acts, mediator, configuration, iframe, Builder, Broadcast]
---

# Postmonger Events Reference

> Postmonger is required for use with any custom journey component. It loads from a custom .js file in your app and acts as a mediator between your configuration app in the iframe and Journey Builder.

# Postmonger Events Reference

Postmonger is required for use with any custom journey component. It loads from a custom .js file in your app and acts as a mediator between your configuration app in the iframe and Journey Builder.

-   [Events Broadcast by the Custom Activity](#events-broadcast-by-the-custom-activity)
-   [Events Broadcast by Journey Builder](#events-broadcast-by-journey-builder)

## Events Broadcast by the Custom Activity

`ready`

```
connection.trigger('ready');
```

-   Called any time there is load time required between Journey Builder and the custom application (on iFrame load, and whenever a Next or Back button is clicked).
-   Upon calling `ready` for the first time, Journey Builder responds by calling the event `initActivity` or `initEvent` and passing an activity definition JSON payload.

`requestTokens`

```
connection.trigger('requestTokens');
```

-   May be called at any time, typically on page load.
-   In response, Journey Builder broadcasts `requestedTokens` with a tokens payload.

`requestEndpoints`

```
connection.trigger('requestEndpoints');
```

-   May be called at any time, typically on page load.
-   In response, Journey Builder broadcasts `requestedEndpoints` with a REST endpoint payload.

`nextStep`

```
connection.trigger('nextStep');
```

-   Called in response to `clickedNext` if there are no validation failures.

`prevStep`

```
connection.trigger('prevStep');
```

-   Called in response to `clickedBack` if there are no validation failures.

`requestCulture`

```
connection.trigger('requestCulture');
```

-   May be called any time, typically on page load.
-   In response, Journey Builder broadcasts `requestedCulture` with the language and culture code.

`updateSteps`

```
connection.trigger('updateSteps', [ <step objects> ]);
```

-   Called if the configuration flow needs to change, for instance, when a step in the configuration flow should be shown or hidden based on user input.
-   Pass an array of steps, each with the format: `{ key: 'step1', label: 'Step 1', active: true }`
-   `label`
    -   If the value matches an entry in one of the `lang` objects in the custom application's config.json, the localized text will be shown.
-   `active`
    -   Valid values: true, false (boolean)
    -   If set to false, the step is hidden from the wizard and skipped during step navigation.

`updateButton`

```
connection.trigger('updateButton', { button: 'next', text: 'done', visible: true });
```

-   Called any time `clickedNext` or `clickedBack` is called by Journey Builder. May also be called programmatically, for instance, to disable the Next button if the user does not have a valid entry for a given field.
-   `button`
    -   Valid values: 'next', 'back'
-   `text`
    -   Only applicable for the 'next' button.
    -   Valid values: 'next', 'done' (Journey Builder provides i18n text)
    -   Custom Events may not edit the text, as there are always steps following the custom event's configuration steps.
-   `visible`
    -   Only applicable for the 'back' button.
    -   Valid values: true, false (boolean)
-   `enabled`
    -   Valid values: true, false (boolean)

`updateActivity` or `updateEvent`

```
var payload = {};

...
// Set payload to the response received on 'initActivity'
// Make changes based on user input
...

connection.trigger('updateActivity', payload);
```

-   Called when the activity modal should be closed, with the data saved to the activity on the canvas.
-   Expects an activity definition payload to be passed.
    -   `payload.metaData.isConfigured` must be set to `true` for the journey to recognize the activity as fully configured (required for activation).
-   Calling `updateActivity` at any time will skip any remaining configuration steps.

`destroy`

```
connection.trigger('destroy');
```

-   Currently only works for `runningModal`.
-   Causes the modal window to close.

`requestInteractionDefaults`

```
connection.trigger('requestInteractionDefaults');
```

-   May be called at any time. Typically called on page load. Only required in order to receive the defaults selected by Channel Address Priority.
-   In response, Journey Builder fires `requestedInteractionDefaults` with the current journey default settings.

`requestInteraction`

```
connection.trigger('requestInteraction');
```

-   May be called at any time.
-   If the response code is 200 (OK), Journey Builder fires `requestedInteraction`.

`requestTriggerEventDefinition`

```
connection.trigger('requestTriggerEventDefinition');
```

-   May be called at any time.
-   If the response code is 200 (OK), Journey Builder fires `requestedTriggerEventDefinition`.

## Events Broadcast by Journey Builder

`init*`

```
connection.on('initActivity', function(payload) { ... });
```

-   Context-dependent aliases
    -   Activity: `initActivity`
    -   Event: `initEvent`
    -   Running Hover: `initActivityRunningHover`
    -   Running Modal: `initActivityRunningModal`
-   Broadcast in response to the first `ready` event called by the custom application. This is typically done on `$(window).ready()`.
-   Response (`payload`): `{ name: 'MyActivity', metaData: {}, arguments: {}, configurationArguments: {}, outcomes: [], errors: [] }`
    -   The `errors` property contains either an array of validation error messages specific to the activity or the value `null`.
-   When the activity is dragged from the activity list initially (meaning that it has no existing data), the default activity structure is pulled from the custom application's config.json. If the activity is a configured activity, the existing saved JSON structure of the activity is passed.

`requestedTokens`

```
connection.on('requestedTokens', function(tokens) { ... });
```

-   Broadcast in response to a `requestTokens` event called by the custom application. Journey Builder passes back an object containing both a legacy token and a Fuel2 token.
-   Response (`tokens`): `{ token: <legacy token>, fuel2token: <fuel api token> }`

`requestedEndpoints`

```
connection.on('requestedEndpoints', function(endpoints) { ... });
```

-   Broadcast in response to a `requestEndpoints` event called by the custom application. Journey Builder passes back an object containing a REST host URL.
-   Response (`endpoints`): `{ restHost: <url> }` i.e. "rest.s1.qa1.exacttarget.com"

`clickedNext`

```
connection.on('clickedNext', function() { ... });
```

-   Broadcast when the next button has been clicked on the configuration modal. The activity should respond by calling `nextStep` (or `ready`, if validation failed, and the custom activity wants to prevent navigation to the next step).

`clickedBack`

```
connection.on('clickedBack', function() { ... });
```

-   Broadcast when the back button has been clicked on the configuration modal. The activity should respond by calling `prevStep` (or `ready`, if validation failed, and the custom activity wants to prevent navigation to the previous step).

`gotoStep`

```
connection.on('gotoStep', function(step) { ... });
```

-   Broadcast when a new step has been loaded (either via button navigation, or the user clicking on a step via the wizard). Returns a `step` payload.
-   Response: `{ key: 'step1', label: 'Step 1' }`

`requestedCulture`

```
connection.on('requestedCulture', function(cultureCodeString) { ... });
```

-   Broadcast in response to a `requestCulture` event called by the custom activity.
-   Response (`cultureCodeString`): `en-US`, `de-DE`, `pt-BR`, etc.

`requestedInteractionDefaults`

```
connection.on('requestedInteractionDefaults', function(settings) { ... });
```

-   Fired in response to a `requestInteractionDefaults` event called by the Custom Activity. Journey Builder passes back an object containing the current journey default settings for activities.
-   Default Response: `{ email: [ "{{Contact.Default.Email}}" ] }`
-   Sample Response: `{ email: [ "{{Event.my-event-key.SubmittedEmailAddress}}", "{{Contact.Default.Email}}" ] }`

`requestedInteraction`

```
connection.on('requestedInteraction', function(interaction) { ... });
```

-   Fired in response to a `requestInteraction` event called by the Custom Activity. Journey Builder passes back an object containing the current journey. See the Journey Spec for an example of the response body format.
-   Response: `{ activities: [...], defaults: {}, ...}`

`requestedTriggerEventDefinition`

```
connection.on('requestedTriggerEventDefinition', function(eventDefinitionModel) { ... });
```

-   Fired in response to a `requestTriggerEventDefinition` event called by the Custom Activity. Journey Builder passes back either an object containing the current Entry Source Event Definition Model, or null.
-   Response: `{ id: '0000-0000-000-0001', name: 'my first event definition' ...}`

## Related Items

-   [Get Postmonger on Github](https://github.com/kevinparkerson/postmonger)
-   [Example REST Activity Using Postmonger](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm)
-   [Journey Specification](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/getting-started-spec.htm)

## Related Topics

- Example REST Activity Using Postmonger (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm)
