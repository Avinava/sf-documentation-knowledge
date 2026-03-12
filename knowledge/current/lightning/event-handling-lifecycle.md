---
title: "Event Handling Lifecycle"
domain: lightning
topic: event-handling-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.925Z
estimatedTokens: 479
keywords: [Event, Handling, Lifecycle, chart, summarizes, how, framework, handles, events]
---

# Event Handling Lifecycle

> The following chart summarizes how the framework handles events.

# Event Handling Lifecycle

The following chart summarizes how the framework handles events.

![Events Overview](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2FeventsOverview.jpg&folder=lightning)

1 Detect Firing of Event

The framework detects the firing of an event. For example, the event could be triggered by a button click in a notifier component.

2 Determine the Event Type

**2.1 Component Event**

The parent or container component instance that fired the event is identified. This container component locates all relevant event handlers for further processing.

**2.2 Application Event**

Any component can have an event handler for this event. All relevant event handlers are located.

3 Execute each Handler

**3.1 Executing a Component Event Handler**

Each of the event handlers defined in the container component for the event are executed by the handler controller, which can also:

-   Set attributes or modify data on the component (causing a re-rendering of the component).
-   Fire another event or invoke a client-side or server-side action.

**3.2 Executing an Application Event Handler**

All event handlers are executed. When the event handler is executed, the event instance is passed into the event handler.

4 Re-render Component (optional)

After the event handlers and any callback actions are executed, a component might be automatically re-rendered if it was modified during the event handling process.

#### See Also

-   [Create a Custom Renderer](atlas.en-us.lightning.meta/lightning/js_renderers.htm "The framework’s rendering service takes in-memory component state and creates and manages the DOM elements owned by the component. If you want to modify DOM elements created by the framework for a component, you can modify the DOM elements in the component’s renderer. Otherwise, the framework will override your changes when the component is rerendered.")

## Related Topics

- Create a Custom Renderer (atlas.en-us.lightning.meta/lightning/js_renderers.htm)
