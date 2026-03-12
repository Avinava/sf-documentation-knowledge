---
title: "Events Best Practices"
domain: lightning
topic: events-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.839Z
estimatedTokens: 611
keywords: [Events, Best, Practices, working, Component, Whenever, Possible, Separate, Low-Level, Business, Logic, Dynamic, Actions, State, Dispatcher]
---

# Events Best Practices

> Here are some best practices for working with events.

# Events Best Practices

Here are some best practices for working with events.

## Use Component Events Whenever Possible

Always try to use a component event instead of an application event, if possible. Component events can only be handled by components above them in the containment hierarchy so their usage is more localized to the components that need to know about them. Application events are best used for something that should be handled at the application level, such as navigating to a specific record. Application events allow communication between components that are in separate parts of the application and have no direct containment relationship.

## Separate Low-Level Events from Business Logic Events

Handle low-level events, such as a click, in your event handler and refire them as higher-level events, such as an approvalChange event or whatever is appropriate for your business logic.

## Dynamic Actions Based on Component State

To invoke a different action on a click event depending on the state of the component, try this approach:

1.  Store the component state as a discrete value, such as New or Pending, in a component attribute.
2.  Put logic in your client-side controller that determines the next action to take.
3.  Put logic in the helper if you want to reuse it in the component bundle.

For example:

1.  Your component markup contains <lightning:button label="do something" onclick="{!c.handleClick}" />.
2.  In your controller, define the handleClick function, which delegates to the appropriate helper function or potentially fires the correct event.

## Using a Dispatcher Component to Listen and Relay Events

If you have a large number of handler component instances listening for an event, identify a dispatcher component to listen for the event. The dispatcher component can perform some logic to decide which component instances receive further information, and fire another component or application event targeted at those component instances.

#### See Also

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

-   [Events Anti-Patterns](atlas.en-us.lightning.meta/lightning/events_anti_patterns.htm "These are some anti-patterns that you should avoid when using events.")

## Related Topics

- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
- Events Anti-Patterns (atlas.en-us.lightning.meta/lightning/events_anti_patterns.htm)
