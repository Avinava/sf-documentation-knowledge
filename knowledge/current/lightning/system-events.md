---
title: "System Events"
domain: lightning
topic: system-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.932Z
estimatedTokens: 683
keywords: [System, Events, framework, fires, several, lifecycle]
---

# System Events

> The framework fires several system events during its lifecycle.

# System Events

The framework fires several system events during its lifecycle.

You can handle these events in your Lightning apps or components, and within the Salesforce mobile app.

For examples, see the [Lightning Component Library](atlas.en-us.lightning.meta/lightning/component_library.htm "The Lightning Component Library is your hub for component reference information, including the Component Reference with live examples, and tools for Lightning Web Security and Lightning Locker.").

| Event Name | Description |
| --- | --- |
| aura:doneRendering (deprecated) | Indicates that the initial rendering of the root application has completed.NoteThe aura:doneRendering event is deprecated. Unless your component is running in complete isolation in a standalone app and not included in complex apps, such as Lightning Experience or the Salesforce mobile app, the container app may trigger your event handler multiple times. This behavior makes it difficult to handle each event appropriately. |
| aura:doneWaiting (deprecated) | Indicates that the app is done waiting for a response to a server request. This event is preceded by an aura:waiting event.NoteThe aura:doneWaiting event is deprecated. The aura:doneWaiting application event is fired for every server response, even for responses from other components in your app. Unless your component is running in complete isolation in a standalone app and not included in Lightning Experience or the Salesforce mobile app, the container app may trigger your event handler multiple times. This behavior makes it difficult to handle each event appropriately. |
| aura:locationChange | Indicates that the hash part of the URL has changed. |
| aura:noAccess | Indicates that a requested resource is not accessible due to security constraints on that resource. |
| aura:systemError | Indicates that an error has occurred. |
| aura:valueChange | Indicates that an attribute value has changed. |
| aura:valueDestroy | Indicates that a component has been destroyed. |
| aura:valueInit | Indicates that an app or component has been initialized. |
| aura:valueRender | Indicates that an app or component has been rendered or rerendered. |
| aura:waiting (deprecated) | Indicates that the app is waiting for a response to a server request.NoteThe aura:waiting event is deprecated. The aura:waiting application event is fired for every server request, even for requests from other components in your app. Unless your component is running in complete isolation in a standalone app and not included in Lightning Experience or the Salesforce mobile app, the container app may trigger your event handler multiple times. This behavior makes it difficult to handle each event appropriately. |

## Related Topics

- Lightning Component Library (atlas.en-us.lightning.meta/lightning/component_library.htm)
