---
title: "Events Anti-Patterns"
domain: lightning
topic: events-anti-patterns
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.806Z
estimatedTokens: 368
keywords: [Events, Anti-Patterns, avoid, Don't, Fire, Event, Renderer, Don’t, onclick, ontouchend]
---

# Events Anti-Patterns

> These are some anti-patterns that you should avoid when
using events.

# Events Anti-Patterns

These are some anti-patterns that you should avoid when using events.

## Don't Fire an Event in a Renderer

Firing an event in a renderer can cause an infinite rendering loop.

**Don’t do this!**

```

```

Instead, use the init hook to run a controller action after component construction but before rendering. Add this code to your component:

```

```

For more details, see .[Invoking Actions on Component Initialization](atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm "Use the init event to initialize a component or fire an event after component construction but before rendering.").

## Don’t Use onclick and ontouchend Events

You can’t use different actions for onclick and ontouchend events in a component. The framework translates touch-tap events into clicks and activates any onclick handlers that are present.

#### See Also

-   [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.")

-   [Events Best Practices](atlas.en-us.lightning.meta/lightning/events_best_practices.htm "Here are some best practices for working with events.")

## Code Examples

```
afterRender: function(cmp, helper) {
    this.superAfterRender();
    $A.get("e.myns:mycmp").fire();
}
```

```
<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
```

## Related Topics

- Invoking Actions on Component Initialization (atlas.en-us.lightning.meta/lightning/js_cb_init_handler.htm)
- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
- Events Best Practices (atlas.en-us.lightning.meta/lightning/events_best_practices.htm)
