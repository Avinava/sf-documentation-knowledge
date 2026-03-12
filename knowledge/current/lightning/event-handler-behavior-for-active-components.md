---
title: "Event Handler Behavior for Active Components"
domain: lightning
topic: event-handler-behavior-for-active-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.798Z
estimatedTokens: 476
keywords: [Event, Handler, Behavior, Active, Components, prevent, handlers, cached, pages, causing, problems, add, workaround, code, check]
---

# Event Handler Behavior for Active Components

> To prevent active event handlers on cached pages from causing problems, add a
    workaround to your code to check if the component is still visible. To avoid this scenario and
    the workaround, use Lightning message service instead to communicate across the DOM within a
    Lightning page. The default scope used by Lightning message service channels publishes only to
    active components.

# Event Handler Behavior for Active Components

To prevent active event handlers on cached pages from causing problems, add a workaround to your code to check if the component is still visible. To avoid this scenario and the workaround, use Lightning message service instead to communicate across the DOM within a Lightning page. The default scope used by Lightning message service channels publishes only to active components.

When navigating away from a page in Lightning Experience, the framework caches the components in the page so that they remain active, along with their event handlers. This caching speeds up navigation, but it can cause the cached component to respond to events that are not intended for it, such as force:refreshView or force:recordSaveSuccess.

This workaround uses the offsetParent property for the component to get its handlers while they’re visible. The workaround is good only if the component definition has an HTML element in it.

This component includes an event handler and some HTML.

```

```

Here’s the client-side controller that uses the offsetParent property to get the component’s handlers while they’re still visible.

```

```

#### See Also

-   [Communicating Across the DOM with Lightning Message Service](atlas.en-us.lightning.meta/lightning/message_channel_intro.htm "Use Lightning message service to communicate across the DOM within a Lightning page. Communicate between Visualforce pages embedded in the same Lightning page, Aura components, and Lightning web components, including components in a utility bar and pop-out utilities. Choose whether a component subscribes to messages from the entire application, or from only the active area.")

-   [*Component Library:* Message Service](https://developer.salesforce.com/docs/component-library/bundle/lightning-message-service/documentation "Component Library: Message Service - HTML (New Window)")

## Code Examples

```
<!--myComponent.cmp-->
<aura:component>
  <aura:handler event="c:appEvent" action="{!c.onEvent}>
  <h1>This component has a handler</h1>
</aura:component>
```

```
/* myComponentController.js */
({
  onEvent: function(component, event, helper) {
    var elem = component.getElement();
    if (elem && elem.offsetParent !== null) {
      // event handling logic here
    }
  }
})
```

## Related Topics

- Communicating Across the DOM with Lightning Message Service (atlas.en-us.lightning.meta/lightning/message_channel_intro.htm)
