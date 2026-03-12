---
title: "Events"
domain: lightning
topic: events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.878Z
estimatedTokens: 81
keywords: [Events, Although, attach, onclick, event, any, element, accessibility, consider, applying, elements, actionable, HTML, <a>, <button>, Event-driven, programming, languages, frameworks, JavaScript]
---

# Events

> Event-driven programming is used in many languages and
frameworks, such as JavaScript and Java Swing. The idea is that you
write handlers that respond to interface events as they occur.

# Events

Event-driven programming is used in many languages and frameworks, such as JavaScript and Java Swing. The idea is that you write handlers that respond to interface events as they occur.

A component registers that it may fire an event in its markup. Events are fired from JavaScript controller actions that are typically triggered by a user interacting with the user interface.

There are two types of events in the framework:

-   **Component events** are handled by the component itself or a component that instantiates or contains the component.
-   **Application events** are handled by all components that are listening to the event. These events are essentially a traditional publish-subscribe model.

You write the handlers in JavaScript controller actions.

#### See Also

-   [Communicating with Events](atlas.en-us.lightning.meta/lightning/events_intro.htm "The framework uses event-driven programming. You write handlers that respond to interface events as they occur. The events may or may not have been triggered by user interaction.")

-   [Handling Events with Client-Side Controllers](atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm "A client-side controller handles events within a component. It’s a JavaScript resource that defines the functions for all of the component’s actions.")

## Related Topics

- Communicating with Events (atlas.en-us.lightning.meta/lightning/events_intro.htm)
- Handling Events with Client-Side Controllers (atlas.en-us.lightning.meta/lightning/js_client_side_controller.htm)
