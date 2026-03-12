---
title: "Firing Events from Non-Aura Code"
domain: lightning
topic: firing-events-from-non-aura-code
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.891Z
estimatedTokens: 304
keywords: [Firing, Events, Non-Aura, Code, fire, Aura, JavaScript, outside, app, call, communicate, back, once, it's]
---

# Firing Events from Non-Aura Code

> You can fire Aura events from JavaScript code outside an Aura app. For example, your Aura
    app might need to call out to some non-Aura code, and then have that code communicate back to
    your Aura app once it's done.

# Firing Events from Non-Aura Code

You can fire Aura events from JavaScript code outside an Aura app. For example, your Aura app might need to call out to some non-Aura code, and then have that code communicate back to your Aura app once it's done.

For example, you could call external code that needs to log into another system and return some data to your Aura app by firing an Aura event. Let's call this event mynamespace:externalEvent. The external code fires this event when it’s ready to communicate with an Aura app.

```

```

#### See Also

-   [Application Events](atlas.en-us.lightning.meta/lightning/events_application.htm "Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component. All components that provide a handler for the event are notified.")

-   [Modifying Components Outside the Framework Lifecycle](atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm "Use $A.getCallback() to wrap any code that modifies a component outside the normal rerendering lifecycle, such as in a setTimeout() call. The $A.getCallback() call ensures that the framework rerenders the modified component and processes any enqueued actions.")

## Code Examples

```
var myExternalEvent;
if(window.$A &&
  (myExternalEvent = window.$A.get("e.mynamespace:externalEvent"))) {
    myExternalEvent.setParams({isOauthed:true});
    myExternalEvent.fire();
}
```

## Related Topics

- Application Events (atlas.en-us.lightning.meta/lightning/events_application.htm)
- Modifying Components Outside the Framework Lifecycle (atlas.en-us.lightning.meta/lightning/js_cb_mod_ext_js.htm)
